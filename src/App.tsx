import React from "react";
import Wallet from "./routes/wallet/wallets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./routes/layout";
import Dashboard from "./routes/dashboard";
import Loans from "./routes/loans";
import Transactions from "./routes/Transactions";
import Audit from "./routes/Audit";
import Settings from "./routes/Settings";
import Staff from "./routes/staff";
import Users from "./routes/users";
import Payment from "./routes/payment";
import ErrorPage from "./routes/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="/loans" element={<Loans />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/users" element={<Users />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/audit-trail" element={<Audit />} />
          <Route path="/wallet" element={<Wallet />} index />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
