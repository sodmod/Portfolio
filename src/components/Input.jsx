import React from "react";

export function Input(props) {
  return (
    <input
      placeholder={props.placeholder}
      className="w-full p-4 bg-[#D9D9D9] rounded-lg"
    />
  );
}

export function TextArea(props) {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      className="bg-[#D9D9D9] w-full rounded-lg"
      placeholder={props.placeholder}
    />
  );
}
