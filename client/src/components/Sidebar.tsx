import React from "react";
import { Link } from "react-router-dom";
import { FaMap, FaBicycle, FaCalendarAlt, FaUsers } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-900 p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-green-600">BikeShare</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 hover:text-green-500"><FaMap /> Dashboard</Link>
        <Link to="/bicycles" className="flex items-center gap-2 hover:text-green-500"><FaBicycle /> Bicicletas</Link>
        <Link to="/events" className="flex items-center gap-2 hover:text-green-500"><FaCalendarAlt /> Eventos</Link>
        <Link to="/users" className="flex items-center gap-2 hover:text-green-500"><FaUsers /> Usuarios</Link>
      </nav>
      <div className="mt-auto text-gray-500 text-sm">⚙️ Perfil</div>
    </div>
  );
};

export default Sidebar;
