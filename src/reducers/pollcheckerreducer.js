import { POLL_CHECK_TOGGLE } from "../actions";

const initialState = {
  pollcheckervalue: 0
};

export default function pollcheckerreducer(state = initialState, action) {
  switch (action.type) {
    case POLL_CHECK_TOGGLE:
      if (state.pollcheckervalue === 1) {
        return {
          ...state,
          pollcheckervalue: 0
        };
      } else {
        return {
          ...state,
          pollcheckervalue: 1
        };
      }
    default:
      return state;
  }
}
