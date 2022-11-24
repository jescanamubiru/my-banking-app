import React, { useContext } from "react";
import {
  OverlayTrigger,
  Tooltip,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { UserContext } from "./context";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { user, setUser, users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate('/login/');
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">MIT Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <OverlayTrigger
                placement={"bottom"}
                key="home"
                overlay={<Tooltip>Go to home screen</Tooltip>}
              >
                <Nav.Link href="#/">Home</Nav.Link>
              </OverlayTrigger>
              {!user ? (
                <OverlayTrigger
                  placement={"bottom"}
                  key="Login"
                  overlay={<Tooltip>Login to your account</Tooltip>}
                >
                  <Nav.Link href="#/login/">Login</Nav.Link>
                </OverlayTrigger>
              ) : (
                <>
                  <OverlayTrigger
                    placement={"bottom"}
                    key="deposit"
                    overlay={<Tooltip>deposit money</Tooltip>}
                  >
                    <Nav.Link href="#/deposit/">Deposit</Nav.Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement={"bottom"}
                    key="Withdraw"
                    overlay={<Tooltip>Withdraw money</Tooltip>}
                  >
                    <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement={"bottom"}
                    key="alldata"
                    overlay={<Tooltip>view transactions</Tooltip>}
                  >
                    <Nav.Link href="#/alldata/">All Data</Nav.Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement={"bottom"}
                    key="logout"
                    overlay={<Tooltip>view transactions</Tooltip>}
                  >
                    <Nav.Link onClick={logout}>
                      Logout
                    </Nav.Link>
                  </OverlayTrigger>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
