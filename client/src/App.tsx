import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import supabase from "./utils/supabase";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("users").select("role").eq("id", user.id).single();
      }
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  const ProtectedRoute = ({
    children,
    allowedRoles,
  }: {
    children: ReactNode;
    allowedRoles: string[];
  }) => {
    const [currentRole, setCurrentRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUserRole = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          const { data: userData, error } = await supabase
            .from("users")
            .select("role")
            .eq("id", user.id)
            .single();

          if (!error) {
            setCurrentRole(userData.role);
          }
        }
        setLoading(false);
      };

      fetchUserRole();
    }, []);

    if (loading) {
      return <p>Cargando...</p>;
    }

    if (!currentRole || !allowedRoles.includes(currentRole)) {
      return <p>No tienes permiso para acceder a esta página.</p>;
    }

    return <>{children}</>;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Bienvenido</h1>
                <Link
                  to="/register"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Registrarme
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ml-4"
                >
                  Iniciar Sesión
                </Link>
              </div>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["Aprendiz", "Funcionario"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
