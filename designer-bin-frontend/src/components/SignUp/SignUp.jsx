import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import {
//   auth,
//   createUserProfileDocument,
// } from "../../Firebase/firebase.utils.js";

const SignUp = () => {
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      console.log("passwords don't match");
      return;
    }
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     console.log(result);
    //     setForm({});
    //   })
    //   .catch((error) => console.log(error));
    // try {
    // const { user } = await auth.createUserWithEmailAndPassword(
    //   email,
    //   password
    // );
    // await createUserProfileDocument(user, { displayName });
    // setForm({});
    // }
    //  catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className='Sign center-align'>
      <h3 className='title'>Don't Have an Account?</h3>
      <p className='subtitle'>Sign Up with your email and password</p>
      <Form>
        <Form.Group controlId='displayNameUp'>
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type='text'
            className='input'
            placeholder='Display Name'
            name='displayName'
            value={form.displayName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='EmailUp'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email Address'
            className='input'
            name='email'
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='PasswordUp'>
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
        <Form.Group controlId='ConfirmPasswordUp'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            className='input'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          className='mr-2 button'
          variant='outline-light'
          onSubmit={handleSubmit}
          type='submit'>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
