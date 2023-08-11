import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

const Question = (props) => {
  const { questions, id } = props;

  return (
    <div className="box-question">
      <p className="question-details">{questions[id].author}</p>
      <p className="question-details">{formatDate(questions[id].timestamp)}</p>

      <Link to={`/questions/${id}`}>
        <button className="question-details-btn">Show</button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ questions }) => {
  return {
    questions,
  };
};

export default connect(mapStateToProps)(Question);
