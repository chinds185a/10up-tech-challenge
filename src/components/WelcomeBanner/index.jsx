import React from "react";
import { string } from "prop-types";

const WelcomeBanner = ({ username }) => (
  <section className="welcome logged-in">Welcome {username}</section>
);

WelcomeBanner.propTypes = {
  username: string.isRequired
};

export default WelcomeBanner;
