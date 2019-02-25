export interface CreateRouteProps {
  path: string;
  exact: boolean;
  component: any;
  meta?: object;
}

export default function(
  path: string,
  exact: boolean = false,
  component: any,
  meta?: object
): CreateRouteProps {
  return {
    path,
    exact,
    component,
    meta
  };
}
