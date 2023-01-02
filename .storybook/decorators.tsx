import React from 'react';
import { DecoratorFn } from '@storybook/react';
// import { GlobalStyles } from '../src/utils/css-mixins';

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <StoryFn />
    </>
  );
};

// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme];
