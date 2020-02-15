import React from "react";

const Header = ({ children }) => (
  <header
    className="site-header"
    role="banner"
    itemScope="itemscope"
    itemType="http://schema.org/WPHeader"
  >
    <h1
      className="site-title"
      itemScope
      itemType="http://schema.org/Organization"
    >
      10up Blog
    </h1>

    {children}
  </header>
);

export default Header;
