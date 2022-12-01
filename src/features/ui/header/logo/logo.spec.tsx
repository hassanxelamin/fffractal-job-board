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
import { MockRouter } from '@utils/test-utils';

/*
 * Components
 */
import { LogoGrouped } from './components/logo-grouped';

it('has an anchor tag with href="/job-post"', () => {
  render(
    <RouterContext.Provider value={MockRouter}>
      <LogoGrouped />
    </RouterContext.Provider>
  );
  expect(screen.getByTestId('logo-link')).toHaveAttribute('href', '/');
  expect(screen.getByTestId('name-link')).toHaveAttribute('href', '/');
});

describe('when button is clicked', () => {
  it('calls router.push with "/"', () => {
    const router = MockRouter();

    render(
      <RouterContext.Provider value={router}>
        <LogoGrouped />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('logo-link'));

    expect(router.push).toHaveBeenCalledWith('/', '/', expect.anything());
  });

  it('calls router.push with "/"', () => {
    const router = MockRouter();

    render(
      <RouterContext.Provider value={router}>
        <LogoGrouped />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('name-link'));

    expect(router.push).toHaveBeenCalledWith('/', '/', expect.anything());
  });
});
