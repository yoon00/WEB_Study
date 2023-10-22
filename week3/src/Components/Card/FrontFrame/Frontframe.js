import styles from "./FrontFrame.module.css";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import React, { useContext, useRef } from "react";
import SpinContext from "../../../store/SpinContext";
import UserContext from "../../../store/UserContext";
import ErrorContext from "../../../store/ErrorContext";
function Frontframe() {
  //spinCtx, userCtx, errorCtx를 사용할 수 있도록 store에 있는 context들을 import하여 useContext로 연동해 보세요
  const spinCtx = useContext(SpinContext);
  const userCtx = useContext(UserContext);
  const errorCtx = useContext(ErrorContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleConvert = () => {
    spinCtx.setfaceState("back");
    emailRef.current.clearValue();
    passwordRef.current.clearValue();
  };

  const handleSignIn = () => {
    if (userCtx.userDatas[emailRef.current.inputValue] != null) {
      if (
        userCtx.userDatas[emailRef.current.inputValue] ==
        passwordRef.current.inputValue
      ) {
        errorCtx.setsuccess(true);
      } else {
        errorCtx.seterrorMessage("비밀번호가 틀렸어요!");
      }
    } else {
      errorCtx.seterrorMessage("등록된 유저가 아니에요!");
    }
  };

  return (
    <div className={styles.theFront}>
      <b className={styles.title}>로그인</b>
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
          title={"Sign Up 으로"}
          backgroundColor={"#000000"}
          titleColor={"#FFFFFF"}
          onClick={handleConvert}
        />
        <Button
          iconSrc={"/images/ic-key.png"}
          title={"로그인"}
          backgroundColor={"#FFFFFF"}
          titleColor={"#000000"}
          onClick={handleSignIn}
        />
      </div>
    </div>
  );
}

export default Frontframe;
