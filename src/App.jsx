import React from "react";
import "./component/style.css";
function App() {
  const START_TIME = 20;
  const [text, setText] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [timeRemaining, setTimeRemaining] = React.useState(START_TIME);
  const [isStart, setIsStart] = React.useState(false);
  const linkRef = React.useRef(null);

  React.useEffect(() => {
    if (timeRemaining > 0 && isStart)
     { setTimeout(() => {
        setTimeRemaining((prvTime) => prvTime - 1);
      }, 1000);
      
    }
   else if(timeRemaining ===0){
        endTheClock();
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining ,isStart]);




   function endTheClock(){
      wordCounter(text);
      setIsStart(false);
   }


   function startClock() {
     setIsStart(true);
     setTimeRemaining(START_TIME);
     setText("");
     linkRef.current.disabled = false
     linkRef.current.focus();
   }

  function handleChange(e) {
    const { value } = e.target;
    setText(() => value);
  }

  function wordCounter(textStr) {
  // no white space allowd so use trim
    let words = textStr.trim().split(" ");
  // when there so no word then space count as 1 word so use filter for that case
     const countWord = words.filter(elm => elm !== "").length;
    setCount(countWord);
  }

  
  return (
    <>
      <h1>How fast do you type ?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        // until is isstart is true you can textArea enable typing else disable
        disabled={!isStart}
        ref={linkRef}
      />
      <h4>Time Remaining : {timeRemaining}</h4>
      <button
        onClick={startClock}
        // disabled is property from html while condtion is true then button not working that time
        disabled={isStart}
      >
        Start Game
      </button>
      <h1>Word Count : {count}</h1>
    </>
  );
}

export default App;
