import React from "react";
import { Link } from "react-router-dom";
import MessageForm from "./MessageForm";
import { deletePost } from "../api/api";

const PostDetails = ({ token, posts, setPosts }) => {
  // console.log("this is post details POSTS", posts);
  // console.log("this is the post user token", token);

  const deleteClick = async (token, postId) => {
    await deletePost(token, postId);
    setPosts((VersionOfAllPostoldVersionOfAllPost) =>
      old.filter((everyPrevPost) => everyPrevPost._id !== postId)
    );
    // console.log(posts, "this is post");
    // console.log("this is delete click post id", postId);
  };

  // console.log(posts.messages, "this is posts.message from Post Details");

  return (
    <main>
      <div className="card">
      <div className="content">
        <label>
          <b>
            <div className="carduser">
              {posts.author.username}
              {posts.isAuthor ? <div className="mypost">me</div> : null}
            </div>
          </b>
        </label>
        <label>
          <b className="cardheader">ITEM</b>
          <p className="titl">{posts.title}</p>
        </label>
        <label>
          <b className="cardprice">PRICE</b>
          <p className="pric">{posts.price}</p>
        </label>
        <label>
          <b className="carddescription">DESCRIPTION</b>
          <p className="desc">{posts.description}</p>
        </label>
        {posts.isAuthor && token ? (
          <>
            <h2>COMMENTS</h2>
            {posts.messages.map((message) => (
              <div key={message._id} className="comments">
                <p>
                  <b>{message.fromUser.username}</b>  {message.content}
                </p>
              </div>
            ))}
          </>
        ) : (
          <MessageForm postId={posts._id} token={token} />
        )}

        {posts.isAuthor ? (
          <button
            className="extraheader"
            onClick={() => {
              console.log("post id", posts._id);
              deleteClick(token, posts._id);
            }}
          >
            DELETE POST
          </button>
        ) : null}
      </div>
    </div>
    </main>
    
  );
};

export default PostDetails;
