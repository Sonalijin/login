import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loggin from "./Login";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        //width: "100%",
      }}
    >
      <Loggin />)
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
