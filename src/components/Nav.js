import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
let filter = false

function filterHandle() {
 filter = !filter
  return filter;
}
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <button onClick={filterHandle}>Greased</button>
    </div>
  );
};

export default Nav; 
export default filterHandle
