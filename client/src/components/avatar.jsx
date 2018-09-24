import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      avatar:''
    }
  }


render() {
  return(

  <div id="images">
  {this.props.avatar.map(( a ) =>
    <img
      onClick={() => this.props.getAvatar(a.image_path)}
      id='allImages'
      key={a.i}
      className="gallery-images"
      src={`https://imgur.com/${a.image_path}.jpg`}
      />
    )}
  </div>
)}
}

export default Avatar;
