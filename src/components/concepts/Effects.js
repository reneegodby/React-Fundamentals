// useEffect is, like state, just a Hook.  We are 'hook'-ing into changes to our component with a useEffect call
// Every useEffect call runs the function we pass it when there's a state change (there are some exceptions to this)
// You can write a conditional in your callback function or use the array dependency to handle when the effect runs
// They can return a cleanup function to avoid memory leaks.

import { useState, useEffect } from "react";

const Effects = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h2>Below are some important points regarding effects</h2>
        <ul>
          <li>
            They are triggered with state and props updates, as well as after
            initial render to the DOM
          </li>
          <li>
            Effects are used to trigger certain actions based upon changes to a
            component
          </li>
          <li>
            Effects can return cleanup functions, which can clean up timers
            using memory, listeners to outside API's, and other functions which
            may use system resources
          </li>
        </ul>
        <SampleEffect />
        <br />
        <SampleEffect />
      </div>
    </div>
  );
};

export default Effects;

const SampleEffect = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  
  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = window.setTimeout(() => {
        console.log("the timer expired", Date.now() / 1000);
        setTimerRunning(false);
      }, 2000);
      //when this component loads to the screen, it initializes our 'timerRunning' state variable.  Because this state variable is initialized, React runs the effect.
    }
    return () => {
      window.clearTimeout(timer);
      console.log("the timer was cleaned up", Date.now() / 1000);
    };
    //All of this happens when our component initially loads.  When we click on the button, we run the 'buttonHandler' function, which changes the value of 'timerRunning'.  Because there's a state change, our effect needs to run again.  However, before that effect will run, React runs the cleanup function we've provided.  This is responsible for the first message to the console because our cleanup function clears the timeout and console.logs a message. After the cleanup runs, our effect creates the timeout function which expires after 2 seconds.
  });
  //build another useEffect function (in the SampleEffect component) which will console.log() some message to the screen whenever there's a state change.  Make sure it tracks the 'timerRunning' variable as a dependency.
  useEffect(() => {
    console.log("this painting needs some happy trees");
  }, []);
  //empty array keeps it from looping or trigger a value
  let buttonHandler = () => {
    if (!timerRunning) {
      setTimerRunning(true);
    }
  };

  return (
    <div style={{ border: "1px dashed black" }}>
      <h2>This component demos an effect</h2>
      <button onClick={buttonHandler}>
        Click me to start an effect in the console
      </button>
    </div>
  );
};
//1) When we toggle the button, that causes a state change.  When there's a state change, our cleanup function runs, then the effect processes (makes a new timer).

// 2) When 2 seconds expire, we process the timeout function, which console.logs to the screen.  This timeout function also initiates a state change, which leads us to the final phase:

// 3) The cleanup function runs again before our effect re-fires.  This cleanup function shows us the 3rd message in the console, and it's the second cleanup our component fires.
