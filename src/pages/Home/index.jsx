import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// data fetch
import { fetchData } from "../../Api";

const resource = fetchData("https://exercise.10uplabs.com/wp-json/wp/v2/posts");

const HomePage = () => {
  const data = resource.pageData.read();
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
