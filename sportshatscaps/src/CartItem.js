import React from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class CartItem extends React.Component {
  render() {
    return (
      <tr>
      <td>{this.props.name}</td>
      <td>{"$" + this.props.price}</td>
      <td>
        <IconButton onClick={() => this.props.handleRemoveOne(this.props.name)}>
        <RemoveCircleOutlineIcon/>
        </IconButton>
        {this.props.count}
        <IconButton onClick={() => this.props.handleAddOne(this.props.name)}><AddCircleOutlineIcon/></IconButton></td>
      <td><IconButton onClick={() => this.props.handleRemove(this.props.name)}><HighlightOffIcon/></IconButton></td>
      </tr>
    )
  }
}

export default CartItem;