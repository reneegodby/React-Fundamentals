//  A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. 



import { useState } from "react";
//useState() is a new hook that's part of the React API. 
const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>UseState is unique to Functional Components</dt>
          <dd>Class components have a separate means of using and changing state</dd>
          <dt>useState uses array destructuring</dt>
          <dd>UseState provides a state variable and a setState function</dd>
          <dt>useState is a Hook</dt>
          <dd>useState is a hook baked into React</dd>
          <dt>Triggers re-renders</dt>
          <dd>
            Like with props changes, changing the state of a component
            re-renders the whole component
          </dd>
        </ul>
        <StateExample />
      </div>
    </div>
  );
};

export default State;
//whenever you declare state variables and call useState, you need to do so at the 'top level' of your component.  Don't bury useState within functions or properties.  The best place to put useState is at the very top of your component
function StateExample() {
  const [text, setText] = useState("initial value"); //changes value of thing without reloading pg/backdoor to changing parent component by changing child component
  const [likeNum, setLikeNum] = useState(0); //adds like button
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {/* We are now completing a circuit--when there's a change, we initiate a state change with our setText function.  By updating our state variable, the component re-fires to the DOM.  While re-firing, the new value of our state variable is read. The onChange event handler will automatically pass the event that triggered the onChange event handler to the callback function (the callback function being the e => setText(...) in this case).  We want to grab that event so we can set a new value for our state variable. */}
      <br />
      <br />
      <img
        style={{ width: "100px", height: "100px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
        onClick={() => setLikeNum(likeNum + 1)}
      />
      <span>{likeNum}</span>
      {/* we use a callback function with the 'setLikeNum' function to handle updating our state variable.  Finally, we use the value of the likeNum state variable to display in our span tag. */}
    </div>
  );
}
// a) The user inputs to the input field

// b) Our event handler initiates a state change to our 'text' variable

// c) Because we initiated a state change, our component re-fires with the new value of the text variable

// This entire process is called '2-way binding'.  Our state variable value is determined by the input field, and the input field value is determined by the state variable value.  This is a core concept in React--all (changeable) representational data needs to be controlled by the component, not just left free to change in the DOM.