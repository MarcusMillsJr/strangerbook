import React, { useState } from "react";


const Log = () => {
  const [username, setUsername] = useState();

  return (
    <>
    <div className="log-div">
        <input type="text" placeholder="Enter Username" value="" className="user-name" onChange={null}></input>
        <input type="password" placeholder="Enter Password" value="" className="pass-word" onChange={null}></input>
        <a className="signup">Don't have an account? Create one here.</a>
        <button onSubmit={null} className="log-btn"> Log In </button>
    </div>
    </>
  );
  
};

export default Log;