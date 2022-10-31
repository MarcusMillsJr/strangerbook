import React from "react";
import { useState } from "react";
import { sendMessage } from "../api/api";

const MessageForm = ({ token, postId }) => {

  const [content, setContent] = useState("")

  const submitMessage = async (event) => {
    event.preventDefault()
    
    try {
        // console.log(postId, "this is postId");
        await sendMessage(token, postId, content);
    } catch (error) {
        console.error(error)
    }
  };


  return (
    <div className="commentform">
    <form onSubmit={submitMessage}>
    <input
        type="text"
        value={content}
        placeholder=""
        className="commentinput"
        onChange={(event) => {
          return setContent(event.target.value)
        }}
      />
      <button type="submit" className="submitcomment">Comment</button>
    </form>
    </div>
  );
};

export default MessageForm;
