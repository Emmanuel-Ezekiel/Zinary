import React from "react";
import Wallet from "./routes/wallet/wallets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./routes/layout";
import Dashboard from "./routes/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="/wallet" element={<Wallet />} index />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
