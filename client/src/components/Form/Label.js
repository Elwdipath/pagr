import React from "react";

export function Label(props) {
  return (
    <label htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
}