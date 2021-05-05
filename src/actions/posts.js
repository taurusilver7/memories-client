import * as api from "../api/index.js";

/* action creator without thunk
export const getPosts = () => {
  const action = {type: 'FETCH_ALL', payload: []};

  return action;
}
// action creators with thunk
export const getPosts = () => async (dispatch) => {
  const action = {type: 'FETCH_ALL', payload: []};

  dispatch(action);
}
*/

// action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//  action creator for updating an existing post created at an earlier date.
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
