import { FETCH_POST_COMMENTS, REMOVE_COMMENTS } from "../actions/types";

export default (comments = [], action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return action.payload;
    case REMOVE_COMMENTS:
      return [];
    default:
      return comments;
  }
};
