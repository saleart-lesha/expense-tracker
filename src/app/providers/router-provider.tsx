import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from '../router/router';

const router = createRouter({ routeTree, basepath: '/expense-tracker' });

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
