import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// pages
import PostPage from "./pages/Post";
import AboutPage from "./pages/About";

// styles
import "./App.css";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>10UP!</title>
      </Helmet>
      <Router>
        <div>
          <Suspense fallback={<h2>loading.....</h2>}>
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/blog/:slug">
                <PostPage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
