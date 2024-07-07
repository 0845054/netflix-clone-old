import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

/*
https://www.figma.com/design/iVp8SQeNEOMbROZucZyfGs/Netflix-Clone-(Community)?node-id=101-323&t=00vfQtQRX1B8dTyF-0
*/

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
