import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";
import PostDetails from "./PostDetail";


const Posts = ({ posts, token, setPosts }) => {

  const [searchTerms, setSearchTerms] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(posts);


  useEffect(()=>{
    if(searchTerms){
      const filtered = posts.filter((postObject) => {
        if(postObject.description.includes(searchTerms)){
          console.log(postObject, "filtered post object");
          return true
        }
        return false
      });
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerms, posts])



  return (
    <>
      <Link to="/create" className="createPostButton">ADD NEW POST</Link>

      <input 
        type="text"
        placeholder="search for a post" 
        className="searchbar"
        value={searchTerms}
      onChange={(event)=>{setSearchTerms(event.target.value)}}/>

      <div>
        {posts.map((item) => {
          return <PostDetails key={item._id} posts={item} token={token} setPosts = {setPosts} />;
        })}
      </div>
    </>
  );
};

export default Posts;
