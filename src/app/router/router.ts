import { rootRoute } from './root-route.tsx';
import { AccountPageRoute } from './routes';

export const routeTree = rootRoute.addChildren([AccountPageRoute]);
