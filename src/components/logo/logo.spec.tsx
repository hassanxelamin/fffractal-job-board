// @ts-nocheck
import React from 'react';

/*
 * React Test Library
 */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

/*
 * Mock Utils
 */
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { MockRouter } from 'src/helpers/test-utils';

/*
 * Components
 */
import { Logo } from './logo';

/*
 * Tests if link has href in anchor tag with the right path
 */
it('has an anchor tag with href="/"', () => {
  render(
    <RouterContext.Provider value={MockRouter}>
      <Logo />
    </RouterContext.Provider>
  );
  expect(screen.getByTestId('logo-link')).toHaveAttribute('href', '/');
  expect(screen.getByTestId('name-link')).toHaveAttribute('href', '/');
});

/*
 * Tests if link navigates to right path
 */
describe('when button is clicked', () => {
  it('calls router.push with "/"', () => {
    const router = MockRouter();

    render(
      <RouterContext.Provider value={router}>
        <Logo />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('logo-link'));

    expect(router.push).toHaveBeenCalledWith('/', '/', expect.anything());
  });

  it('calls router.push with "/"', () => {
    const router = MockRouter();

    render(
      <RouterContext.Provider value={router}>
        <Logo />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('name-link'));

    expect(router.push).toHaveBeenCalledWith('/', '/', expect.anything());
  });
});
