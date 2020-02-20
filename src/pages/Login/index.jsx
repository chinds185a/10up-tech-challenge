import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HOME_ROUTE } from "../../utilities/constants";

// contexts
import { UserContext } from "../../contexts/UserContext";

// reducers
import { loginUser } from "../../reducers/UserReducer";

// styles
import "./login.css";

// components
import LoginForm from "../../components/LoginForm";

const axios = require("axios").default;

const LoginPage = () => {
  const { userDispatch } = useContext(UserContext);
  const [formState, setFormState] = useState();
  let history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    axios({
      method: "post",
      url: "https://exercise.10uplabs.com/wp-json/jwt-auth/v1/token",
      data: formState
    })
      .then(response => {
        // successfully authenticated, login user and redirect to home
        userDispatch(loginUser(response.data));
        history.push(HOME_ROUTE);
      })
      .catch(error => {
        // authentication failed
        alert(error);
      });
  };

  const handleChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Helmet>
        <title>10UP Blog | Login</title>
      </Helmet>
      <div>
        <h1>Login</h1>
        <div className="login">
          <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
