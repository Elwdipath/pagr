import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";




class Home extends Component {

  state ={
    newUsername: "",
    newPassword: "",
    user: {}
  }

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

// When the form is submitted, use the API.saveUser method to save the User data
// Then reload Users from the database
handleFormSubmit = event => {
  console.log("newUsername: " + this.state.newUsername + " || newPassword: " + this.state.newPassword)
  event.preventDefault();
  if (this.state.newUsername && this.state.newPassword) {
    let newUser = {
      username: this.state.newUsername,
      password: this.state.newPassword
    }
    API.saveUser(newUser)
      // .then(res => this.loadUsers())
      .catch(err => console.log(err));
  }
};

handleLoginSubmit = event => {
  console.log("username: " + this.state.username + " || password: " + this.state.password)
  event.preventDefault();
  if (this.state.username && this.state.password) {
    let User = {
      username: this.state.username,
      password: this.state.password
    }
    API.login(User)
      .then(res => {this.setState({user: res.data})})
      .catch(err => console.log(err));
  }
};

loadUsers = () => {
  API.getUsers()
    .then(res =>
      this.setState({ users: res.data })
    )
    .catch(err => console.log(err));
};

  render() {
    let loggedIn = this.state.user
    const renderAdminButton = () => {
        if (loggedIn.isAdmin) {
          return (
            <div className="admin-notice">
            <h1>You are an administrator!</h1>
          <button>Admin tools</button>
          </div>
        )}    
      }
    const welcome = () => {
      if (loggedIn.username) {
        return  (
        <h1>Welcome, {loggedIn.username}</h1>
        )
      }
    }


    return (
      <div className="home">
        <div className="jumbotron">
            <h1 className="text-dark">
                Login here, should render admin page or user page
                <div>
                  <br/>
                {renderAdminButton()}
                {welcome()}
                </div>
            </h1>
        </div>
        <form>
          <h1>Create a user with this forum</h1>
              <Input
                value={this.state.newUsername}
                onChange={this.handleInputChange}
                name="newUsername"
                placeholder="new Username (required)"
              />
              <Input
                value={this.state.newPassword}
                onChange={this.handleInputChange}
                name="newPassword"
                placeholder="new password (required)"
              />
              <FormBtn
                disabled={!(this.state.newUsername && this.state.newPassword)}
                onClick={this.handleFormSubmit}
              >
                Create User
              </FormBtn>
            </form>
        <form>
          <h1>login with this forum</h1>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleLoginSubmit}
              >
                Login
              </FormBtn>
            </form>
        
      </div>
    );
  }
}


export default Home;