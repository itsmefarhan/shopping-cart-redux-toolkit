import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { shoes } from "./data";

const Home = () => {
  return (
    <Grid container>
      {shoes.map((shoe) => (
        <Grid item md={4} sm={6} xs={12} key={shoe.id}>
          <Link to={`/${shoe.id}`} className="link">
            <Zoom>
              <Card style={{ margin: 20 }}>
                <CardActionArea>
                  <CardMedia image={shoe.photo} style={{ height: 200 }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {shoe.name}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      ${shoe.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/${shoe.id}`} className="link">
                    Learn More
                  </Link>
                </CardActions>
              </Card>
            </Zoom>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
