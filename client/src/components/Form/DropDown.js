import React from "react";

export function DropDown({children}) {
  return (
    <div className="form-group">
        <label htmlFor="onCallStaff">On-Call Staff Member</label>
        <select className="form-control" id="onCallStaff">
          {children}
        </select>
  </div>
  );
}

export default DropDown;