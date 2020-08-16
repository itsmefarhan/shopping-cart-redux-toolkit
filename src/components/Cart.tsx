import React from "react";
import { Grid, Typography, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import { ProductItem } from "../../types";
import { store, removeFromCart } from "../store";
// @ts-ignore
import Slide from "react-reveal/Slide";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    padding: "20px",
    marginTop: "20px",
  },
  text: {
    marginLeft: "20px",
  },
}));

const Product = () => {
  const classes = useStyles();

  const products = useSelector((state: ProductItem[]) => state);

  const checkCart = products.find((item) => item.inCart);

  return checkCart ? (
    <Grid container>
      <Grid item sm={2} />

      <Grid item sm={8}>
        {products
          .filter((product) => product.inCart)
          .map((product) => (
            <Slide bottom key={product.id}>
              <Paper className={classes.paper} elevation={5}>
                <Avatar src={product.imageUrl} alt={product.title} />
                <Grid container item>
                  <Grid item sm={11}>
                    <div className={classes.text}>
                      <Typography variant="h5">{product.title}</Typography>
                      <Typography variant="subtitle1">
                        $ {product.price}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item sm={1}>
                    <DeleteIcon
                      color="error"
                      style={{ cursor: "pointer" }}
                      onClick={() => store.dispatch(removeFromCart(product))}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Slide>
          ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px 0px 20px",
          }}
        >
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">
            ${" "}
            {products
              .filter((product) => product.inCart)
              .reduce((acc, current) => (acc += current.price), 0)
              .toFixed(2)}
          </Typography>
        </div>
      </Grid>

      <Grid item sm={2} />
    </Grid>
  ) : (
    <Typography variant="h5" align="center" style={{ marginTop: "100px" }}>
      Your cart is empty
    </Typography>
  );
};
export default Product;
