// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../../utils/test-utils/createMockRouter';
import '@testing-library/jest-dom';

import { LogoGrouped } from './components/logo-grouped';

it('has an anchor tag with href="/job-post"', () => {
  render(
    <RouterContext.Provider value={createMockRouter}>
      <LogoGrouped />
    </RouterContext.Provider>
  );
  expect(screen.getByTestId('logo-link')).toHaveAttribute('href', '/');
  expect(screen.getByTestId('name-link')).toHaveAttribute('href', '/');
});

describe('when button is clicked', () => {
  it('calls router.push with "/"', () => {
    const router = createMockRouter();

    render(
      <RouterContext.Provider value={router}>
        <LogoGrouped />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('logo-link'));

    expect(router.push).toHaveBeenCalledWith('/', '/', expect.anything());
  });

  it('calls router.push with "/"', () => {
    const router = createMockRouter();

    render(
      <RouterContext.Provider value={router}>
        <LogoGrouped />
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByTestId('name-link'));

    expect(router.push).toHaveBeenCalledWith('/', '/', expect.anything());
  });
});
