import React from "react";

export function DropDown(props) {
  return (
    <div class="form-group">
        <label for="exampleFormControlSelect1">On-Call Staff Member</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
  </div>
  );
}

export default DropDown;