import React from 'react';

import SingleItem from "./item-page/SingleItem.jsx";

const ItemsHome = (props) => (

  <div>{console.log(props)}
    { props.products ?
      <div>
        {props.products.map((item, id) => (
          <div>
          <img src={`https://i.imgur.com/${item.picturePath}.jpg`}/>
          <SingleItem item={item} key={id} setProduct={props.setProduct}/>
          </div>
        ))}
      </div>
   : <div><img src="https://www.aperrados.com/wp-content/uploads/2017/01/bulldog-ingles-700x452.jpeg" alt="aquí van imagenes de perritos bien cute" /></div> }
  </div>
)

export default ItemsHome;
