import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Login() {
  const [isLogin, setLogin] = useState(false);

  function onHandleSubmit(e) {
    e.preventDefault();
    alert("Login Sukses");
  }

  function handleLogin() {
    setLogin((prev) => !prev);
  }

  return (
    <Container
      style={{ width: "50%" }}
      className="border border-secondary rounded p-4"
    >
      {isLogin ? (
        <>
          <h3 className="mb-3">Login Form</h3>
          <p>
            For Sign Up, Please Click{" "}
            <span>
              <a
                href="#"
                style={{ textDecoration: "none" }}
                onClick={handleLogin}
              >
                Here
              </a>
            </span>
          </p>
        </>
      ) : (
        <>
          <h3 className="mb-3">Sign Up Form</h3>
          <p>
            For Login, Please Click{" "}
            <span>
              <a
                href="#"
                style={{ textDecoration: "none" }}
                onClick={handleLogin}
              >
                Here
              </a>
            </span>
          </p>
        </>
      )}
      <Row>
        <Form onSubmit={(e) => onHandleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username or email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
