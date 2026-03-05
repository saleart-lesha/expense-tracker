import { createRoute } from '@tanstack/react-router';

import { AccountPage } from '@/pages/account-page';

import { rootRoute } from '../root-route.tsx';

export const AccountPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AccountPage,
});
