import React, { Fragment } from "react";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Routes
import Routes from "./configs/router";

// Header
import { Header } from "./components";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Fragment>
  );
};

export default App;
