import React from "react";
import { Helmet } from "react-helmet-async";

// utilities
import { createMarkup } from "../../utilities/CreateMarkup";

// data fetch
import { fetchData } from "../../Api";

const resource = fetchData("https://exercise.10uplabs.com/wp-json/wp/v2/pages");

const AboutPage = () => {
  const data = resource.pageData.read();
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
