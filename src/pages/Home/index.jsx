import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import useFetch from "fetch-suspense";

// contexts
import { UserContext } from "../../contexts/UserContext";

// components
import WelcomeBanner from "../../components/WelcomeBanner";
import Post from "../../components/Post";

const HomePage = () => {
  const { userState } = useContext(UserContext);
  const { authenticated, username } = userState;

  const data = useFetch("https://exercise.10uplabs.com/wp-json/wp/v2/posts", {
    method: "GET"
  });

  return (
    <>
      <Helmet>
        <title>10UP | Home</title>
      </Helmet>
      <div>
        {authenticated && <WelcomeBanner username={username} />}
        <div itemScope itemType="https://schema.org/Blog">
          {data.map(post => (
            <Post key={`post-${post.id}`} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
