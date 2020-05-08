import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";




class Home extends Component {

  state ={
    newUsername: "",
    newPassword: "",
    username: "",
    password: "",
    users: [],
    redirectTo: ""
  }

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

// When this form is submitted, use the API.saveUser method to save the User data
// Then reload Users from the database
handleFormNewUserSubmit = event => {
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

handleFormLoginSubmit = event => {
  console.log("username: " + this.state.username + " || password: " + this.state.password)
  event.preventDefault();
  // if both the username field and password field are filled out 
  if (this.state.username && this.state.password) {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    // submit a login request to our API server 
    API.login(user).then(response => {
      console.log("Login response: " + response)
      // if our login response is good, update the state of our App 
      if (response.status === 200) {
        console.log("login success for " + response.data.username)
        // this.props.updateUser({
        //   loggedIn: true,
        //   username: response.data.username
        // })
      }
      // update the state to redirect to home
      this.setState({
        redirectTo: "/admin"
      }).catch(err => console.log("Login error: " + err))
    })
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
    return (
      <div className="home">
        <div className="jumbotron">
            <h1 className="text-dark">
                Login here, should render admin page or user page
            </h1>
        </div>

        <form>
          <h1>Sign in as an existing user with this forum</h1>
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
                onClick={this.handleFormLoginSubmit}
              >
                Login
              </FormBtn>
            </form>

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
                onClick={this.handleFormNewUserSubmit}
              >
                Create User
              </FormBtn>
            </form>
        
      </div>
    );
  }
}


export default Home;