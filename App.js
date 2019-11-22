import React from "react";
import "./App.css";
import Gaga from "./Convert";

const App = () => {
  var msn=9000000;
  return (
    <div>
      
      <Gaga  props={msn} />
    </div>
  );
};

export default App;
