import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Register({
  onRegisterSuccess,
  onLoginRegister,
  isSuccessRegister,
  handleSuccessRegistration,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    setIsError("");

    try {
      const response = await fetch(`https://reqres.in/api/register`, {
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
        console.log("register sukses");

        handleSuccessRegistration();

        onRegisterSuccess(data.token);
        setTimeout(() => {
          onLoginRegister();
        }, 3000);
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
        <Form onSubmit={handleRegisterSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email address"
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
          {isSuccessRegister && (
            <p style={{ color: "green" }}>
              Successful Registration! You will automatically redirected to
              Login.
              <br />
              Please wait. . .
            </p>
          )}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
