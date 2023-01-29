import {
  FETCH_POST,
  FETCH_POSTS,
  FETCH_POST_COMMENTS,
  FETCH_USER,
  FETCH_USERS,
  REMOVE_COMMENTS,
  FETCH_ALBUMS,
  FETCH_ALBUM,
  FETCH_AlBUM_PHOTOS,
  REMOVE_AlBUM_PHOTOS,
} from "./types";
import JSONPlaceholder from "../apis/JSONPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/posts/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/users");
  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchPostComments = (postId) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/posts/${postId}/comments`);
  dispatch({ type: FETCH_POST_COMMENTS, payload: response.data });
};

export const removeComments = () => ({ type: REMOVE_COMMENTS });

export const fetchAlbums = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/albums");
  dispatch({ type: FETCH_ALBUMS, payload: response.data });
};

export const fetchAlbum = (id) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/albums/${id}`);
  dispatch({ type: FETCH_ALBUM, payload: response.data });
};

export const fetchAlbumPhotos = (albumId) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/albums/${albumId}/photos`);
  dispatch({ type: FETCH_AlBUM_PHOTOS, payload: response.data });
};

export const removeAlbumPhotos = () => ({ type: REMOVE_AlBUM_PHOTOS });

export const fethcPostFull = (postId) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/posts/${postId}`);
  const post = response.data
  dispatch({ type: FETCH_POST, payload: post});
  dispatch(fetchUser(post.userId))
  dispatch(fetchPostComments(postId))
}