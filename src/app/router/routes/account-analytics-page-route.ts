import { createRoute } from '@tanstack/react-router';

import { AccountAnalyticsPage } from '@/pages/account-analytics-page';

import { rootRoute } from '../root-route';

export const AccountAnalyticsPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account-analytics',
  component: AccountAnalyticsPage,
});
