import { connect } from "react-redux";
import Poll from "./Poll";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

const PollPage = (props) => {
  const { question_id, questions } = props;

  if (!questions[question_id]) {
    return <NotFound />;
  }

  return (
    <div>
      <Poll question={questions[question_id]} />
    </div>
  );
};

const mapStateToProps = ({ questions }, props) => {
  const { question_id } = props.router.params;

  return {
    question_id,
    questions,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
