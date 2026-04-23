import axios from "axios";
import { FETCH_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from "./types";

const API = "http://localhost:5000/posts";

export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get(API);
  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const addPost = (post) => async (dispatch) => {
  await axios.post(API, post);
  dispatch(fetchPosts()); 
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`${API}/${id}`);
  dispatch(fetchPosts());
};

export const updatePost = (post) => async (dispatch) => {
  await axios.put(`${API}/${post.id}`, post);
  dispatch(fetchPosts());
};