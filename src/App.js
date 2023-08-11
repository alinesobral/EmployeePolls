import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Fragment>
      <LoadingBar />
      <div>
        {props.userNotAuthed === true ? (
          <Routes>
            <Route path="*" exact element={<Login />} />
          </Routes>
        ) : (
          <div>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/leaderboard" exact element={<Leaderboard />} />
              <Route path="/add" exact element={<NewPoll />} />
              <Route path="/questions/:question_id" element={<PollPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  userNotAuthed: authedUser === null,
});

export default connect(mapStateToProps)(App);
