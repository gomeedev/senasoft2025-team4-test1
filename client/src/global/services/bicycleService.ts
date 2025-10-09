// Aqui es establece una comunicación con el backend o servicios externos como supabase - no deberia tener mas responsabilidades
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export interface ConductorUpdated {
  id_usuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono?: string;
  foto_perfil?: string;
}


export const updateFotoPerfil = async (
  id: number,
  file: File,
  token: string
): Promise<ConductorUpdated> => {
  const formData = new FormData();
  formData.append("foto", file);

  const url = `${API_BASE_URL}/conductores/${id}/foto`;
  console.log("URL de actualización de foto:", url); 
  console.log("Archivo a subir:", file.name); 

  const response = await axios.patch<ConductorUpdated>(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("Respuesta del servidor (Foto):", response.data);
  return response.data;
};