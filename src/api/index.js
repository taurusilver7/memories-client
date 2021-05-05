// API calls to the back-end routes are created & sent from here.
// The actions are dispatched using redux-dispatch

import axios from "axios";

const url = "http://localhost:5000/posts";
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

// APi call for update the post route
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

// API call for like post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
