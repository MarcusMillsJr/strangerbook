import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/api";

const CreatePost = ({token, setPosts}) => {
const history = useHistory();
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');

const onFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const result = await createPost(token,title, description,price);
      // console.log('createPost result:', result);
      setPosts((prevPost) => {
        // console.log("prev post", prevPost);
        // console.log("result", result);
        return [result.post, ...prevPost];
      })
      history.push("/posts")
      // console.log(result, "this is the onsubmit result")
    } catch (error) {
      console.error("error creating post");
    }
  };


  return (
    <form className="createpostform"onSubmit={onFormSubmit}>
        <h2 className="createposttitle">CREATE NEW POST</h2>

        <label htmlFor="title" className="postlabel">
          TITLE
        </label>
        <input
          type="text"
          placeholder=""
          className="titleinput"
          autoComplete="off"
          value={title}
          onChange={(event)=>{
            return setTitle(event.target.value)
          }}
        ></input>
        
        <label htmlFor="price" className="postlabel">
          PRICE
        </label>
        <input
          type="text"
          placeholder=""
          className="priceinput"
          autoComplete="off"
          value={price}
          onChange={(event)=>{
            return setPrice(event.target.value)
          }}
        ></input>
        <label htmlFor="description" className="postlabel">
          DESCRIPTION
        </label>
        <input
          type="text"
          placeholder=""
          className="descriptioninput"
          autoComplete="off"
          value={description}
          onChange={(event)=>{
            return setDescription(event.target.value)
          }}
        ></input>
        <button type="submit" className="formbutton" >
          CREATE
        </button>
      </form>
  );
};

export default CreatePost;
