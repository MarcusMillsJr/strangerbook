import React from "react";
import { Home, Profile, Log } from "./components";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="nav-menu">
        <Link to="/" className="home-nav">Home</Link>
        <Link to="/Profile" className="profile-nav">Profile</Link>
        <Link to="/Log" className="log-nav">Log In</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Profile">
            <Profile />
        </Route>
        <Route path="/Log">
            <Log />
        </Route>
      </Switch>
    </>
  );
};

export default App;
