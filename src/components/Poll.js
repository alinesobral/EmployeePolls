import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import { saveAnswer } from "../actions/users";

const Poll = ({ question, authedUser, dispatch, users }) => {
  console.log("question is valid?: ", question);
  const answered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  const handleClick = (answer) => {
    dispatch(handleAnswerQuestion(question.id, answer)).then(
      dispatch(
        saveAnswer({
          id: question.id,
          answer,
          authedUser,
        })
      )
    );
  };

  return (
    <div>
      <h1>
        Poll by <i>{question.author}</i>
      </h1>
      <h2>Would you Rather</h2>
      <div>
        <img
          className="question-creator"
          src={users[question.author].avatarURL}
          alt="user's avatar"
        />
      </div>
      <div className="box-question">
        <p>{question.optionOne.text}</p>
        <button
          type="submit"
          onClick={() => handleClick("optionOne")}
          disabled={answered}
          className="logout-btn"
        >
          Click
        </button>
        {answered && (
          <div>
            <p>
              <i>Number of votes: {question.optionOne.votes.length}</i>
            </p>
            <p>
              <i>
                Percentage of votes:
                {(
                  (question.optionOne.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100
                ).toFixed(2)}
                %
              </i>
            </p>
          </div>
        )}
      </div>
      <div className="box-question">
        <p>{question.optionTwo.text}</p>
        <button
          type="submit"
          onClick={() => handleClick("optionTwo")}
          disabled={answered}
          className="logout-btn"
        >
          Click
        </button>
        {answered && (
          <div>
            <p>
              <i>Number of votes: {question.optionTwo.votes.length}</i>
            </p>
            <p>
              <i>
                Percentage of votes:
                {(
                  (question.optionTwo.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100
                ).toFixed(2)}
                %
              </i>
            </p>
          </div>
        )}
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

export default connect(mapStateToProps)(Poll);
