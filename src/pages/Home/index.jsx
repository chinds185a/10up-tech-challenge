import React from "react";
import { Helmet } from "react-helmet-async";
import useFetch from "fetch-suspense";

// components
import Post from "../../components/Post";

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
            <Post key={`post-${post.id}`} post={post} />
          ))}
        </main>
      </div>
    </>
  );
};

export default HomePage;
