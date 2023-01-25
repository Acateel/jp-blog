import _ from "lodash";
import { FETCH_USER, FETCH_USERS } from "../actions/types";

export default (users = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...users, ..._.mapKeys(action.payload, "id") };
    case FETCH_USER:
      return { ...users, [action.payload.id]: action.payload };
    default:
      return users;
  }
};
