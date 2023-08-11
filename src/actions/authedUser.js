import { login, logout } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

function logoutUser(id) {
  return {
    type: LOGOUT_USER,
    id,
  };
}

export function handleLogin(username, password) {
  return (dispatch) => {
    return login({
      usernameTxt: username,
      passwordTxt: password,
    })
      .then((authedUserId) => dispatch(setAuthedUser(authedUserId)))
      .catch((e) => {
        console.warn("Error in handleLogin: ", e);
      });
  };
}

export function handleLogout() {
  return (dispatch) => {
    return logout().then(() => dispatch(logoutUser(null)));
  };
}
