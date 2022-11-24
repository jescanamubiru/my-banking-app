import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { user, setUser, users, setUsers } = useContext(UserContext);

  function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function clearForm() {
      setEmail("");
      setPassword("");
    }

    function handleLogin() {
      const loginUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (loginUser) {
        setUser(loginUser);
        navigate("/deposit/");
      } else {
        alert("Incorrect email or password!");
      }
    }

    function goToCreateAccount() {
      navigate(`/CreateAccount/`);
    }

    return (
      <>
        Email
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <br />
        Password
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <div>
          <button
            type="submit"
            className="btn btn-light float-left"
            onClick={handleLogin}
            disabled={email.trim().length < 2 && password.trim().length == 0}
          >
            Login
          </button>
          <button
            className="btn btn-light float-right"
            onClick={goToCreateAccount}
          >
            Create Account
          </button>
        </div>
      </>
    );
  }
  return (
    <Card bg="success" border="success" style={{ width: "20rem" }}>
      <Card.Img variant="top" src="bicon.svg" />
      <Card.Header>Account Login </Card.Header>
      <Card.Body>
        <LoginForm />
      </Card.Body>
    </Card>
  );
}
