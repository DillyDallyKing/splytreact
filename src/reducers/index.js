import { combineReducers } from "redux";
import splytmapreducer from "./splytmapreducer";
import sliderreducer from "./sliderreducer";
import pollcheckerreducer from "./pollcheckerreducer";

const rootReducer = combineReducers({
  splytmap: splytmapreducer,
  sliderui: sliderreducer,
  pollchecker: pollcheckerreducer
});

export default rootReducer;
