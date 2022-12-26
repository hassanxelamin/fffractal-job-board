import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  spellCheck: boolean;
  disabled: boolean;
}

export function Input({ ...props }: Props) {
  const [field] = useField(props);
  return (
    <Container>
      <InputContainer>
        <InputWrapper>
          <InputForm {...field} {...props} />
        </InputWrapper>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
`;

const InputContainer = styled.div`
  flex: 1 1 0%;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputForm = styled.input`
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-radius: 0.375rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-width: 1px;
  &:focus {
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-opacity: 0.2;
    border: 1px solid #680aca;
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
