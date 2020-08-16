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
import { useSelector } from "react-redux";
import { ProductItem } from "../../types";
// @ts-ignore
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <Grid container>
      {products.map((product) => (
        <Grid item md={4} sm={6} xs={12} key={product.id}>
          <Link to={`/${product.id}`} className="link">
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
                <CardActions>
                  <Link to={`/${product.id}`} className="link">
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
