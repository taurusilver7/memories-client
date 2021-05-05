import React, { useEffect, useState } from "react";
import useStyles from "./styles";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Photo Book
        </Typography>
        <img
          className={classes.image}
          src="https://png.pngtree.com/png-vector/20200628/ourmid/pngtree-concept-vector-illustration-of-photographer-front-view-flat-cartoon-design-png-image_2267557.jpg"
          alt="logo"
          height="60"
        />
      </AppBar>

    </Container>
  );
};

export default App;
