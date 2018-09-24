import React, {Component}from "react";
import fire from "./components/fire.jsx";
import Login from "./components/Login.jsx";
import App from "./App.jsx";
import Home from "./home.jsx"
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      avatar: ''
    });
    this.authListener = this.authListener.bind(this);
    this.getAvatar = this.getAvatar.bind(this);
}



  componentDidMount() {
    this.authListener();
  }

  getAvatar(avatar){
      this.setState({
        avatar: avatar
      })
    }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    console.log(this.state.avatar)
    return (
      <div>
      <center>
      {this.state.user ?  ( <Home avatar={this.state.avatar}/>) : (<Login getAvatar= {this.getAvatar} avatar={this.state.avatar}/>)}
    </center>
    </div>
  )};
}



export default Main;
