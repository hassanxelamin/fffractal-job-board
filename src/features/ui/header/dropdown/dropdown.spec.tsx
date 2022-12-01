// // @ts-nocheck
// import React from 'react';

// /*
//  * React Test Library
//  */
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';

// /*
//  * Mock Utils
//  */
// import { RouterContext } from 'next/dist/shared/lib/router-context';
// import { MockRouter } from '@utils/test-utils';
// import { useSession } from 'next-auth/react';

// /*
//  * Components
//  */
// import { Dropdown } from './dropdown';

// jest.mock('next-auth/react');

// /*
//  * Tests if link has href in anchor tag with the right path
//  */
// // it('has an anchor tag with href="/"', async () => {
// //   const mockSession = {
// //     expires: new Date(Date.now() + 2 * 86400).toISOString(),
// //     user: { username: "admin" }
// //   };
// //   (useSession as jest.Mock).mockReturnValueOnce([mockSession, 'authenticated']);

// //   render(
// //     <RouterContext.Provider value={MockRouter}>
// //       <Dropdown />
// //     </RouterContext.Provider>
// //   );
// //   expect(screen.getByTitle('logo-link')).toHaveAttribute('href', '/');
// //   expect(screen.getByTitle('name-link')).toHaveAttribute('href', '/');
// // });

// /*
//  * Tests if link navigates to right path
//  */
// describe('when button is clicked', () => {
//   it('calls router.push with "/job-post"', () => {
//     const router = MockRouter();
//     const mockSession = {
//       expires: new Date(Date.now() + 2 * 86400).toISOString(),
//       user: { username: 'admin' },
//     };
//     (useSession as jest.Mock).mockReturnValueOnce([
//       mockSession,
//       'authenticated',
//     ]);

//     render(
//       <RouterContext.Provider value={router}>
//         <Dropdown />
//       </RouterContext.Provider>
//     );

//     fireEvent.click(screen.getByTitle('job-post'));

//     expect(router.push).toHaveBeenCalledWith(
//       '/job-post',
//       '/job-post',
//       expect.anything()
//     );
//   });

//   it('calls router.push with "/my-jobs"', () => {
//     const router = MockRouter();
//     const mockSession = {
//       expires: new Date(Date.now() + 2 * 86400).toISOString(),
//       user: { username: 'admin' },
//     };
//     (useSession as jest.Mock).mockReturnValueOnce([
//       mockSession,
//       'authenticated',
//     ]);

//     render(
//       <RouterContext.Provider value={router}>
//         <Dropdown />
//       </RouterContext.Provider>
//     );

//     fireEvent.click(screen.getByTitle('my-jobs'));

//     expect(router.push).toHaveBeenCalledWith(
//       '/my-jobs',
//       '/my-jobs',
//       expect.anything()
//     );
//   });

//   it('calls router.push with "/my-jobs"', () => {
//     const router = MockRouter();
//     const mockSession = {
//       expires: new Date(Date.now() + 2 * 86400).toISOString(),
//       user: { username: 'admin' },
//     };
//     (useSession as jest.Mock).mockReturnValueOnce([
//       mockSession,
//       'authenticated',
//     ]);

//     render(
//       <RouterContext.Provider value={router}>
//         <Dropdown />
//       </RouterContext.Provider>
//     );

//     fireEvent.click(screen.getByTitle('my-jobs'));

//     expect(router.push).toHaveBeenCalledWith(
//       '/my-jobs',
//       '/my-jobs',
//       expect.anything()
//     );
//   });

//   it('calls router.push with "/job-post"', () => {
//     const router = MockRouter();
//     const mockSession = {
//       expires: new Date(Date.now() + 2 * 86400).toISOString(),
//       user: { username: 'admin' },
//     };
//     (useSession as jest.Mock).mockReturnValueOnce([
//       mockSession,
//       'authenticated',
//     ]);

//     render(
//       <RouterContext.Provider value={router}>
//         <Dropdown />
//       </RouterContext.Provider>
//     );

//     fireEvent.click(screen.getByTitle('job-post'));

//     expect(router.push).toHaveBeenCalledWith(
//       '/job-post',
//       '/job-post',
//       expect.anything()
//     );
//   });
// });
