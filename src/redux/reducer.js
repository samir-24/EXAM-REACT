import { FETCH_POSTS } from "./types";

const initialState = { posts: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};