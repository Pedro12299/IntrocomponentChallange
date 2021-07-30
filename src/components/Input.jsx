import React, { useState } from "react";

function Input(props) {
  return (
    <input
      class={props.class}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={(event) => {
        props.onChange(event);
      }}
    />
  );
}

export default Input;
