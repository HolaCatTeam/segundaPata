import React, {Component}from "react";
import { Switch, Route } from 'react-router-dom';
import $ from "jquery";
import axios from "axios";
import {Link} from "react-router-dom";


import SingleItem from "./SingleItem.jsx";


class ItemPage extends Component {
  constructor(props) {

    super(props);
    this.state = {
      products: undefined,
      wantedItem: [],
      quantity: 0
    }

    this.buyItem = this.buyItem.bind(this);
    this.discardItem = this.discardItem.bind(this);
    this.addPurchase = this.addPurchase.bind(this);

  }

  componentDidMount() {

    axios.get('/items')
    .then(res => {
      const products = res.data;
      this.setState({ products });
    })
  }

  buyItem(string='') {
    var cartItems = this.state.wantedItem;
    var productName = this.state.products[parseInt(this.props.match.params.id-1)].name;
    var productPrice = this.state.products[parseInt(this.props.match.params.id-1)].price;
    var id = this.state.products[parseInt(this.props.match.params.id-1)].id;
    var quantity= this.state.quantity;

    if (cartItems.length === 0) {
      cartItems.push([id, productName, productPrice])
    }

    for (var i = 0; i < cartItems.length; i += 1) {

      if (cartItems[i].indexOf(productName) < 0) {
        quantity = 1;
        cartItems.push([id, productName, productPrice])

      } else {
        quantity += 1;
      }
    }

    this.setState({
      wantedItem: cartItems,
      quantity: quantity
    })
  }

  discardItem() {
    var cartItems = this.state.wantedItem;
    var quantity= this.state.quantity;

    cartItems.pop();
    quantity -= 1;

    this.setState({
      wantedItem: cartItems,
      quantity: quantity
    })
  }


  addPurchase() {

    var items = this.state.wantedItem;

    for (var i = 0; i < items.length; i += 1) {
      var name = items[i][1];
      var price = items[i][2];
      var quantity = this.state.quantity;

    $.ajax({
    url:'/sold',
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify({
      name: name,
      price: price,
      quantity: quantity
    }),
    success:(data)=> {
      console.log(data)
    },
    error: (xhr,status,error) => {
    }
  });
 }
}


 render(){
   console.log(this.state.wantedItem, this.state.quantity)
  return(
    <div className ="itemspage">
    { this.state.products ?
      <div>
        <div className='col-md-6'>
          <h2>Producto:{`${this.state.products[parseInt(this.props.match.params.id-1)].name}`}</h2>
          <h3>Precio:{`${this.state.products[parseInt(this.props.match.params.id-1)].price}`}</h3>
          <h4>Descripción:{`${this.state.products[parseInt(this.props.match.params.id-1)].descrip}`}</h4>
          <h2>Vendedor:{`${this.state.products[parseInt(this.props.match.params.id-1)].vendor}`}</h2>
          <h3>Ponte en contacto con el vendedor:<a href={"mailto:"+this.state.products[parseInt(this.props.match.params.id-1)].email}>{`${this.state.products[parseInt(this.props.match.params.id-1)].email}`}</a></h3>
        </div>
        <div className='col-md-6'>
          <button onClick={this.buyItem}>Lo quiero</button>
        </div>
        <div className='col-md-6'>
          <button onClick={this.discardItem}>Ya no Lo quiero</button><br/>
          <span id='checkout'>{`${this.state.quantity}`}</span>
        </div>
        <Link to={`/payment/`} >
          <button id='payment' onClick={this.addPurchase} >Pagar</button>
        </Link>
      </div>
    : <main>
      <h1>"Render individual item page "</h1>
    </main> }
  </div>

)}
};
export default ItemPage;
