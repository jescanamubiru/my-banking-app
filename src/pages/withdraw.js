import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Withdraw() {
  const { user, setUser, users, transactions, setTransactions } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  function WithdrawForm(props) {
    const [amount, setAmount] = useState("");

    function validateAmount(amount) {
      if (amount < 0) {
        alert("Error: Withdraw amount can not be a negative value!"); //admin
        return false;
      }
      if (isNaN(amount)) {
        alert("Error: Withdraw amount should be a number!"); //admin
        return false;
      }
      return true;
    }
    function clearForm() {
      setAmount("");
    }

    function checkOverdraft(userBala, amount) {
      if (userBala < amount) {
        alert(`Overdraft: You do not have sufficient balance to withdraw $${amount}!`);
        return false;
      }
      return true;
    }

    function handleWithdraw() {
      if (!user) {
        navigate("/login");
        return;
      }

      if (!validateAmount(Number(amount))) return;
      if (!checkOverdraft(user.balance, Number(amount))) return;

      const newBalance = Number(user.balance) - Number(amount);
      for (let currentUser of users) {
        if (currentUser.email == user.email) {
          currentUser.balance = newBalance;
        }
      }
      setUser({ ...user, balance: newBalance });
      setTransactions([...transactions, {...user, type: 'withdraw', balance: newBalance, amount}]);
      alert(`You have successfully withdrawn $${amount} from your account!`);
      console.log('tx>>>', transactions);
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
              type="number"
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
              onClick={handleWithdraw}
              disabled={!amount}
            >
              Withdraw
            </button>
          </>
        )}
      </>
    );
  }
  return (
    <Card bg="info" border="info" style={{ width: "30rem" }}>
      <Card.Header>WITHDRAW</Card.Header>
      <Card.Img variant="top" src="withdraw.svg" style={{ height: "10rem" }} />
      <Card.Body>
        <WithdrawForm />
      </Card.Body>
    </Card>
  );
}
