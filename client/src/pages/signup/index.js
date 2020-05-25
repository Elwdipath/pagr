import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input, FormGroup, Label } from "../../components/Form";
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav"
import API from "../../utils/API";
import { Footer } from "../../components/Footer";
import "./style.css";


      const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
      const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      }

      class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        isAdmin: false,
        password: "",
        confPassword: "",
        redirect: null,
      errors: {
        firstName: '',
        email: '',
        password: '',
        confPassword: ''
      }
      };




      handleInputChange = event => {
        const { name, value } = event.target;
        switch (name) {
          case 'email': 
          this.state.errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
          this.state.errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
            case 'confPassword': 
            this.state.errors.confPassword = 
            this.state.password  != this.state.confPassword && value.length < 8
                  ? 'Passwords do not match!'
                  : '';
              break;
          default:
            break;
        }
    
        this.setState({[name]: value});
      }

      handleCheckBoxChange = () => {
        if (this.state.isAdmin) {
          this.setState({
            isAdmin: false
          });
        } else {
          this.setState({
            isAdmin: true
          });
        };
      };

      handleFormSubmit = event => {
        let result = !Object.values(this.state.errors).every(o => o === "");
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && !result) {
          if (this.state.password === this.state.confPassword) {
            let userInfo = {
              "firstName": this.state.firstName,
              "lastName": this.state.lastName,
              "email": this.state.email,
              "isAdmin": this.state.isAdmin,
              "password": this.state.password
            }
            API.saveUser(userInfo)
              .then(res => { 
                 console.log(res);
                 alert("Success" + res );
                 this.setState({redirect: "/user", user: res.data})
                 
                 if (res){
                   alert(res)
                 };
              }) 
              .catch((err) => {
                console.log(err)
                alert("Email is already in use.")
              });
          }
      } else {
        alert("Please fix your errors and try again!")
      }
    };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{pathname: this.state.redirect, state: {user: this.state.user}}} />
    }
    const {errors} = this.state;
    const signUpWrapper = {
      height: '100vh',
      width: '100vw',
      backgroundImage: 'url(assets/img/er.jpg)'
    }
    return (
      <div className='signUpWrapper' style={signUpWrapper}>
                <Nav>
          <li className="nav-item">
            <a className="nav-link" href="/login">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">About Us</a>
          </li>
        </Nav>
        <div className="container-fluid">
          <div className="formContainer rounded border text-center">
            <h1>Sign Up</h1>
            <div>
              <form className="form-signup text-left">
                <FormGroup>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input type="text" id="firstName" autoComplete="given-name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input type="text" id="lastName" name="lastName" autoComplete="family-name" value={this.state.lastName} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email Name</Label>
                  <Input type="email" id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleInputChange} />
                </FormGroup>
                {errors.email.length > 0 && 
                <span className='error text-danger'>{errors.email}</span>}
                <FormGroup>
                    <Label htmlFor="isAdmin">Admin User?</Label>
                    <Input type="checkbox" id="isAdmin" name="isAdmin" value={this.state.isAdmin} onChange={this.handleCheckBoxChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password" autoComplete="new-password" value={this.state.password} onChange={this.handleInputChange} />
                </FormGroup>
                {errors.password.length > 0 && 
                <span className='error text-danger'>{errors.password}</span>}
                <FormGroup>
                  <Label htmlFor="confPassword">Confirm Password</Label>
                  <Input type="password" id="confPassword" name="confPassword" autoComplete="off" value={this.state.confPassword} onChange={this.handleInputChange} />
                </FormGroup>
                {errors.confPassword.length > 0 && 
                <span className='error text-danger'>{errors.confPassword}</span>}
                <br/>
                <FormBtn className="btn btn-primary" onClick={this.handleFormSubmit}>Sign Up</FormBtn>
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