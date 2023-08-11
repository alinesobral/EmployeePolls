import { RECEIVE_QUESTIONS, SAVE_QUESTION, ANSWER_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,

      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...state[action.question.id],
          [action.answer]: {
            ...state[action.question.id][action.answer],
            votes: state[action.question.id][action.answer].votes.concat(action.authedUser),
          },
        }
      };
    default:
      return state;
  }
}
