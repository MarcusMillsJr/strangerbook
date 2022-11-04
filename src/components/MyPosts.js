import React from "react";
import MessageForm from "./MessageForm";


const MyPosts = ({posts, token}) =>{
    return (
        <div>{posts.isAuthor ? 
        <div>
      <div className="card2">
      <div className="content2">
        <label>
          <b>
            <div className="carduser2">
              {posts.author.username}
            </div>
          </b>
        </label>
        <label>
          <b className="cardheader2">ITEM</b>
          <p className="titl2">{posts.title}</p>
        </label>
        <label>
          <b className="cardprice2">PRICE</b>
          <p className="pric2">{posts.price}</p>
        </label>
        <label>
          <b className="carddescription2">DESCRIPTION</b>
          <p className="desc2">{posts.description}</p>
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
            className="extraheader2"
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
    </div>
        
        : null}</div>
    )
}

export default MyPosts