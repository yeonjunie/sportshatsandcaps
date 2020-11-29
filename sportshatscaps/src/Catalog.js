import React from 'react';
import './App.css';
import Item from './Item.js';
import Dropdowns from './Dropdowns.js';
import CartItem from './CartItem.js';
import Grid from '@material-ui/core/Grid';
import Table from 'react-bootstrap/Table';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        league: "All",
        style: "All",
        sort: "None",
        cartList: [],
        total: 0,
    }
  }

  handleFilterLeague = (league) => {
    this.setState({league: league});
  }

  handleFilterStyle = (style) => {
    this.setState({style: style});
  }
  
  checkFilters = (item) => {
    if (this.state.league === "All" && this.state.style === "All") {
      return true;
    } else if (this.state.league === "All" && this.state.style === item.style) {
      return true;
    } else if (this.state.league === item.league && this.state.style === "All") {
      return true;
    } else if (this.state.league === item.league && this.state.style === item.style) {
      return true;
    } else {
      return false;
    }
  }

  handleSort = (sort) => {
    this.setState({sort: sort});
  }

  checkSort = (list) => {
    if (this.state.sort === "None") {
      return list;
    } else if (this.state.sort === "Low") {
      list.sort((a,b)=> a.price - b.price);
      return list;
    } else if (this.state.sort === "High") {
      list.sort((a,b)=> b.price - a.price);
      return list;
    }
  }

  handleAddToCart = (item) => {
    let cart = this.state.cartList;
    let itemInCart = cart.some(i => {return i.name === item.name});
    if (itemInCart) {
      let i = cart.findIndex(curr => {return curr.name === item.name});
      cart[i].count = cart[i].count + item.count;
    } else {
      cart.push(item);
    }
    this.setState({
      cartList: cart
    });
    this.calculateTotalPrice();
  }

  handleRemoveOne = (name) => {
    let cart = this.state.cartList;
    let i = cart.findIndex(curr => {return curr.name === name});
    if (cart[i].count === 1) {
      this.removeAll(name);
    } else {
      cart[i].count = cart[i].count - 1;
      this.setState({
        cartList: cart
      });
      this.calculateTotalPrice();
    }
  }

  handleAddOne = (name) => {
    let cart = this.state.cartList;
    let i = cart.findIndex(curr => {return curr.name === name});
    cart[i].count = cart[i].count + 1;
    this.setState({
      cartList: cart
    });
    this.calculateTotalPrice();
    
  }

  removeAll = (name) => {
    let cart = this.state.cartList;
    let removed = cart.filter(product => product.name !== name);
    let totalPrice = 0;
      for (let i=0;i<removed.length;i++){
        totalPrice += (parseInt(removed[i].price) * removed[i].count);
      }
    this.setState({
      cartList: removed,
      total: totalPrice
    });
  }

  calculateTotalPrice() {
    let cart = this.state.cartList;
    let totalPrice = 0;
    for (let i=0;i<cart.length;i++){
      totalPrice += (parseInt(cart[i].price) * cart[i].count);
    }
    this.setState({
      total: totalPrice
    });
  }

  render() {
    let filteredItems = this.props.list.filter(this.checkFilters);
    let items = this.checkSort(filteredItems);
    let cartItems = this.state.cartList;
    return (
      <div>
        <div className="buttongroup">
          <Dropdowns 
            league = {this.state.league} 
            style = {this.state.style} 
            sort = {this.state.sort} 
            handleFilterLeague={this.handleFilterLeague} 
            handleFilterStyle={this.handleFilterStyle}
            handleSort={this.handleSort}/>
        </div>
        <div className="gridGroup">
          <Grid container spacing={2}>
            {items.map(item => 
            <Grid item xs={4} sm={3}>
              <Item 
                name = {item.name}
                league = {item.league}
                style = {item.style}
                price = {item.price}
                image = {item.image}
                handleAddToCart = {this.handleAddToCart}/>
            </Grid>)}
          </Grid>
        </div>
        <div><h3>My Cart</h3></div>
        <div className="tableGroup"> 
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
              {cartItems.map(item=>
                <CartItem name={item.name} 
                price={item.price}
                count={item.count}
                handleRemove={this.removeAll}
                handleAddOne={this.handleAddOne}
                handleRemoveOne={this.handleRemoveOne}/>
             )}
          </tbody>
        </Table>
        </div>
        <h5>Total: ${this.state.total}</h5>
      </div>
    );
  }
}

export default Catalog;