import React from "react";
import { string } from "prop-types";

const PostAuthor = ({ authorName, authorLink }) => (
  <div className="author">
    <strong>Author</strong>:
    <a href={authorLink}>
      <span itemProp="author">{authorName}</span>
    </a>
  </div>
);

PostAuthor.propTypes = {
  authorName: string.isRequired,
  authorLink: string.isRequired
};

export default PostAuthor;
