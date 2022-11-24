import React from "react";
import { Card } from "react-bootstrap";

const box = {
  fontSize: "30px",
  textAlign: "center",
};
const shadow = {
  background: "#4fcc77",
  boxShadow: "1px 1px 1px 1px #cccd",
};

export default function Home() {
  return (
    <Card bg="Info" border="info" style={{ width: "30rem" }}>
      <Card.Title style={{ ...box, ...shadow }}>
        {" "}
        Welcome MIT Bank
      </Card.Title>
      <Card.Img variant="top" src="bank.svg" />
    </Card>
  );
}
