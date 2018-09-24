import React, {Component}from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchBar from "./components/search/SearchBar.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import ItemsHome from "./components/ItemsHome.js";
import UploadProduct from "./components/UploadProduct.jsx";
import fire from "./components/fire.jsx";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      products: undefined,
      product: undefined
    }
    this.logout = this.logout.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.handleSubmitToys = this.handleSubmitToys.bind(this);
    this.handleSubmitClothes=this.handleSubmitClothes.bind(this);
    this.handleSubmitBeds=this.handleSubmitBeds.bind(this);
    this.handleSubmitAccesories= this.handleSubmitAccesories.bind(this);

  }

      logout() {
          fire.auth().signOut();
      }


  componentDidMount() {
    axios.get('/items')
    .then(res => {
      const items = res.data;
      this.setState({ items });
    })
  }

//   handleSubmitPicturePath(){
//     //alert('toys called');
//    axios.get('/picturePath')
//    .then(res => {
//     const picturePath = res.data;
//     this.setState({ picturePath })
//  })
// }


 handleSubmitToys(){
   //alert('toys called');
  axios.get('/toys')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }

 handleSubmitClothes(){
   //alert('toys called');
  axios.get('/clothes')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }

 handleSubmitBeds(){
   //alert('toys called');
  axios.get('/beds')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }

 handleSubmitAccesories(){
   //alert('toys called');
  axios.get('/accesories')
  .then(res => {
    console.log(res);
   var products = res.data;
    this.setState({products});
  })
 }

setProduct(id){
  this.setState({
    product: id
  })
}

// postItem(Upload){
//   axios.post('item', {
//   newUpload = {
//     name: "",
//     description:"",
//     price:"",
//     category:"",
//     email:"",
//     vendor:""
//
//   }
// })
// }


render(){
  console.log(this.state.items);
  return(
    <div>

    <button onClick={this.logout}>Logout</button>
      <center>
        <div>
          <img src="https://i.imgur.com/hxDOW9A.jpg" title="Una pagina para tus mascotas!" />
          <h1>Segunda Pata</h1>
        </div>
        <h2>Vende y Compra Accesorios, para Mascotas.</h2>
        <SearchBar items={this.state.items} handleSubmitToys={this.handleSubmitToys}
        handleSubmitClothes={this.handleSubmitClothes} handleSubmitBeds={this.handleSubmitBeds}
        handleSubmitAccesories={this.handleSubmitAccesories}
        />
        <ItemsHome items={this.state.items.picturePath} products={this.state.products} setProduct={this.setProduct}/>
      </center>
      <div className="fb-like" data-href="https://github.com/mambo-num-5" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
    </div>
    )
  }
};



export default Home;
