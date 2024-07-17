import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./constants.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cover from "./components/cover/Cover";
import ProfilePage from "./components/profilePage/ProfilePage";
import Landing from "./components/landing/Landing";
import SignIn from "./components/signIn/SignIn";
import AccountHome from "./components/accountHome/AccountHome";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="cover" element={<Cover />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="accountHome" element={<AccountHome />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
