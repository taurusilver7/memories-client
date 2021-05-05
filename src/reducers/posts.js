// A function to take (state, action) & based on action type, return a changed state along with old state.

const posts = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action?.payload;
    case "CREATE":
      return [...posts, action?.payload];

    default:
      return posts;
  }
};

export default posts;
