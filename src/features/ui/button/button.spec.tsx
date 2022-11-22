// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../utils/test-utils/createMockRouter';
import '@testing-library/jest-dom';

import { ButtonGradient } from './button';

it('has an anchor tag with href="/job-post"', () => {
  render(
    <RouterContext.Provider value={createMockRouter}>
      <ButtonGradient text="Post a Job" />
    </RouterContext.Provider>
  );
  expect(screen.getByRole('link')).toHaveAttribute('href', '/job-post');
});

describe('when button is clicked', () => {
  it('calls router.push with "/job-post"', () => {
    const router = createMockRouter();

    render(
      <RouterContext.Provider value={router}>
        <ButtonGradient text="Post a Job" />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByRole('link'));

    expect(router.push).toHaveBeenCalledWith(
      '/job-post',
      '/job-post',
      expect.anything()
    );
  });
});
