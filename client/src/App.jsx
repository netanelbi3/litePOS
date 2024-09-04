import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuSideBar from './components/MenuSideBar';
import Home from './pages/Home';
import Inventory from "./pages/Inventory";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";

function App() {

    return (
      <Router>
        <div className="d-flex">
          <MenuSideBar />
          <div className="content-container p-4">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  
}

export default App
