import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Login() {
  function onHandleSubmit(e) {
    e.preventDefault();
    alert("Login Sukses");
  }

  return (
    <Container className="border border-secondary rounded p-4">
      <h3 className="mb-3">Login Form</h3>
      <Row>
        <Form onSubmit={(e) => onHandleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username or email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
