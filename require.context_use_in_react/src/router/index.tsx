import layoutsComponents from '../layouts';
import modulesRoutes from './modules';

export default (() => {
  return [
    {
      path: '/',
      exact: true,
      component: layoutsComponents.CommonLayout,
      children: modulesRoutes
    },
    {
      path: '/admin',
      exact: false,
      component: layoutsComponents.AdminLayout,
      children: modulesRoutes
    }
  ]
})();
