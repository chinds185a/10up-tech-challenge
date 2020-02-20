import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useFetch from "fetch-suspense";

// contexts
import { UserContext } from "../../contexts/UserContext";

// reducer
import { loginUser, logoutUser } from "../../reducers/UserReducer";

// components
import WelcomeBanner from "../../components/WelcomeBanner";
import Post from "../../components/Post";

const ls = require("local-storage");
const axios = require("axios");

const HomePage = () => {
  const { userState, userDispatch } = useContext(UserContext);

  useEffect(() => {
    const user = ls.get("user");
    if (user) {
      axios({
        method: "post",
        url: "https://exercise.10uplabs.com/wp-json/jwt-auth/v1/token/validate",
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
        .then(response => {
          // token validation sucessful, login the user
          userDispatch(loginUser(user));
        })
        .catch(error => {
          // token validation was not sucessful, logout user
          userDispatch(logoutUser());
        });
    }
  }, []);

  const { user_display_name: username } = userState;

  const data = useFetch("https://exercise.10uplabs.com/wp-json/wp/v2/posts", {
    method: "GET"
  });

  return (
    <>
      <Helmet>
        <title>10UP | Home</title>
      </Helmet>
      <div>
        {userState && <WelcomeBanner username={username} />}
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
