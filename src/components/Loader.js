import React from "react";

import loaderIcon from "../assets/images/oval.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader__icon" src={loaderIcon} alt="Loading..." />
    </div>
  );
};

export default Loader;
