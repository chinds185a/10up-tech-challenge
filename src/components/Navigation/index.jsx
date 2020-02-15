import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">Home</Link>
      </li>
      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <Link to="/about">About</Link>
      </li>

      {/* <!-- Should only show when user is logged out --> */}
      <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <a href="login.html">Login</a>
      </li>

      {/* <!-- Should only show when user is logged in --> */}
      <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <a href="#">Logout</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
