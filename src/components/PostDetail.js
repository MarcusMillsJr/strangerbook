import React from "react";
import { Link } from "react-router-dom";

const PostDetails = ({posts}) => {

    console.log("this is a tester", posts.author)
    return (
            <div className="card">
                <div className="content">
                    <div className="carduser"><b>USER:</b>Username</div>
                    <div className="cardheader"><b>ITEM:</b> {posts.title}</div>
                    <div className="cardprice"><b>PRICE:</b> {posts.price}</div>
                    <p className="carddescription"><b>DESCRIPTION:</b>{posts.description}</p>
                    <div className="extracontent"></div>
                    <div className="extraheader">
                        <Link to="/" className="extraheader">Go Home</Link>
                    </div>
                </div>
            </div>
    )
}

export default PostDetails 