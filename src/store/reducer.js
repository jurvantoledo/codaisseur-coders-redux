// src/store/reducer.js
import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./PostPage/reducer";
import authSliceReducer from "./auth/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  auth: authSliceReducer,
});

export default reducer;
