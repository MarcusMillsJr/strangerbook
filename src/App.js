import React, { useEffect, useState } from "react";
import { Home, Profile, Posts, AccountForm, CreatePost, MyInbox} from "./components";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { fetchPosts, fetchUser } from "./api/api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(
    window.localStorage.getItem("token" || "")
  );
  
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")


  const history = useHistory();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await fetchPosts(token);
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [token]);

  
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const { username } = await fetchUser(token);
        // console.log(username, "username");
        setUser(username);
        // create state for all user data 
        // pass that to profile
      };
      getUser();
    }
  }, [token]);


  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token", token);
    }
  }, [token]);

  
  const logOut = () => {
    setToken("");
    setUser(null);
    history.push("/");
  };

  return (
    <>
    <div>
    </div>
      <nav className="nav-menu">
        <div className="left-nav">
        <Link to="/profile" className="profile-nav">
          PROFILE
        </Link>
        <Link to="/posts" className="post-nav">
          POST
        </Link>
        </div>
        <nav className="title-page">
        <Link to="/" className="stranger-title">
          STRANGER BOOK
        </Link>
      </nav>
        
        <div className="right-menu">
          {token ? (
            <button type="button" onClick={logOut} className="log-nav">
              LOG OUT
            </button>
          ) : (
            <Link to="/account/login" className="log-nav">
              LOG IN
            </Link>
          )}
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile token={token} posts={posts} setPosts={setPosts} />
        </Route>
        <Route path="/posts">
          <Posts posts={posts} token={token} setPosts={setPosts} />
        </Route>
        <Route path="/create">
          <CreatePost token={token} setPosts={setPosts} />
        </Route>
        <Route path="/account/:action">
          <AccountForm setToken={setToken} />
        </Route>
        <Route>
          <MyInbox posts={posts} token={token}/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
