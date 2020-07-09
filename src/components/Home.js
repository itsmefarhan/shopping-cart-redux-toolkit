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

const Home = () => {
  const shoes = [
    {
      id: 1,
      name: "Red Nike Sneaker",
      photo:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
    },
    {
      id: 2,
      name: "Gray Nike Running Shoe",
      photo:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      price: 18,
    },
    {
      id: 3,
      name: "Maroon Plimsoll",
      photo:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=343&q=80",
      price: 21,
    },
    {
      id: 4,
      name: "Blue and Black Air Jordan",
      photo:
        "https://images.unsplash.com/photo-1578116922645-3976907a7671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      price: 22,
    },
    {
      id: 5,
      name: "Red and White Air Jordan",
      photo:
        "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      price: 23,
    },
  ];

  return (
    <Grid container>
      {shoes.map((shoe) => (
        <Grid item md={4} sm={6} xs={12} key={shoe.id}>
          <Card style={{ margin: 20 }}>
            <CardActionArea>
              <CardMedia image={shoe.photo} style={{ height: 200 }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {shoe.name}
                </Typography>

                <Typography variant="body1" color="textSecondary" component="p">
                  ${shoe.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
