import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  const { user, setUser, users, setUsers } = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      alert("Error: Please provide " + label + " value!");
      return false;
    } else if (label === "email" && !field.includes("@")) {
      alert("Error: Please provide valid email address!");
      return false;
    } else if (label === "password") {
      if (field.length < 5) {
        alert("Error: Password should be at least 5 characters!");
        return false;
      }
    }
    return true;
  }

  function CreateForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function clearForm() {
      setName("");
      setEmail("");
      setPassword("");
    }

    function handleCreate() {
      if (user) {
        navigate('/deposit/');
      }

      if (!validate(name, "name")) return;
      if (!validate(email, "email")) return;
      if (!validate(password, "password")) return;

      const newUser = {
        name: name,
        email: email,
        password: password,
        balance: 0,
        type: "-",
      };
      setUsers([...users, newUser]);
      alert(`Account successfully created for ${name}`);

      navigate('/login/');
    }
    return (
      <>
        Name
        <br />
        <input
          type="input"
          className="form-control"
          id="name"
          size="15"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <br />
        Email address
        <br />
        <input
          type="input"
          className="form-control"
          id="email"
          size="15"
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
          id="password"
          size="15"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <button
          type="submit"
          className="btn btn-light"
          onClick={handleCreate}
          disabled={!name && !email && !password}
        >
          Create Account
        </button>
      </>
    );
  }
  return (
    <Card bg="primary" border="info" style={{ width: "40rem" }}>
      <Card.Header>CREATE ACCOUNT</Card.Header>
      <Card.Img
        variant="top"
        src="createicon.svg"
        style={{ height: "10rem" }}
      />
      <Card.Body>
          <CreateForm />
      </Card.Body>
    </Card>
  );
}
