import React from "react";
import { Helmet } from "react-helmet-async";
import { useRouteMatch } from "react-router-dom";
import useFetch from "fetch-suspense";

// utilities
import { createMarkup } from "../../utilities/CreateMarkup";

const AboutPage = () => {
  const { path } = useRouteMatch();
  const data = useFetch(
    `https://exercise.10uplabs.com/wp-json/wp/v2/pages?slug?slug=${path}`,
    { method: "GET" }
  );
  const {
    slug,
    title: { rendered: pageTitle },
    content: { rendered: pageContent }
  } = data[0];
  return (
    <>
      <Helmet>
        <title>10UP | {pageTitle}</title>
      </Helmet>
      <div>
        <h1>About Page</h1>
        <main dangerouslySetInnerHTML={createMarkup(pageContent)} />
      </div>
    </>
  );
};

export default AboutPage;
