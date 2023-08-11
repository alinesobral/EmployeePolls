export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveAnswer({ id, answer, authedUser }) {
  return {
    type: SAVE_ANSWER,
    id,
    answer,
    authedUser,
  };
}
