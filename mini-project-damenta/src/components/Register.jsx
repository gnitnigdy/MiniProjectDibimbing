import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Register({ onLoginSuccess, onLoginRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setIsError("");

    try {
      const response = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("login sukses");
        onLoginSuccess(data.token);
      } else {
        setIsError(data.error);
        throw data.error;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container
      style={{ width: "50%" }}
      className="border border-secondary rounded p-4"
    >
      <h3 className="mb-3">Sign Up Form</h3>
      <p>
        For Login, Please Click{" "}
        <span>
          <a
            href="#"
            style={{ textDecoration: "none" }}
            onClick={onLoginRegister}
          >
            Here
          </a>
        </span>
      </p>
      {/* eve.holt@reqres.in     cityslicka */}
      <Row>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Username or email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {isError && <p style={{ color: "red" }}>{isError}</p>}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
