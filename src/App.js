import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <Router>
        <Layout>
          <Suspense fallback={<h2>loading.....</h2>}>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/blog/:slug">
                <PostPage />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
