import React from "react";
import { Link} from "react-router-dom";
import PostDetails from "./PostDetail";


const Posts = ({ posts, token, setPosts }) => {
  // console.log(posts, "this is posts");

  return (
    <>
      <Link to="/create" className="createPostButton">ADD NEW POST</Link>
      <div>
        {posts.map((item) => {
          return <PostDetails key={item._id} posts={item} token={token} setPosts = {setPosts} />;
        })}
      </div>
    </>
  );
};

export default Posts;
