import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import { Link} from "react-router-dom";
import MessageForm from "./MessageForm";
import MyPosts from "./MyPosts"
import Posts from "./Posts";


const Profile = ({posts,token, setPosts}) => {
  console.log(posts, 'this is posts from profile 11');
  console.log(posts.messages, 'this is posts.messages on profile.js 12');
  


  return (
    <>
      <Link to="/create" className="createPostButton">+</Link>

      <div className="allposts">
          <div>
            {posts.map((item) => {
              return <MyPosts key={item._id} posts={item} token={token} setPosts = {setPosts} />;
            })}
          </div>
      </div>
      <div>
        <nav className="mailnav">
          <h3 className="mail3">MAIL </h3>
          <button className="sent">SENT</button>
          <button className="inbox">INBOX</button>
          <div className="messagediv">

          </div>
        </nav>
      </div>
    </>
  );
};

export default Profile;
