import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";
import albumsReducer from "./albumsReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  albums: albumsReducer,
  photos: photosReducer,
});
