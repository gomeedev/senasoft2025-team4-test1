import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard"; // Puedes activarlo cuando esté listo
// import Events from "./pages/Events"; // Futuras rutas

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* futuras rutas */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

