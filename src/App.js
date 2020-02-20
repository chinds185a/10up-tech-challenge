import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utilities/histoy";
import { HelmetProvider } from "react-helmet-async";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  BLOG_ROUTE,
  LOGIN_ROUTE
} from "./utilities/constants";

// contexts
import { UserContextProvider } from "./contexts/UserContext";

// ui
import Layout from "./containers/Layout";

// pages
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";

// styles
import "./App.css";

const App = () => {
  return (
    <UserContextProvider>
      <HelmetProvider>
        <Router history={history}>
          <Layout>
            <Suspense fallback={<h2>loading.....</h2>}>
              <Switch>
                <Route path={HOME_ROUTE} exact>
                  <HomePage />
                </Route>
                <Route path={ABOUT_ROUTE}>
                  <AboutPage />
                </Route>
                <Route path={`${BLOG_ROUTE}/:slug`}>
                  <PostPage />
                </Route>
                <Route path={LOGIN_ROUTE}>
                  <LoginPage />
                </Route>
              </Switch>
            </Suspense>
          </Layout>
        </Router>
      </HelmetProvider>
    </UserContextProvider>
  );
};

export default App;
