import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { HOME_ROUTE, ABOUT_ROUTE, BLOG_ROUTE } from "./utilities/constants";

// contexts
import { UserContextProvider } from "./contexts/UserContext";

// ui
import Layout from "./containers/Layout";

// pages
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import AboutPage from "./pages/About";

// styles
import "./App.css";

const App = () => {
  return (
    <UserContextProvider>
      <HelmetProvider>
        <Router>
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
              </Switch>
            </Suspense>
          </Layout>
        </Router>
      </HelmetProvider>
    </UserContextProvider>
  );
};

export default App;
