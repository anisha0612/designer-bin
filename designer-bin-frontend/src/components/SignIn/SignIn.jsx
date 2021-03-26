import React, { useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { signInWithGoogle } from "../../Firebase/firebase.utils.js";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({});
  };

  return (
    <div className='Sign center-align'>
      <h3 className='title'>Already Have an Account?</h3>
      <p className='subtitle'>Sign In with your email and password</p>
      <Form>
        <Form.Group controlId='EmailIn'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email Address'
            className='input'
            name='email'
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='PasswordIn'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            className='input'
            placeholder='Password'
            name='password'
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>
        <ButtonGroup className='Sign-buttons'>
          <Button
            className='ml-2 mr-5 p-2 button'
            variant='outline-light'
            type='submit'
            onSubmit={handleSubmit}>
            Sign In
          </Button>
          <Button
            onClick={signInWithGoogle}
            className='button'
            id='google-button'
            variant='outline-light'
            type='submit'>
            Sign in with Google
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default SignIn;
