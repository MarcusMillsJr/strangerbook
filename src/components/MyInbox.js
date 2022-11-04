import React from "react";

const MyInbox = ({token, posts}) => {
  return (
    <div>
      <nav className="mailnav">
        <h3 className="mail3">MAIL </h3>
        <button className="sent">SENT</button>
        <button className="inbox">INBOX</button>
        <div className="messagediv">
          {posts.map((item) => {
            return (
              <MyMessages
                key={item._id}
                posts={item}
                token={token}
                setPosts={setPosts}
              />
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MyInbox