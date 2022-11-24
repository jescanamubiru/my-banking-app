import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateAccount from "./pages/create-account";
import Login from "./pages/login";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";
import AllData from "./pages/all-data";
import NavBar from "./navbar";
import { MyProvider } from "./context";

export default function App() {
  return (
    <HashRouter>
      <div>
        <MyProvider>
          <NavBar />
          <div className="container" style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/CreateAccount/" element={<CreateAccount />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/deposit/" element={<Deposit />} />
              <Route path="/withdraw/" element={<Withdraw />} />
              <Route path="/alldata/" element={<AllData />} />
            </Routes>
          </div>
        </MyProvider>
      </div>
    </HashRouter>
  );
}