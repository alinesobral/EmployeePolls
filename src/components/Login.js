import { useState } from "react";
import { handleLogin } from "../actions/authedUser";
import { connect } from "react-redux";

const Login = (props) => {
  const [usernameTxt, setUsernameTxt] = useState("");
  const [passwordTxt, setPasswordTxt] = useState("");

  const handleChangeUser = (e) => {
    const text = e.target.value;
    setUsernameTxt(text);
  };
  const handleChangePwd = (e) => {
    const text = e.target.value;
    setPasswordTxt(text);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleLogin(usernameTxt, passwordTxt));
    setUsernameTxt("");
    setPasswordTxt("");
  };
  return (
    <div className="box">
      <h1>Employee Polls</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Username: </p>
          <input
            placeholder="Username"
            value={usernameTxt}
            onChange={handleChangeUser}
            className="textbox"
            maxLength={32}
            data-testid="username"
          />
        </div>
        <div>
          <p>Password: </p>
          <input
            placeholder="Password"
            type="password"
            value={passwordTxt}
            onChange={handleChangePwd}
            className="password"
            maxLength={32}
            data-testid="password"
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn"
            disabled={usernameTxt === "" && passwordTxt === ""}
            data-testid="loginUserBtn"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(Login);
