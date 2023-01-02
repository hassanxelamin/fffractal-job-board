import React from 'react';
import { DecoratorFn } from '@storybook/react';
<<<<<<< HEAD:.storybook/decorators.tsx
// import { GlobalStyles } from '../src/utils/css-mixins';
=======
import { GlobalStyles } from '../src/utils/css-mixins';
>>>>>>> main:src/.storybook/decorators.tsx

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <>
<<<<<<< HEAD:.storybook/decorators.tsx
      {/* <GlobalStyles /> */}
=======
      <GlobalStyles />
>>>>>>> main:src/.storybook/decorators.tsx
      <StoryFn />
    </>
  );
};

// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme];
