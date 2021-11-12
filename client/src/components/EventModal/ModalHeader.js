import React from "react";
import ModalHeader from "react-bootstrap/ModalHeader";


export function EventModalHeader(props, {children}) {
  
    return (
       
          <ModalHeader {...props}>
            {children}
          </ModalHeader>
    );
  }