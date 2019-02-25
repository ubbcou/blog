import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { CreateRouteProps } from "../router/createRoute";

export interface AdminLayoutProps {
  routes: CreateRouteProps[];
}

class AdminLayout extends Component<AdminLayoutProps> {
  render() {
    return (
      <div>
        <p>admin</p>
        <Switch>
          {this.props.routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default AdminLayout;
