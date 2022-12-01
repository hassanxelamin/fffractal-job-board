import React, { useState } from 'react';
import styled from 'styled-components';
import { XIcon, MailOpenIcon } from '@heroicons/react/outline';
import { Cover } from '@utils/css-mixins';
import { LogoImage } from '@features/ui';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { signIn } from 'next-auth/react';
import { Input } from './input';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Invalid email')
    .required('This field is required'),
});

const Confirm = ({ email = '' }) => (
  <ConfirmedEmail>
    <div>We emailed a magic link to</div>
    <EmailHighlight>
      <strong>{email ?? ''}</strong>.
    </EmailHighlight>
    <div>
      Check your inbox and click the link in the email to login or sign up.
    </div>
  </ConfirmedEmail>
);

export const AuthModal = ({ visible, toggleModal }) => {
  if (visible) return null;

  const [showConfirm, setConfirm] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const signInWithEmail = async ({ email }) => {
    let toastId;
    try {
      toastId = toast.loading('Loading...');
      setDisabled(true);
      // Perform sign in
      const { error } = await signIn('email', {
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
    <Container>
      <ModalContainer>
        <CloseButton onClick={toggleModal}>
          <Icon />
        </CloseButton>

        <ModalLogo>{!showConfirm ? <LogoImage /> : <EmailIcon />}</ModalLogo>

        <ModalTitle>
          {!showConfirm ? (
            <div>Welcome back!</div>
          ) : (
            <div>Confirm your email</div>
          )}
        </ModalTitle>

        {!showConfirm ? (
          <Formik
            initialValues={{ email: '' }}
            validationSchema={SignInSchema}
            validateOnBlur={false}
            onSubmit={signInWithEmail}
          >
            {({ isSubmitting, values }) => (
              <Forms>
                <FormInput>
                  <Input
                    name="email"
                    type="email"
                    placeholder="elon@spacex.com"
                    spellCheck={false}
                    disabled={disabled}
                  />
                </FormInput>
                <FormButton>
                  <Button type="submit" disabled={disabled}>
                    {isSubmitting ? 'Loading...' : 'Sign in'}
                  </Button>
                </FormButton>
              </Forms>
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
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  ${Cover}
  backdrop-filter: blur(4px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ConfirmedEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  line-height: 3rem;
  margin-top: 5rem;
  font-size: 2rem;
  font-weight: 300;
`;

const EmailHighlight = styled.div`
  font-weight: 700;
`;

const ModalContainer = styled.div`
  /* border: 1px solid #000; */
  background-color: white;
  width: 448px;
  height: 420px;
  box-shadow: 0 20px 25px 10px rgb(0 0 0 / 0.1),
    0 8px 10px -10px rgb(0 0 0 / 0.1);

  position: relative;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 0.5rem 0rem 0.5rem;
  flex-shrink: 0;
  border-radius: 0.375rem;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: rgb(243 244 246);
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled(XIcon)`
  width: 2rem;
  height: 2rem;
`;

const EmailIcon = styled(MailOpenIcon)`
  width: 5rem;
  height: 5rem;
`;

const ModalLogo = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalTitle = styled.div`
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2.3rem;
  font-weight: 700;
`;

const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
`;

const FormInput = styled.div`
  width: 350px;
`;

const FormButton = styled.div`
  width: 350px;
  height: 3rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem; /* 32px */
  padding-right: 2rem; /* 32px */
  border-radius: 0.375rem;

  &:focus {
    outline: none;
    /* -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-opacity: 0.2;
    border: 1px solid rgba(81, 203, 238, 1); */
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
