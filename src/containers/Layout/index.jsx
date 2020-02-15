import React from "react";
import { Helmet } from "react-helmet-async";

// components
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

// styles
import "./index.css";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>10up Blog</title>
    </Helmet>
    <Header>
      <Navigation />
    </Header>

    <main>{children}</main>
  </>
);
export default Layout;
