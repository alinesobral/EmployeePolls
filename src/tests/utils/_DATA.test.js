import {
  _saveQuestion,
  _saveQuestionAnswer,
  _logout,
  _login,
} from "../../utils/_DATA";

describe("_saveQuestion", () => {
  it("will return the saved question with all expected fields populated correctly", async () => {
    const question = await _saveQuestion({
      optionOneText: "optionOne",
      optionTwoText: "optionTwo",
      author: "author",
    });
    expect(question.author).toEqual("author");
    expect(question.optionOne.text).toEqual("optionOne");
    expect(question.optionTwo.text).toEqual("optionTwo");
    expect(question.id).toBeDefined();
    expect(question.timestamp).toBeDefined();
    expect(question.optionOne.votes).toBeDefined();
    expect(question.optionTwo.votes).toBeDefined();
  });

  it("will return error if incorrect data is passed to the function", async () => {
    await expect(_saveQuestion({})).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return true when correctly formatted data is passed to the function.", async () => {
    const result = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionOne",
    });
    expect(result).resolves.toBeTruthy;
  });

  it("will return error if incorrect data is passed to the function.", async () => {
    await expect(_saveQuestionAnswer({})).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});

describe("_logout", () => {
  it("will return true for a logged out user", async () => {
    await expect(_logout()).resolves.toBeTruthy;
  });
});
