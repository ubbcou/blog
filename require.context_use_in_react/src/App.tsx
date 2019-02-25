import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./router";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={() => <route.component routes={route.children} />}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
