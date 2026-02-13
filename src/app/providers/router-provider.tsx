import { createRouter, RouterProvider } from '@tanstack/react-router';

import { AccountPageRoute } from '@/pages/account-page/route';
import { rootRoute } from '@/shared/lib/root-route';

const routeTree = rootRoute.addChildren([AccountPageRoute]);

const router = createRouter({ routeTree, basepath: '/expense-tracker' });

export function AppRouter() {
  return <RouterProvider router={router} />;
}
