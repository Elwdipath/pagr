import React from "react";
import ModalHeader from "react-bootstrap/ModalHeader";


export function EventModalHeader(props, {children}) {
  
    return (
      // <!-- Modal -->    
          <ModalHeader {...props}>
            {children}
          </ModalHeader>
    );
  }