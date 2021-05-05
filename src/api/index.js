// API calls to the back-end routes are created & sent from here.
// The actions are dispatched using redux-dispatch

import axios from "axios";

const url = "http://localhost:5000/posts";
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
