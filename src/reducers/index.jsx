import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";
import albumsReducer from "./albumsReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  albums: albumsReducer,
});
