import React from "react";
import { FaHome, FaBicycle, FaUsers, FaCalendarAlt, FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 dark:bg-gray-900 p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-green-600 mb-8">BikeShare</h2>
        <nav className="flex flex-col gap-4">
          <Link className="flex items-center gap-2 text-gray-700 hover:text-green-500" to="/"> <FaHome /> Home </Link>
          <Link className="flex items-center gap-2 text-gray-700 hover:text-green-500" to="/events"> <FaCalendarAlt /> Events </Link>
          <Link className="flex items-center gap-2 text-gray-700 hover:text-green-500" to="/bikes"> <FaBicycle /> Bikes </Link>
          <Link className="flex items-center gap-2 text-gray-700 hover:text-green-500" to="/users"> <FaUsers /> Users </Link>
          <Link className="flex items-center gap-2 text-gray-700 hover:text-green-500" to="/finances"> <FaMoneyBill /> Finances </Link>
        </nav>
      </div>
      <div className="text-gray-500 text-sm">⚙️ Profile</div>
    </div>
  );
};

export default Sidebar;
