// src/store/reducer.js
import { combineReducers } from "redux";
import someFeatureReducer from "./someFeature/reducer";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./PostPage/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
