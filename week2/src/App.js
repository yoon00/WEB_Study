//목표: 패널의 확인 버튼을 누르면 패널이 사라지고 카운터가 나타나야 합니다,
// 카운터의 증가 버튼을 누르면 카운터가 증가하고, 카운터의 감소버튼을 누르면 카운터가 감소해야 합니다.ㄴ

import "./App.css";
import React, { useState } from "react";
import Panel from "./Components/Panel/Panel";
import Counter from "./Components/Counter/Counter";
function App() {
  const [isCounter, setisCounter] = React.useState(false);
  //useState를 사용하여 컨디셔널 랜딩에 사용할 isCounter 변수와
  //isCounter를 세팅할 setisCounter를 정의하세요

  // "" 자리에 컴포넌트 코드를 참고하여, 컨디셔널 랜딩이 이루어 지도록 적절한 값을 대입하세요
  return (
    <div className="App">
      <Counter isCounter={isCounter}></Counter>
      <Panel isCounter={isCounter} setisCounter={setisCounter}></Panel>
    </div>
  );
}

export default App;
