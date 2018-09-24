import React from "react";
import {Link} from "react-router-dom";

const SingleItem = props => (
    <div>
      <Link to={`/item/${props.item.id}`} >
        <span id='product' onClick={props.setProduct} >{`${props.item.name} ${props.item.price}`}</span>
      </Link>
    </div>
);

export default SingleItem;
// <Link to={`/item/${props.item.id}`} >
// <Link to={{pathname: '/item/'+ props.item.id,  state: {buyItem: props.buyItem, discardItem: props.discardItem}}}>

//onClick={this.setProduct}
