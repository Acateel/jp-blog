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

export const fetchPost = (id) => async (dispatch, getState) => {
  const post =
    getState().posts[id] ?? (await JSONPlaceholder.get(`/posts/${id}`)).data;
  dispatch({ type: FETCH_POST, payload: post });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/users");
  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch, getState) => {
  const user =
    getState().users[id] ?? (await JSONPlaceholder.get(`/users/${id}`)).data;
  dispatch({ type: FETCH_USER, payload: user });
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

export const fetchAlbum = (id) => async (dispatch, getState) => {
  const album =
    getState().albums[id] ?? (await JSONPlaceholder.get(`/albums/${id}`)).data;
  dispatch({ type: FETCH_ALBUM, payload: album });
};

export const fetchAlbumPhotos = (albumId) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/albums/${albumId}/photos`);
  dispatch({ type: FETCH_AlBUM_PHOTOS, payload: response.data });
};

export const removeAlbumPhotos = () => ({ type: REMOVE_AlBUM_PHOTOS });

export const fethcPostFull = (postId) => async (dispatch, getState) => {
  const post =
    getState().posts[postId] ?? (await JSONPlaceholder.get(`/posts/${postId}`)).data;
  dispatch({ type: FETCH_POST, payload: post });
  dispatch(fetchUser(post.userId));
  dispatch(fetchPostComments(postId));
};

export const fetchAlbumFull = (albumId) => async (dispatch, getState) => {
  const album =
    getState().albums[albumId] ?? (await JSONPlaceholder.get(`/albums/${albumId}`)).data;
  dispatch({ type: FETCH_ALBUM, payload: album });
  dispatch(fetchUser(album.userId));
  dispatch(fetchAlbumPhotos(album.id));
};
