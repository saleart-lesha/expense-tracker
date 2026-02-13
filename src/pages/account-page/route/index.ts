import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '@/shared/lib/root-route';

import { AccountPage } from '../ui';

export const AccountPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AccountPage,
});
