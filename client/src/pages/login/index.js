import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
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
              "email": this.state.email,
              "password": this.state.password
            }
            API.login(userInfo)
              .then(res => { 
                console.log("Success");
              }) 
              .catch(err => console.log(err));
          }
      };

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="formContainer rounded border text-center justify-content-center">
            <h1>Log In</h1>
            <div>
              <form className="form-signup text-left">
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