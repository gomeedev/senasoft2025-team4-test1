import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      const { data: userData, error } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching user role:", error);
        navigate("/login");
        return;
      }

      setRole(userData.role);
      setLoading(false);
    };

    fetchUserRole();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="user-dashboard">
      <h1>Dashboard de {role}</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default UserDashboard;
