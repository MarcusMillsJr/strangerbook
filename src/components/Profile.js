import React from "react";
import { Route } from "react-router-dom";
import { Link} from "react-router-dom";
import MessageForm from "./MessageForm";


const Profile = ({posts,token, setPosts}) => {
  return (
    <>
      <p>USERNAME HERE</p>
      <Link to="/create" className="createPostProfileButton">ADD NEW POST</Link>
      <p>View messages button, create route file path to show messages to and from</p>
      <p> My Posts: mapping with filter only returning my post</p>
    </>
  );
};

export default Profile;
