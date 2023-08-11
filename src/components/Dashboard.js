import { connect } from "react-redux";
import QuestionsGrid from "./QuestionsGrid";

const Dashboard = (props) => {
  return (
    <div data-testid="dashboard">
      <h1>New Questions</h1>
      <div>
        <QuestionsGrid questions={props.newQuestions} />
      </div>
      <hr></hr>
      <h1>Done</h1>
      <div>
        <QuestionsGrid questions={props.answeredQuestions} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    newQuestions: Object.values(questions)
      .filter((q) => !(q.id in users[authedUser].answers))
      .sort((a, b) => a.timestamp - b.timestamp),
    answeredQuestions: Object.values(questions)
      .filter((q) => q.id in users[authedUser].answers)
      .sort((a, b) => a.timestamp - b.timestamp),
  };
};
export default connect(mapStateToProps)(Dashboard);
