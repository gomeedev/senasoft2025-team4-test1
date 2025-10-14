import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* futuras rutas */}
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
