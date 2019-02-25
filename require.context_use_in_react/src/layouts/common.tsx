import React, { Component } from "react";
import { Switch, Route } from "react-router";

export interface CommonLayoutProps {
  routes: CreateRouteProps[];
}

import { CreateRouteProps } from "../router/createRoute";

class CommonLayout extends Component<CommonLayoutProps> {
  render() {
    return (
      <div>
        <p>common</p>
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

export default CommonLayout;
