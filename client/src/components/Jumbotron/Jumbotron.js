import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, paddingTop: 100 }}
      className="jumbotron jumbotron-fluid"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
