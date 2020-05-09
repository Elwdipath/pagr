import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";




class Home extends Component {

  state ={
    newUsername: "",
    newPassword: "",
    users: []
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
        
      </div>
    );
  }
}


export default Home;