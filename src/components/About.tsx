import React from "react";
import { Typography, Container } from "@material-ui/core";

const About = () => {
  return (
    <Container style={{ marginTop: 40 }}>
      <Typography variant="h5">About Shopping Cart</Typography>
      <Typography variant="body1">
        This application is built with React Router version 6, Redux ToolKit and Material UI.
      </Typography>
    </Container>
  );
};

export default About;
