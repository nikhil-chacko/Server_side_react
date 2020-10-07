import axios from "axios";

export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://react-ssr-api.herokuapp.com/users");

    dispatch({
      type: FETCH_USERS,
      payload: res,
    });
  } catch (err) {
    console.log("Some Error Occured");
  }
};
