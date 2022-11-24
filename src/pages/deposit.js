import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Deposit() {
  const navigate = useNavigate();
  const { user, setUser, users, transactions, setTransactions } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);


  function validateAmount(amount) {
    if (amount < 0) {
      alert("Error: Deposit amount can not be a negative value!");
      return false;
    }
    if (isNaN(amount)) {
      alert("Error: Deposit amount should be a number!");
      return false;
    }
    return true;
  }

  function DepositForm(props) {
    const [amount, setAmount] = useState("");
    function clearForm() {
      setAmount("");
    }

    function handleDeposit() {
      if (!user) {
        navigate("/login");
        return;
      }

      if (!validateAmount(Number(amount))) return;

      const newBalance = Number(user.balance) + Number(amount);
      for (let currentUser of users) {
        if (currentUser.email == user.email) {
          currentUser.balance = newBalance;
        }
      }
      setUser({ ...user, balance: newBalance });
      setTransactions([...transactions, {...user, type: 'deposit', balance: newBalance, amount}]);
      alert(`You have successfully deposited $${amount} into your account!`);
      clearForm();
    }

    return (
      <>
        {user && (
          <>
            <h4 className="success">
              {user.name} balance: ${user.balance}
            </h4>
            <br />
            Amount
            <br />
            <input
              type="input"
              className="form-control"
              placeholder="Enter amount"
              size="10"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleDeposit}
              disabled={!amount}
            >
              Deposit
            </button>
          </>
        )}
      </>
    );
  }

  return (
    <Card bg="primary" border="danger" style={{ width: "30rem" }}>
      <Card.Header>DEPOSIT</Card.Header>
      <Card.Img variant="top" src="deposit.svg" style={{ height: "10rem" }} />
      <Card.Body>
          <DepositForm />
      </Card.Body>
    </Card>
  );
}
