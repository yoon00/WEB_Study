import styles from "./App.module.css";
import Warning from "./Components/Warning/Warning";
import Success from "./Components/Success/Success";
import Card from "./Components/Card/Card";
import UserContext from "./store/UserContext";
import ErrorContext from "./store/ErrorContext";
import React, { useState } from "react";
function App() {
  const [errorMessage, seterrorMessage] = useState(null);
  const [success, setsuccess] = useState(false);
  const [userDatas, setuserDatas] = useState({});

  return (
    //로그인 데이터를 전역적으로 저장하고, 사용해야 합니다 이를 위해 로그인 정보를 담은 UserContext를 사용해야 하는데요,
    //value가 {userDatas : userDatas, setuserDatas : setuserDatas} 인 UserContext.Provider 태그로
    //아래 부분을 감싸주세요
    <UserContext.Provider
      value={{ userDatas: userDatas, setuserDatas: setuserDatas }}
    >
      <ErrorContext.Provider
        value={{
          errorMessage: errorMessage,
          seterrorMessage: seterrorMessage,
          setsuccess: setsuccess,
        }}
      >
        <div className={styles.App}>
          {errorMessage != null && (
            <Warning errorMessage={errorMessage}></Warning>
          )}
          {success && <Success></Success>}
          <img
            className={styles.background}
            src="images/img-background.png"
          ></img>
          <Card></Card>
        </div>
      </ErrorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
