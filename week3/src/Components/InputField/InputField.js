import styles from "./InputField.module.css";
import React, { forwardRef, useImperativeHandle, useState } from "react";

//forwardRef와 useImperativeHandle을 이용하여 부모 컴포넌트에서 InputField의 clearValue 와, inputValue에 접근하고,
//사용하여 value가 올바르게 초기화 될 수 있도록 연동해보세요
const InputField = forwardRef((props, ref) => {
  const [inputValue, setinputValue] = useState("");
  useImperativeHandle(ref, () => ({ clearValue, inputValue }));

  const clearValue = () => {
    setinputValue("");
  };

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <input
      className={styles.input}
      placeholder={props.name}
      onChange={handleInputChange}
      ref={ref}
      value={inputValue}
    />
  );
});

export default InputField;
