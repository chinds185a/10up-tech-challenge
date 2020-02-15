import React from "react";
import { shape, string } from "prop-types";

const PostExcerpt = ({ excerpt }) => {
  return (
    <div
      itemProp="articleBody"
      className="content"
      dangerouslySetInnerHTML={excerpt}
    />
  );
};

PostExcerpt.propTypes = {
  excerpt: shape({
    __html: string.isRequired
  })
};

export default PostExcerpt;
