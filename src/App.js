import React, { useEffect, useState } from "react";
import { Home, Profile, Log, Posts, Inbox } from "./components";
import { Route, Switch, Link } from "react-router-dom";
import { fetchPosts } from "./api/api";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await fetchPosts();
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);


  return (
    <>
      <nav className="title-page">
        <Link to="/" className="stranger-title">
          STRANGER BOOK
        </Link>
      </nav>
      <aside className="nav-menu">
        <Link to="/Profile" className="profile-nav">
          PROFILE
        </Link>
        <Link to="/Inbox" className="inbox-nav">
          INBOX
        </Link>
        <Link to="/Posts" className="post-nav">
          POST
        </Link>
        <Link to="/Log" className="log-nav">
          LOG-IN
        </Link>
      </aside>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Inbox">
          <Inbox />
        </Route>
        <Route path="/Posts">
          <Posts posts={posts} />
        </Route>
        <Route path="/Log">
          <Log />
        </Route>
      </Switch>
    </>
  );
};

export default App;
