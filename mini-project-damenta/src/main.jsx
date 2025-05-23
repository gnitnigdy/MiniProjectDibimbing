import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Usertable from "./components/Usertable.jsx";
import DetailsUser from "./components/DetailsUser.jsx";
import NewLogin from "./components/NewLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Usertable /> */}
    {/* <NewLogin></NewLogin> */}
    <App />
    {/* <DetailsUser></DetailsUser> */}
  </StrictMode>
);
