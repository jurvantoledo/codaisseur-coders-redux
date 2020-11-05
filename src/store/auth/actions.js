import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

const saveUserData = (token, me) => {
  return {
    type: "LOGIN",
    payload: { token, me },
  };
};

const userLoggedIn = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    const { jwt } = response.data;
    console.log(response);

    const me = await getState(jwt);

    dispatch(saveUserData(jwt, me));
  } catch (e) {
    console.log("error", e);
  }
};
