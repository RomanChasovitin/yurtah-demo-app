import React from "react";

import { Link, withRouter } from "react-router-dom";

import headerLogoIcon from "../assets/images/logo.svg";

import FindListing from "./FindListing";

const Header = ({ location }) => {
  const menuItems = [
    {
      id: 1,
      href: "/",
      text: "Home"
    },
    {
      id: 2,
      href: "/about",
      text: "About Us"
    }
  ];

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src={headerLogoIcon} alt="Logo" />
        </div>
        <div className="header__menu">
          {menuItems.map(itm => (
            <Link
              to={itm.href}
              key={itm.id}
              className={`header__menu-item ${
                itm.href === location.pathname ? "header__menu-item_active" : ""
              }`}>
              {itm.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="header__content">
        <div className="header__content-message">Best ever camp for your child</div>
        <div className="header__content-input">
          {location.pathname === "/" ? <FindListing /> : null}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
