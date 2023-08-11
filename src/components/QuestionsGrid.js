import Question from "./Question";
import { connect } from "react-redux";

const QuestionsGrid = (props) => {
  const { questions } = props;

  return (
    <div>
      {questions.map((question) => (
        <Question key={question.id} id={question.id} />
      ))}
    </div>
  );
};

export default connect()(QuestionsGrid);
