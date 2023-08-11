import { connect } from "react-redux";

const Leaderboard = (props) => {
  console.log("Leaderboard props: ", props.users);
  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td className="wide">
                <div>
                  <img src={user.avatarURL} alt="user's avatar" />
                </div>
                <div>{user.name} </div>
                <div className="user-handle">{user.id}</div>
              </td>
              <td>
                <span>{Object.keys(user.answers).length}</span>
              </td>
              <td>
                <span>{user.questions.length}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users).sort(
      (a, b) =>
        Object.keys(b.answers).length +
        b.questions.length -
        (Object.keys(a.answers).length + a.questions.length)
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
