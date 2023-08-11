import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";

const Nav = (props) => {
  const { authedUser, users } = props;
  console.log(users[authedUser].avatarURL);
  const logoutUser = () => {
    props.dispatch(handleLogout());
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/leaderboard">
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
    // <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    //   <div className="nav-left">
    //     <Link to="/">
    //       <span className="menu">Home</span>
    //     </Link>
    //     <Link to="/leaderboard">
    //       <span className="menu">Leaderboard</span>
    //     </Link>
    //     <Link to="/add">
    //       <span className="menu">New</span>
    //     </Link>
    //   </div>
    //   <div className="nav-right">
    //     <div>
    //       <img src={users[authedUser].avatarURL} />
    //     </div>
    //     <p>{authedUser}</p>
    //     <div>
    //       <button type="submit" onClick={logoutUser}>
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Nav);
