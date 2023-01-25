import { FETCH_POSTS, FETCH_USER, FETCH_USERS } from "./types";
import JSONPlaceholder from "../apis/JSONPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/users");
  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};
