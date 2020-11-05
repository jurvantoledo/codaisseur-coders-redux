import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

// A thunk creator
export default function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${API_URL}/login`, {
      email: "kelley@codaisseur.com",
      password: "abcd",
    });

    const { jwt } = response.data;

    console.log(
      "TODO: make login request, get an access token",
      email,
      password,
      jwt
    );
  };
}

export default function userLoggedIn(token, profile) {
  return async function thunk(dispatch, getState) {
    await axios
      .get("/me", { headers: { Authorization: "Bearer <yourJWTtoken>" } })
      .then((data) => console.log("data", data))
      .catch((err) => console.log("err", err));
  };
}
