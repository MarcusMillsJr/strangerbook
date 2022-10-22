import React from "react";
import PostDetail from "./PostDetail"

const Posts = ({posts}) => {
    console.log(posts, 'this is posts')
    return(
        <div>
            {posts.map((item)=>{
                return <PostDetail key={item._id} posts={item}/>
            })}
        </div>
    )
}

export default Posts