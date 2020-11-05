const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function authSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        accessToken: action.payload.token,
        me: action.payload,
      };
    default:
      return state;
  }
}
