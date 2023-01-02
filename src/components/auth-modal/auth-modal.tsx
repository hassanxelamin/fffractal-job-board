import React, { useState } from 'react';
import Link from 'next/link';
import { XIcon, MailOpenIcon } from '@heroicons/react/outline';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { signIn } from 'next-auth/react';
import { Input } from './input';
import { LogoSVG } from '../logo/logo-svg';

interface EmailProps {
  email: string;
}

interface AuthProps {
  toggleModal: () => void;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Invalid email')
    .required('This field is required'),
});

const Confirm = ({ email = '' }: EmailProps) => (
  <div className="flex flex-col justify-center items-center text-center w-[75%] leading-[3rem] mt-[5rem] text-[2rem] font-light">
    <div>We emailed a magic link to</div>
    <div className="font-bold">
      <strong>{email ?? ''}</strong>.
    </div>
    <div>
      Check your inbox and click the link in the email to login or sign up.
    </div>
  </div>
);

export const AuthModal = ({ toggleModal }: AuthProps) => {
  const [showConfirm, setConfirm] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const signInWithEmail = async ({ email }: EmailProps) => {
    let toastId;
    try {
      toastId = toast.loading('Loading...');
      setDisabled(true);
      // Perform sign in
      const { error }: any = await signIn('email', {
        redirect: false,
        callbackUrl: window.location.href,
        email,
      });
      // Something went wrong
      if (error) {
        throw new Error(error);
      }
      setConfirm(true);
      toast.dismiss(toastId);
    } catch (err) {
      toast.error('Unable to sign in', { id: toastId });
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="flex items-center justify-center backdrop-blur-[4px] z-50 h-full w-full absolute left-0 top-0 overflow-hidden">
      <div className="bg-white w-[448px] h-[420px] shadow-[0_20px_25px_10px_rgba(0,0,0,0.1),0_8px_10px_-10px_rgba(0,0,0,0.1)] relative rounded-[10px] flex flex-col items-center justify-center text-center">
        <div
          onClick={toggleModal}
          className="transition hover:bg-[#F3F4F6] focus:outline-none absolute top-[1rem] right-[1rem] pt-[0.5rem] pr-[0.5rem] pl-[0.5rem] shrink-0 rounded-[0.375rem]"
        >
          <XIcon className="w-[2rem] h-[2rem]" />
        </div>

        <div className="absolute top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {!showConfirm ? (
            <Link href="/" passHref data-testid="logo-link">
              <LogoSVG />
            </Link>
          ) : (
            <MailOpenIcon className="w-[5rem] h-[5rem]" />
          )}
        </div>

        <div className="absolute top-[29%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.3rem] font-bold">
          {!showConfirm ? (
            <div>Welcome back!</div>
          ) : (
            <div>Confirm your email</div>
          )}
        </div>

        {!showConfirm ? (
          <Formik
            initialValues={{ email: '' }}
            validationSchema={SignInSchema}
            validateOnBlur={false}
            onSubmit={signInWithEmail}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col justify-center items-center w-[75%]">
                <div className="w-[350px]">
                  <Input
                    name="email"
                    type="email"
                    placeholder="elon@spacex.com"
                    spellCheck={false}
                    disabled={disabled}
                  />
                </div>
                <div className="w-[350px] h-[3rem]">
                  <button
                    type="submit"
                    disabled={disabled}
                    className="transition mt-[1.5rem] w-[100%] bg-black text-white pt-[1.5rem] pb-[1.5rem] pl-[2rem] pr-[2rem] rounded-[0.375rem] focus:outline-none"
                  >
                    {isSubmitting ? 'Loading...' : 'Sign in'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{ email: '' }}
            validationSchema={SignInSchema}
            validateOnBlur={false}
            onSubmit={signInWithEmail}
          >
            {({ values }) => <Confirm email={values?.email ?? ''} />}
          </Formik>
        )}
      </div>
    </div>
  );
};
