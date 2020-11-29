import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCart(name, price, image){
    let productInfo = {
        name: name,
        price: price,
        image: image,
        count: 1,
    }
    this.props.handleAddToCart(productInfo);
  }

  render() {
    return (
    <Card>
      <CardMedia>
        <img src={this.props.image} alt="cap image"/>
      </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {"$" + this.props.price}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
          {this.props.league === "NBA" ? <span role="img" aria-label="bball">🏀</span> : <span role="img" aria-label="baseball">⚾️</span>}
            {" "+this.props.league + " "}
            &#183;
            {" "+this.props.style}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {this.props.name}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => this.addToCart(this.props.name, this.props.price, this.props.image)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
    );
  }
}

export default Item;