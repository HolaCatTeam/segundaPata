import React, {Component}from "react";
import ReactDOM from "react-dom";

import PaypalButton from './paypalbutton.jsx';
import ItemPage from "./item-page/ItemPage.jsx";
import axios from "axios";


const CLIENT = {
  sandbox:'AaSedcXrpxy94z5uAXe_9Y_NT_G3x0bo2kZktDbM0nFtqDlrmggoqn2ZH6I6iytqnPcx0fos8Wknb6GK'
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wantedItem: [],
      quantity: 0
    }

  }

  componentDidMount() {
    axios.get('/checkout')
    .then(res => {
      console.log('hola desde payment client')
      const items = res.data;
      this.setState({ wantedItem : items });
    })
  }




render(){
  console.log(this.state.wantedItem)
  const onSuccess = (payment) =>
     console.log('Successful payment!', payment);

   const onError = (error) =>
     console.log('Erroneous payment OR failed to load script!', error);

   const onCancel = (data) =>
     console.log('Cancelled payment!', data);


  return(
    <div>
      <center>
        <h1>
          <img src="https://i.imgur.com/hxDOW9A.jpg" title="Una pagina para tus mascotas!" />
          <div>Ticket</div>
        </h1>
        <div className="payment">
          {this.state.wantedItem.map((item) =>
            <div className="row">
                <div className="col-md-4">{item.name}</div>
                <div className="col-md-4">{item.price}</div>
                <div className="col-md-4">{item.quantity}</div>
            </div>)}
          </div>
        <h2>Su total de compra.</h2>
          {this.state.wantedItem.map((item) =>
        <div className='col-md-6'>
          <h2>$ {(parseInt(item.price.slice(1))*item.quantity)} pesos</h2>
            <PaypalButton
                client={CLIENT}
                env={ENV}
                commit={true}
                currency={'MXN'}
                total={(parseInt(item.price.slice(1))*item.quantity)}
                onSuccess={onSuccess}
                onError={onError}
                onCancel={onCancel}
                />
        </div>)}
      </center>
    </div>
    )
  }
};



export default Payment;
