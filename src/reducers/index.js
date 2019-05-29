import { combineReducers } from "redux";
import splytmapreducer from "./splytmapreducer";
import sliderreducer from "./sliderreducer";

const rootReducer = combineReducers({
  splytmap: splytmapreducer,
  sliderui: sliderreducer
});

export default rootReducer;
