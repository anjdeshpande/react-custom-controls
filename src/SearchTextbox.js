import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Input, InputGroup } from "reactstrap";

export function SearchTextbox(props) {
  const textboxRef = useRef(null);
  const { children, ...otherProps } = props || {};
  return (
    <InputGroup
      className={`d-flex align-items-center border bg-white ps-2 ${
        props.className || ""
      }`}
      onClick={() => {
        textboxRef.current && textboxRef.current.focus();
      }}
    >
      <BsSearch color="black" />

      <Input
        className="border-0"
        style={{ boxShadow: "none" }}
        innerRef={textboxRef}
        {...otherProps}
      />
    </InputGroup>
  );
}
