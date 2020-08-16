import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#444" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" style={{ color: "white" }} className="link">
              <LocalMallIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            <Link
              to="cart"
              className="link"
              style={{ color: "white", marginRight: "20px" }}
            >
              Cart
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link to="about" className="link" style={{ color: "white" }}>
              About
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default Navbar;
