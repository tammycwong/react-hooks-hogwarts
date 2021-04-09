import React, {useState} from "react";
import Nav, filterHandle from "./Nav";
import HogsDisplay from "./HogsDisplay";
import hogs from "../porkers_data";

const [filtered, setFiltered] = useState(false)
function App() {
  
  return (
    <div className="App">
      <Nav />
      <HogsDisplay hogs={hogs}/>
    </div>
  );
}

export default App;
