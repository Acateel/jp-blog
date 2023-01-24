import { FETCH_POSTS } from "./types";
import JSONPlaceholder from "../apis/JSONPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await JSONPlaceholder("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
