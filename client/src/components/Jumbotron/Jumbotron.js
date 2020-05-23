import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        paddingTop: 100,
        backgroundImage: 'url(assets/img/doctor_crossed_arms.jpg)',
        backgroundSize: 'cover'
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
