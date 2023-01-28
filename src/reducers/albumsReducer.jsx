import _ from "lodash";
import { FETCH_ALBUM, FETCH_ALBUMS } from "../actions/types";

export default (albums = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return { ...albums, ..._.mapKeys(action.payload, "id") };
    case FETCH_ALBUM:
      return { ...albums, [action.payload.id]: action.payload };
    default:
      return albums;
  }
};
