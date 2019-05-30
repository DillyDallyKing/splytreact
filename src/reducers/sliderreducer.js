import { SLIDER_CHANGE } from "../actions";

const initialState = {
  slidervalue: [1]
};

export default function sliderreducer(state = initialState, action) {
  switch (action.type) {
    case SLIDER_CHANGE:
      return {
        ...state,
        slidervalue: action.payload.slidervalue
      };
    default:
      return state;
  }
}
