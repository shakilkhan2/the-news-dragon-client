import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
const {signIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/"

const handleLogIn = event =>{
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password)

  signIn (email, password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    form.reset();
    navigate(from, {replace: true})
  })
  .catch(error => {
    console.log(error)
  })
}

  return (
    <div className="mt-4  bg-warning w-50 mx-auto py-5 rounded">
      <h3 className="text-center">Login your account</h3>
      <hr className="w-75 mx-auto my-5" />
      <Form onSubmit={handleLogIn} className="w-50 mx-auto shadow-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button className="w-100" variant="secondary" type="submit">
          Login
        </Button>
        <p>
          <small>
            New to here? <Link to="/register">Register</Link>
          </small>
        </p>
      </Form>
    </div>
  );
};

export default Login;
