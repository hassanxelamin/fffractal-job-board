import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef<any>(null);

  const handleClickOutside = (ev: { target: any }) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const setVisibility = (initState: boolean) => {
    setIsComponentVisible(initState);
  };

  return { ref, isComponentVisible, setVisibility };
}
