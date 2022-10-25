import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/api";
import { useParams, useHistory} from "react-router-dom";

const AccountForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {action} = useParams();
  const history = useHistory();
  console.log(action, "action");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await registerUser(username, password);
      setToken(data.token)
      history.push("/")
    } catch (error) {
      console.error("error logging user");
    }
  };

  const title = action === "login" ? "LOG-IN" : " SIGN-UP";

  return (
    <form className="log-form" onSubmit={onSubmitHandler}>
      <div>
        <label className="usernamelabel">Username</label>
        <input
          className="usernamefield"
          type="text"
          value={username}
          placeholder="enter usersname"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div >
        <label className="passwordlabel">Password</label>
        <input
          className="passwordfield"
          type="password"
          value={password}
          placeholder="enter password"
          onChange={(event) => setPassword(event.target.value)}
          minLength = "8"
        />
      </div>
      <Link to="/account/register" className="sign-nav">
        Don't have an account with us? Sign up here.
      </Link>
      <button className="logbutton" type="submit">
      {title}
      </button>
    </form>
  );
};

export default AccountForm;
