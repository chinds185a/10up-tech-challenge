import React from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Post Page</h1>
      <h2>Slug: {slug}</h2>
    </div>
  );
};

export default PostPage;
