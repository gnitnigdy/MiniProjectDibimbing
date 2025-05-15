import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
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
}

export default App;
