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
import { useSelector } from "react-redux";
import { ProductItem } from "../../types";
// @ts-ignore
import Slide from "react-reveal/Slide";

const Product = () => {
  const { productId } = useParams();

  const products = useSelector((state: ProductItem[]) => state);
  const product = products.find((prod) => prod.id === productId);

  return product !== undefined ? (
    <Grid container>
      <Grid item sm={2} />

      <Grid container item sm={8} spacing={0}>
        <Grid item sm={7} xs={12}>
          <Slide left>
            <Card style={{ marginTop: 20 }}>
              <CardActionArea>
                <CardMedia image={product.imageUrl} style={{ height: 500 }} />
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
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {product.description}
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
  ) : null;
};
export default Product;
