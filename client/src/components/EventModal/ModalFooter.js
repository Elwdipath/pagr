import React from "react";
import ModalFooter from "react-bootstrap/ModalFooter";

export function EventModalFooter ({children}) {
    
  return (
    // <!-- Modal -->    

        <ModalFooter>
            {children}
        </ModalFooter>

  );
}