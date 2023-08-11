import { useState } from "react";
import { handleSaveQuestion } from "../actions/questions";
import { connect } from "react-redux";

const NewPoll = ({ dispatch }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChangeOptOne = (e) => {
    const optionOne = e.target.value;
    setOptionOne(optionOne);
  };

  const handleChangeOptTwo = (e) => {
    const optionTwo = e.target.value;
    setOptionTwo(optionTwo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSaveQuestion(optionOne, optionTwo));
    setOptionOne("");
    setOptionTwo("");
  };

  return (
    <div>
      <h1>New Poll</h1>
      <h3>Create Your Own Poll</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <p>First Option: </p>
          <input
            type="text"
            placeholder="Option One"
            value={optionOne}
            onChange={handleChangeOptOne}
            maxLength={280}
            className="textbox"
          />
          <p>Second Option: </p>
          <input
            type="text"
            placeholder="Option Two"
            value={optionTwo}
            onChange={handleChangeOptTwo}
            maxLength={280}
            className="textbox"
          />
          <br />
          <button
            className="btn"
            type="submit"
            disabled={optionOne === "" && optionTwo === ""}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect()(NewPoll);
