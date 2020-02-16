import React from "react";
import useFetch from "fetch-suspense";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// utilities
import { createMarkup } from "../../utilities/CreateMarkup";

const PostPage = () => {
  const { slug } = useParams();
  const data = useFetch(
    `https://exercise.10uplabs.com/wp-json/wp/v2/posts?slug=${slug}`,
    { method: "GET" }
  );

  const {
    title: { rendered: pageTitle },
    content: { rendered: pageContent }
  } = data[0];
  return (
    <>
      <Helmet>
        <title>10UP Blog | {pageTitle}</title>
      </Helmet>
      <div>
        <h1>{pageTitle}</h1>
        <main dangerouslySetInnerHTML={createMarkup(pageContent)} />
      </div>
    </>
  );
};

export default PostPage;
