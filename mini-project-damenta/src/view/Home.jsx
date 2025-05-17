import { useNavigate } from "react-router-dom";
import Usertable from "./../components/Usertable";
import Button from "react-bootstrap/Button";
export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    // <div>
    //   <h1>Selamat Datang di Home!</h1>
    //   <button onClick={handleLogout}>Logout</button>
    // </div>
    <>
      <Usertable />
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}
