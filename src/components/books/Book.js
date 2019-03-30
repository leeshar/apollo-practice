import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    float: "left",
    width: 345,
    height: 600,
    marginLeft: 15,
    marginTop: 50
  },
  media: {
    height: 450,
    borderBottom: "1px solid #333"
  },
  price: {
    paddingTop: 30,
    fontSize: 24
  },
  won: {
    paddingLeft: 5,
    fontSize: 16
  },
  title: {
    fontSize: 14,
    height: 50
  }
};
const price = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const Book = props =>
  props.data.map((item, index) => (
    <Card className={props.classes.card} key={index}>
      <CardActionArea>
        <CardMedia
          className={props.classes.media}
          image={item.img_path}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={props.classes.title}
          >
            {item.title}
          </Typography>
          <Typography component="p" className={props.classes.price}>
            {price(item.price)}
            <span className={props.classes.won}>원</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
export default withStyles(styles)(Book);
