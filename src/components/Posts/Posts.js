import React from "react";
import useStyles from "./styles";
import Post from "./Post/Post";

import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  // console.log(posts);

  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post?._id} xs={12} sm={6} md={6}>
          <Post key={post?._id} setCurrentId={setCurrentId} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
