import React, { useEffect, useState } from "react";
import { Home, Profile, Posts, Inbox, AccountForm } from "./components";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { fetchPosts } from "./api/api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || ""
  );

  const history = useHistory()

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

  useEffect(() => {
    window.localStorage.getItem("token", token);
  }, [token]);

  const logOut = () => {
    setToken("")
    history.push("/")
  }

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
        <div className="right-menu">
          {token ? (
            <button onClick={logOut} className="item">Log Out</button>
          ): <Link to="/account/login" className="log-nav">
            ACCOUNT
             </Link>
          }
         
        </div>
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
        <Route path="/account/:action">
          <AccountForm setToken={setToken} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
