/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import uuid from 'react-uuid';
import { useSession, signOut } from 'next-auth/react';
import { ItemsLoggedOut, ItemsLoggedIn } from './items';

interface Props {
  toggleModal: () => void;
}

export default function useOnClickOutside(
  ref: React.MutableRefObject<HTMLDivElement>,
  handler: (event: any) => void
) {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        const target = event.target as HTMLElement;
        if (!ref.current || ref.current.contains(target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because the passed-in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export function Dropdown({ toggleModal }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { data: session } = useSession();
  const user = session?.user;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  return (
    <div ref={ref} className="relative mr-[16px]">
      <button
        onClick={() => {
          toggleMenu();
        }}
        title="job-post"
      >
        <div className="flex items-center w-[123px] hover:bg-[#f5f5f5] flex items-center justify-center text-center h-[42px] rounded-[50px] text-black font-bold text-[1.2rem] border-none w-[123px]">
          {!user ? (
            <div className="text-[1.2rem] font-bold mr-[0.5rem]">
              For Employers
            </div>
          ) : (
            <div className="text-[1.2rem] font-bold mr-[0.5rem]">
              My Account
            </div>
          )}
          <Image src="/dropdown.svg" alt="dropdown" width="9" height="7" />
        </div>
      </button>

      {isMenuOpen ? (
        <div className="dropdown-menu flex items-center justify-center flex-col absolute top-[50px] left-[3px] width-[123px] rounded-[10px] shadow-2xl">
          {!user ? (
            <ul>
              {ItemsLoggedOut.map((item) => (
                <div
                  key={uuid()}
                  className="flex items-center mb-[7px] mt-[7px] mr-[5px] ml-[5px] w-[110px] h-[35px] rounded-[10px] hover:bg-[#f5f5f5]"
                >
                  {item.name === 'Sign in' ? (
                    <div
                      className="w-[100%] h-[100%] flex items-center cursor-pointer"
                      onClick={() => {
                        toggleMenu();
                        toggleModal();
                      }}
                    >
                      <div className="text-[1.2rem] font-bold ml-[12px]">
                        {item.name}
                      </div>
                    </div>
                  ) : (
                    <Link
                      className="w-[100%] h-[100%] flex items-center"
                      href={`/${item.link}`}
                      title={item.link}
                      passHref
                    >
                      <div className="text-[1.2rem] font-bold ml-[12px]">
                        {item.name}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          ) : (
            <ul>
              {ItemsLoggedIn.map((item) => (
                <div
                  key={uuid()}
                  className="flex items-center mb-[7px] mt-[7px] w-[110px] h-[30px] rounded-[10px] hover:bg-[#f5f5f5]"
                >
                  {item.name === 'Sign Out' ? (
                    <div
                      className="w-[100%] h-[100%] flex items-center cursor-pointer"
                      onClick={() => {
                        toggleMenu();
                        signOut();
                      }}
                    >
                      <div className="text-[1.2rem] font-bold ml-[12px]">
                        {item.name}
                      </div>
                    </div>
                  ) : (
                    <Link
                      className="w-[100%] h-[100%] flex items-center"
                      href={item.link}
                      title={item.link}
                      passHref
                    >
                      <div className="text-[1.2rem] font-bold ml-[12px]">
                        {item.name}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
