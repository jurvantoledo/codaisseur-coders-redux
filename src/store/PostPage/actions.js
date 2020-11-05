// src/store/postPage/actions.js
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoadingPost() {
  return {
    type: "postPage/startLoadingPost",
  };
}

export function postFullyFetched(data) {
  return {
    type: "postPage/postFullyFetched",
    payload: data,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}

export async function signUp() {
  await axios.post(`${API_URL}/post/4/comments`, {
    name: "Jur",
    email: "test@test.com",
    password: "abcd",
    comment: "Horrible content, badly written!",

    headers: {
      Authorization: "Bearer MY_ACCESS_TOKEN",
    },
  });
}
