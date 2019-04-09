import { SET_CURRENT_USER, SET_TOKEN } from "../constants";

export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload: payload
  };
};

export const setToken = payload => {
  return {
    type: SET_TOKEN,
    payload: payload
  };
};

export const logout = () => dispatch => {
  dispatch(setCurrentUser({}));
  dispatch(setToken(""));
};
