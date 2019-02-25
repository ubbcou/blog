import AC from '../../adminPages/A';
import BC from '../../adminPages/B';
import createRoute, { CreateRouteProps } from '../createRoute';


function createRoutes(): CreateRouteProps[]{
  return [
    createRoute('/admin', false, AC),
    createRoute('/admin/b', false, BC),
  ];
}

const routes = createRoutes();

export default routes;
