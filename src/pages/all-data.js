import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context";

export default function AllData() {
  const { transactions } = useContext(UserContext);

  function TransactionList(props) {
    return (
      <>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.name}</td>
                <td>{transaction.email}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <Card bg="Info" border="info">
      <Card.Header>Account Transactions</Card.Header>
      <Card.Img variant="top" src="transact.svg" style={{ height: "10rem" }} />
      <Card.Body>
        <TransactionList />
      </Card.Body>
    </Card>
  );
}
