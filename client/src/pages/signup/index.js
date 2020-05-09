import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, FormGroup, Label } from "../../components/Form";
import API from "../../utils/API";
import { Footer } from "../../components/Footer";
import "./style.css";


class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPassword: ""
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
          if (this.state.password === this.state.confPassword) {
            let userInfo = {
              "firstName": this.state.firstName,
              "lastName": this.state.lastName,
              "email": this.state.email,
              "password": this.state.password
            }
            API.saveUser(userInfo)
              .then(res => { 
                 alert("Success" + "\n" + res );
              }) 
              .catch(err => console.log(err));
          }
      }};

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="formContainer rounded border text-center justify-content-center">
            <h1>Sign Up</h1>
            <div>
              <form className="form-signup text-left">
                <FormGroup>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email Name</Label>
                  <Input type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="confPassword">Confirm Password</Label>
                  <Input type="password" id="confPassword" name="confPassword" value={this.state.confPassword} onChange={this.handleInputChange} />
                </FormGroup>
                <FormBtn className="btn btn-primary">Sign Up</FormBtn>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;