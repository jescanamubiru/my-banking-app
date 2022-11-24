import React, { useState, createContext } from "react";
import { Card } from "react-bootstrap";

export const UserContext = createContext(null);

export function MyProvider(props) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers, transactions, setTransactions }}>
      {props.children}
    </UserContext.Provider>
  );
}
