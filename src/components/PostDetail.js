import React from "react";
import { Link } from "react-router-dom";

const PostDetails = ({posts}) => {

    // console.log("this is a tester for post error", posts)

    return (
            <div className="card">
                <div className="content">
                    <label><b>USER:</b></label>
                    <div className="carduser">{posts.author.username}</div>
                    <label><b>ITEM:</b></label>
                    <div className="cardheader"> {posts.title}</div>
                    <label><b>PRICE:</b></label>
                    <div className="cardprice"> {posts.price}</div>
                    <label><b>DESCRIPTION:</b></label>
                    <p className="carddescription">{posts.description}</p>
                    <div className="extracontent"></div>
                    <button className="extraheader">DELETE POST</button>
                </div>
            </div>
    )
}


export default PostDetails 