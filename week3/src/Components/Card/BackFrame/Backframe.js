import styles from "./Backframe.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import React, { useContext, useRef } from "react";
import SpinContext from "../../../store/SpinContext";
import UserContext from "../../../store/UserContext";
import ErrorContext from "../../../store/ErrorContext";
function Backframe() {
  //spinCtx, userCtx, errorCtx를 사용할 수 있도록 store에 있는 context들을 import하여 useContext로 연동해 보세요
  const spinCtx = useContext(SpinContext);
  const userCtx = useContext(UserContext);
  const errorCtx = useContext(ErrorContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleConvert = () => {
    spinCtx.setfaceState("front");
    emailRef.current.clearValue();
    passwordRef.current.clearValue();
  };

  const validateEmail = () => {
    return emailRef.current.inputValue.includes("@");
  };

  const validatePassword = () => {
    return passwordRef.current.inputValue.length > 6;
  };

  const handleRegister = () => {
    if (!validateEmail()) {
      errorCtx.seterrorMessage("이메일에는 @가 포함되어야 해요!");
    } else if (!validatePassword()) {
      errorCtx.seterrorMessage("비밀번호는 7자리 이상이여야 해요!");
    } else {
      userCtx.setuserDatas((prev) => {
        return {
          ...prev,
          [emailRef.current.inputValue]: passwordRef.current.inputValue,
        };
      });
      handleConvert();
    }
  };

  return (
    <div className={styles.theBack}>
      <b className={styles.title}>회원 가입</b>
      <div className={styles.inputParent}>
        <InputField name={"이메일"} ref={emailRef}></InputField>
        <InputField name={"패스워드"} ref={passwordRef}></InputField>
      </div>
      <div className={styles.midline}>
        <div className={styles.line1} />
        <div className={styles.ntpc}>.Ntpc</div>
        <div className={styles.line2} />
      </div>
      <div className={styles.buttonFrame}>
        <Button
          iconSrc={"/images/ic-change.png"}
          title={"Sign In 으로"}
          backgroundColor={"#000000"}
          titleColor={"#FFFFFF"}
          onClick={handleConvert}
        />
        <Button
          iconSrc={"/images/ic-signIn.png"}
          title={"회원 가입"}
          backgroundColor={"#FFFFFF"}
          titleColor={"#000000"}
          onClick={handleRegister}
        />
      </div>
    </div>
  );
}

export default Backframe;
