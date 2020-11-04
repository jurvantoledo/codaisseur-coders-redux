// src/store/reducer.js
import { combineReducers } from "redux";
import someFeatureReducer from "./someFeature/reducer";
import feedSliceReducer from "./feed/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
});

export default reducer;
