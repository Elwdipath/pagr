import React from "react";
import Button from "react-bootstrap/Button"

export function Button( props, {children} ) {
  return (
    <Button {...props}> {children} </Button>
  );
}