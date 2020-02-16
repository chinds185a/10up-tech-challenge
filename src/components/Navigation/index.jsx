import React from "react";
import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  LOGIN_ROUTE,
  LOGOUT_ROUTE
} from "../../utilities/constants";

const Navigation = () => (
  <nav
    className="site-navigation"
    role="navigation"
    itemScope="itemscope"
    itemType="http://schema.org/SiteNavigationElement"
  >
    <a href="#menu-main-nav" id="js-menu-toggle" className="site-menu-toggle">
      <span className="screen-reader-text">Primary Menu</span>
      <span aria-hidden="true">☰</span>
    </a>

    <ul id="menu-main-nav" className="primary-menu">
      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
        <Link to={HOME_ROUTE}>Home</Link>
      </li>
      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <Link to={ABOUT_ROUTE}>About</Link>
      </li>

      {/* <!-- Should only show when user is logged out --> */}
      <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <a href={LOGIN_ROUTE}>Login</a>
      </li>

      {/* <!-- Should only show when user is logged in --> */}
      <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <a href={LOGOUT_ROUTE}>Logout</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
