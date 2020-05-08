
import API from ("/utils/API")
import React, { Component } from "react";

class Admin extends Component {

  //an example on how to make sure a user has a valid session, should kick
  //them back to an authorized page if they do not have a valid session.
  componentDidMount(){
    if(API.veryify()){
      redirect
    }
  }


  render() {
    return (
      <div className="Admin">
        <div className="jumbotron">
            <h1 className="text-dark">
                Admin page
            </h1>
        </div>
      </div>
    );
  }
}


export default Admin;