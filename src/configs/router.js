import React, { Fragment } from "react";
import { Switch, Route as ReactRoute } from "react-router-dom";

import { HomePage, AboutPage } from "../pages";

const Routes = () => (
  <Fragment>
    <Switch>
      <ReactRoute path="/about" exact component={AboutPage} />
      <ReactRoute path="/" exact component={HomePage} />
    </Switch>
  </Fragment>
);

export default Routes;
