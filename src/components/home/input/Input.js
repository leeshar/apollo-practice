import React from "react";

const Input = props => (
  <>
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  </>
);

export default Input;
