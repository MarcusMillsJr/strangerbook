import React from "react";
import { Link, Route } from "react-router-dom";
import MyInbox from "./MyInbox";
import MyMessages from "./MyMessages";
import MyPosts from "./MyPosts";

const Profile = ({ posts, token, setPosts }) => {
  

  return (
    <>
      <Link to="/mymessages" className="viewMessageButton">
        MESSAGES
      </Link>

      <div className="allposts">
        <div>
          {posts.map((item) => {
            return (
              <MyPosts
                key={item._id}
                posts={item}
                token={token}
                setPosts={setPosts}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
