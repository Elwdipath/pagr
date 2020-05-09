import React from "react";

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, center, children }) {
  return <div className={`row${fluid ? "-fluid" : ""} ${center ? "justify-content-center" : ""}`}>{children}</div>;
}
