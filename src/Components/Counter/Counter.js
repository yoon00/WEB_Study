import Panel from "../Panel/Panel";
import "./Counter.css";
import React, { useState } from "react";
function Counter({ isCounter }) {
  //  let counter 를 지우고, useState를 사용해서 버튼 텍스트에 사용할 counter 변수를 정의하세요
  const [counter, setCounter] = React.useState(0);
  return (
    //삼항 연산자를 이용해서 isCounter에따라 컨디셔널 랜딩을 수행하세요
    isCounter ? (
      <div className="counter_counter">
        <img
          className="counter_leftbuttonIcon"
          alt=""
          src="images/Arrow.png"
          //onClick Event 핸들러를 이용해서 카운터를 증가(감소)시키는 버튼 기능을 넣으세요
          onClick={() => setCounter(counter - 1)}
        />
        <div className="counter_counterframe">
          <div className="counter_shadow">
            <div className="counter_shadowChild" />
            <div className="counter_shadowItem" />
          </div>
          <div className="counter_numberframe">
            <div className="counter_number">{counter}</div>
          </div>
        </div>
        <img
          className="counter_rightbuttonIcon"
          alt=""
          src="images/Arrow.png"
          //onClick Event 핸들러를 이용해서 카운터를 감소(증가)시키는 버튼 기능을 넣으세요
          onClick={() => setCounter(counter + 1)}
        />
      </div>
    ) : (d
      <Panel />
    )
  );
}

export default Counter;
