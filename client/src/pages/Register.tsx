import React, { useState } from "react";
import supabase from "../utils/supabase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [socioeconomicStatus, setSocioeconomicStatus] = useState(1);
  const [role, setRole] = useState("Aprendiz");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Registro en la autenticación de Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setMessage(`Error en autenticación: ${authError.message}`);
      return;
    }

    // Registro en la tabla `users`
    const { error: dbError } = await supabase.from("users").insert({
      id: authData.user?.id,
      email,
      name,
      socioeconomic_status: socioeconomicStatus,
      role, // Guardar el rol seleccionado
    });

    if (dbError) {
      setMessage(`Error al guardar en la base de datos: ${dbError.message}`);
    } else {
      setMessage(
        "¡Registro exitoso! Por favor, verifica tu correo electrónico."
      );
    }
  };

  return (
    <div className="register-container">
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Nombre Completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="socioeconomicStatus">Estrato Socioeconómico:</label>
          <select
            id="socioeconomicStatus"
            value={socioeconomicStatus}
            onChange={(e) => setSocioeconomicStatus(Number(e.target.value))}
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div>
          <label htmlFor="role">Rol:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="Aprendiz">Aprendiz</option>
            <option value="Funcionario">Funcionario</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
