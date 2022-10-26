import React from "react";
import { Link} from "react-router-dom";
import PostDetail from "./PostDetail";


const Posts = ({ posts }) => {
  // console.log(posts, "this is posts");

  return (
    <>
      <Link to="/create" className="createPostButton">ADD NEW POST</Link>
      <div>
        {posts.map((item) => {
          return <PostDetail key={item._id} posts={item} />;
        })}
      </div>
    </>
  );
};

export default Posts;
