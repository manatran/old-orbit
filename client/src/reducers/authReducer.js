import { SET_CURRENT_USER, SET_TOKEN } from "../constants";
import { isEmpty } from "../helpers";

const initialState = {
  authenticated: false,
  token: "",
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        authenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
