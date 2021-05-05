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
