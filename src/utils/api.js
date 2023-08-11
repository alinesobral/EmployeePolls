import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getUsers,
  _getQuestions,
  _login,
  _logout,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

/**
 * question: {
 *        optionOneText,
 *        optionTwoText,
 *        author
 * }
 */
export function saveQuestion(question) {
  return _saveQuestion(question);
}

/**
 * info : {
 *        authedUser,
 *        qid,
 *        answer,
 * }
 * */
export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}

export function login(user) {
  return _login(user);
}

export function logout() {
  return _logout();
}
