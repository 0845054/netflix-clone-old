import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

/*
https://www.figma.com/design/1Mf6jFMoOrqB2vlEMGQagr/Netflix-Design-System-2024-(Website-ver.)-%F0%9F%8E%A5-(Community)?node-id=212-22353&t=zdBpZKA4ewlY1zO2-0
*/

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
