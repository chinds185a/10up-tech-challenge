import React from "react";
import { string } from "prop-types";

const PostDate = ({ date }) => (
  <div className="date">
    <strong>Publish Date</strong>:
    <span itemProp="datePublished">
      <time dateTime={date}>{date}</time>
    </span>
  </div>
);

PostDate.propTypes = {
  date: string.isRequired
};

export default PostDate;
