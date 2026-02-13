import { createRootRoute, Outlet } from '@tanstack/react-router';

import { AppLayout } from '../layout';

export const rootRoute = createRootRoute({
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
});
