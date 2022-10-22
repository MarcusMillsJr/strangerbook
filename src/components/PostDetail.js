import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";

const PostDetails = ({posts}) => {
    return (
            <div className="card">
                <div className="content">
                    <div className="carduser">USER: {posts.author.username}</div>
                    <div className="cardheader">ITEM: {posts.title}</div>
                    <div className="cardprice">PRICE: {posts.price}</div>
                    <p className="carddescription">DESCRIPTION: {posts.description}</p>
                    <div className="extracontent"></div>
                    <div className="extraheader">
                        <Link to="">View Location</Link>
                    </div>
                </div>
            </div>
    )
}

export default PostDetails 