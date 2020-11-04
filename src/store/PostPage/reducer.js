import { bindActionCreators } from "redux";

const initialState = {
  loading: true,
  post: {},
  comments: [],
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "postFullyFetched": {
      return {
        ...state,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return { ...state };
    }
  }
}
