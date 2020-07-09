import React from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { shoes } from "./data";

const Product = () => {
  const { productId } = useParams();
  const shoe = shoes.find((shoe) => shoe.id.toString() === productId);

  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8}>
        <Card style={{ margin: 20 }}>
          <CardActionArea>
            <CardMedia image={shoe.photo} style={{ height: 500 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {shoe.name}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                ${shoe.price}
              </Typography>
              <Typography variant="body2" component="p">
                {shoe.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
};
export default Product;
