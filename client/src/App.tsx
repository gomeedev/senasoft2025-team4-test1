import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import Events from "./pages/Events"; // Puedes activarlo cuando esté listo

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* futuras rutas */}
            {/* <Route path="/events" element={<Events />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
