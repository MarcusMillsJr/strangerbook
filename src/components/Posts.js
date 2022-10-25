import React from "react";
import { Link} from "react-router-dom";
import PostDetail from "./PostDetail";


const Posts = ({ posts }) => {
  console.log(posts, "this is posts");
  return (
    <>
      <Link to="/Create" className="createPostButton">Create Post +</Link>
      <div>
        {posts.map((item) => {
          return <PostDetail key={item._id} posts={item} />;
        })}
      </div>
    </>
  );
};

export default Posts;
