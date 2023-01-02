import React from 'react';
import { DecoratorFn } from '@storybook/react';

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <>
      <StoryFn />
    </>
  );
};

// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme];
