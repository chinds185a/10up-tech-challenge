import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import PostPage from "./pages/Post";
import AboutPage from "./pages/About";

// styles
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/blog/:slug">
            <PostPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
