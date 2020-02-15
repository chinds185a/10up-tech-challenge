import React from "react";
import { Helmet } from "react-helmet-async";
import useFetch from "fetch-suspense";
import { Link } from "react-router-dom";

const HomePage = () => {
  const data = useFetch("https://exercise.10uplabs.com/wp-json/wp/v2/posts", {
    method: "GET"
  });

  return (
    <>
      <Helmet>
        <title>10UP | Home</title>
      </Helmet>
      <div>
        <h1>Home Page</h1>
        <main>
          {data.map(post => (
            <Link to={`/blog/${post.slug}`}>
              <h3>{post.title.rendered}</h3>
            </Link>
          ))}
        </main>
      </div>
    </>
  );
};

export default HomePage;
