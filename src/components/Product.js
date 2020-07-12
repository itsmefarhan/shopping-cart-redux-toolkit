import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Slide from "react-reveal/Slide";
import { shoes } from "./data";

const Product = () => {
  const { productId } = useParams();
  const shoe = shoes.find((shoe) => shoe.id.toString() === productId);

  return (
    <Grid container>
      <Grid item sm={2} />

      <Grid container item sm={8} spacing={0}>
        <Grid item sm={7} xs={12}>
          <Slide left>
            <Card style={{ marginTop: 20 }}>
              <CardActionArea>
                <CardMedia image={shoe.photo} style={{ height: 500 }} />
              </CardActionArea>
            </Card>
          </Slide>
        </Grid>
        <Grid item sm={5}>
          <Slide right>
            <Card style={{ marginTop: 20, height: 500 }}>
              <CardActionArea>
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
                  <Typography variant="body2" component="p">
                    {shoe.description}
                  </Typography>
                  <Typography style={{ marginTop: 20 }}>
                    <Link to="/" className="link">
                      Back To Home
                    </Link>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Slide>
        </Grid>
      </Grid>

      <Grid item sm={2} />
    </Grid>
  );
};
export default Product;
