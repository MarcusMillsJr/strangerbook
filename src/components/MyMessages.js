import React from "react";

const MyMessages = ({posts, setPosts, token}) => {

    // console.log(posts.author.username, "this is posts.author.username from MyMessages");
    console.log(posts, "this is posts from MyMessages");
    // console.log(posts.messages);

    return (
        <>
          <div className="messenger"><b>{posts.author.username}</b></div>
          {/* <div>{posts.messages.content}</div> */}
        </>
    )
}

export default MyMessages