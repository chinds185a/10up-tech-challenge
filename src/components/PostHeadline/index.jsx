import React from "react";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import { BLOG_ROUTE } from "../../utilities/constants";

const PostHeadline = ({ headline, slug }) => (
  <Link to={`${BLOG_ROUTE}/${slug}`}>
    <h2 itemProp="headline">{headline}</h2>
  </Link>
);

PostHeadline.propTypes = {
  headline: string.isRequired,
  slug: string.isRequired
};

export default PostHeadline;
