import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductItem } from "../../types";
import { store, addToCart } from "../store";
// @ts-ignore
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <Grid container>
      {products.map((product) => (
        <Grid item md={4} sm={6} xs={12} key={product.id}>
          <Zoom>
            <Card style={{ margin: 20 }}>
              <CardActionArea>
                <CardMedia image={product.imageUrl} style={{ height: 200 }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: "space-between" }}>
                <Link to={`/${product.id}`} className="link">
                  Learn More
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={product.inCart}
                  onClick={() => store.dispatch(addToCart(product))}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
