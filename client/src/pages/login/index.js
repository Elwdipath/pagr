import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Nav from '../../components/Nav';
import { FormBtn, Input, FormGroup, Label } from "../../components/Form";
import API from "../../utils/API";
import { Footer } from "../../components/Footer";
import "./style.css";


class Login extends Component {
    state = {
        email: "",
        password: "",
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            let userInfo = {
              email: this.state.email,
              password: this.state.password
            }
            API.login(userInfo)
              .then(res => {this.setState({user: res.data})
            
              this.setState({redirect: "/user"});})
              .catch(err => {
                console.log(err)
                alert("Invalid email or password")
                });
          }
      };

  render() {
  const loginWrapper = {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url(assets/img/er.jpg)',
}

    if (this.state.redirect) {
      return <Redirect to={{pathname: this.state.redirect, state: {user: this.state.user}}} />
    }
    return (
      <div className="loginWrapper" style={loginWrapper}>
        <Nav>
          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
        </Nav>
        <div className="container-fluid">
          <div className="formContainer rounded border text-center justify-content-center">
            <h1>Log In</h1>
            <div>
              <form className="form-login text-left">
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" autoComplete="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup> 
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </FormGroup>
                <FormBtn className="btn btn-primary" onClick={this.handleFormSubmit}>Login</FormBtn>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;