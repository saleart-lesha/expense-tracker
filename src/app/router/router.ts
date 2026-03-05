import { rootRoute } from './root-route.tsx';
import { AccountAnalyticsPageRoute, AccountPageRoute } from './routes';

export const routeTree = rootRoute.addChildren([AccountPageRoute, AccountAnalyticsPageRoute]);
