import { FETCH_POST_COMMENTS } from "../actions/types";

export default (comments = [], action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return action.payload;
    default:
      return comments;
  }
};
