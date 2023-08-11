import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";

const Nav = (props) => {
  const { authedUser, users } = props;
  const logoutUser = () => {
    props.dispatch(handleLogout());
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link data-testid="leaderboard" to="/leaderboard">
          <span>Leaderboard</span>
        </Link>
        <Link to="/add">
          <span>New</span>
        </Link>
      </div>
      <div className="header-right">
        <span>
          <img
            className="thumbnail"
            src={users[authedUser].avatarURL}
            alt="user's avatar"
          />
        </span>
        <span>{authedUser}</span>
        <span>
          <button className="logout-btn" type="submit" onClick={logoutUser}>
            Logout
          </button>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Nav);
