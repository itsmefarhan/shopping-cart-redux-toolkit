import React from "react";
import { Typography, Container } from "@material-ui/core";

const About = () => {
  return (
    <Container style={{ marginTop: 40 }}>
      <Typography variant="h5">About Shoe Store</Typography>
      <Typography variant="body1">
        This application is built with React Router version 6 and Material UI.
      </Typography>
    </Container>
  );
};

export default About;
