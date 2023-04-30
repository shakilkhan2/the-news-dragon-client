import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmedPassword = form.confirmed.value;

    console.log(name, email, password, confirmedPassword);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = event => {
     setAccepted(event.target.checked)
  }



  return (
    <div className="mt-4 bg-warning w-50 mx-auto py-5 rounded mb-4">
      <h3 className="text-center">Register your account</h3>
      <div className="my-3">
        <Form.Text className="text-muted ">
         <p className="text-center"> <small>We'll never share your email with anyone else.</small></p>
        </Form.Text>
        <hr className="w-75 mx-auto " />
      </div>

      <Form onSubmit={handleRegister} className="w-50 mx-auto shadow-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
            name="confirmed"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group onClick={handleAccepted} className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={<>Accept <Link to="/terms">Terms and Conditions.</Link> </>} />
        </Form.Group>

        <Button disabled={!accepted} className="w-100" variant="secondary" type="submit">
          Register
        </Button>
        <p>
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </p>
      </Form>
    </div>
  );
};

export default Registration;
