import "./Panel.css";

const Panel = ({ isCounter, setisCounter }) => {
  console.log(isCounter);
  console.log(setisCounter);
  return !isCounter ? (
    <div className="panel_numberframe">
      <img className="panel_testimageIcon" alt="" src="/images/TestIcon.png" />
      <h1 className="panel_title">.NTPC 타이머</h1>
      <h2 className="panel_message">
        {
          "2주차까지 수고 많으셨습니다!\n배운 지식을 활용해서 타이머 페이지를 완성해 볼까요?"
        }
      </h2>
      <div
        className="panel_button"
        //onClick Event 핸들러를 이용해서 isCounter를 조작하여 컨디셔널 랜딩을 수행하는 코드를 넣으세요
        onClick={() => setisCounter((isCounter = true))}
      >
        <span className="panel_buttontext">확인</span>
      </div>
    </div>
  ) : null;
};

export default Panel;
