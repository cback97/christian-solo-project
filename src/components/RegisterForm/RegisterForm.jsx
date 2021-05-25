import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  //local state variables to capture input field data for DB
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        first_name: fName,
        last_name: lName,
        phone: phone,
        email: email,
        dob: dob
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="first name">
          First Name:
          <input
            type="text"
            name="first name"
            value={fName}
            required
            onChange={(event) => setFName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="last name">
          Last Name:
          <input
            type="text"
            name="last name"
            value={lName}
            required
            onChange={(event) => setLName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="phone">
          Phone:
          <input
            type="tel"
            name="phone"
            value={phone}
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="Date of Birth">
          DOB:
          <input
            type="date"
            name="dob"
            value={dob}
            required
            onChange={(event) => setDob(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
