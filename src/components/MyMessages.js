import React from "react";

const MyMessages = ({posts, setPosts, token}) => {

    return (
        <>
          <div className="messenger"><b>{posts.author.username}</b></div>
        </>
    )
}

export default MyMessages