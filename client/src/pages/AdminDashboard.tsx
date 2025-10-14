import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <h1>Dashboard de Administrador</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default AdminDashboard;
