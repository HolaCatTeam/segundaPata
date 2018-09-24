import React, { Component } from 'react';
import fire from "./fire.jsx";
import Avatar from "./avatar.jsx";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      avatar: []
    };
  }

  componentDidMount(){
      axios.get('/avatar')
      .then(res => {
        var avatar = res.data;
        this.setState({avatar});
      })
    }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
       <div className="col-md-6">
       <img src="https://i.imgur.com/hxDOW9A.jpg" title="Una pagina para tus mascotas!" />
       <h1>Segunda Pata</h1>
       <form>
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted"></small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
 </form>
    <center><h2> Choose An Avatar </h2></center>
    <button id="avatar">
      <Avatar avatar={this.state.avatar} getAvatar= {this.props.getAvatar} />
    </button>
 </div>
    );
  }
}
export default Login;
