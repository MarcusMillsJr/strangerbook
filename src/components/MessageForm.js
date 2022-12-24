import React from "react";
import { useState } from "react";
import { sendMessage } from "../api/api";

const MessageForm = ({ token, postId }) => {

  const [content, setContent] = useState("")

  const submitMessage = async (event) => {
    event.preventDefault()
    
    try {
      await sendMessage(token, postId, content);
    } catch (error) {
        console.error(error)
    }
  };


  return (
    <div className="commentform">
    <form onSubmit={submitMessage}>
      {token ? (<input
        type="text"
        value={content}
        placeholder=""
        className="commentinput"
        onChange={(event) => {
          return setContent(event.target.value)
        }}
      />): null}
      {token ? (<button type="submit" className="submitcomment">Comment</button>) : null} 
    </form>
    </div>
  );
};

export default MessageForm;
