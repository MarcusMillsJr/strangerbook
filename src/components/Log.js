import React, { useState } from "react";

const Log = () => {
  const [username, setUsername] = useState();

  return (
    <>
    <div className="log-div">
        <input type="text" placeholder="Enter Username" value="" className="user-name" onChange={null}></input>
        <input type="text" placeholder="Enter Password" value="" className="pass-word" onChange={null}></input>
        <button onClick={null} className="log-btn"> Log In </button>
        <a>Don't have an account? Create one here.</a>
    </div>
      
    </>
  );
  
};

export default Log;
