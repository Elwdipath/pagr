import React, { Component } from 'react';

class MyForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
        </form>
      );
    }
  }