import { FETCH_AlBUM_PHOTOS, REMOVE_AlBUM_PHOTOS } from "../actions/types";

export default (photos = [], action) => {
  switch (action.type) {
    case FETCH_AlBUM_PHOTOS:
      return action.payload;
    case REMOVE_AlBUM_PHOTOS:
      return [];
    default:
      return photos;
  }
};
