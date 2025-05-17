import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./view/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./view/Login";

function App() {
  /*
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onLoadFetchData = async () => {
      const response = await fetch("https://reqres.in/api/users?page=", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });

      const data = await response.json();
      console.log(data.data);
    };
    onLoadFetchData();
  }, []);

  return <div>Hello World</div>;
  */

  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
