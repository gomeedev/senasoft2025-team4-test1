import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Bicycle = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  is_available: boolean;
};

const Dashboard: React.FC = () => {
  const [bicycles, setBicycles] = useState<Bicycle[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/bicycles/")
      .then(res => res.json())
      .then(data => setBicycles(data))
      .catch(err => console.error("Error al obtener bicicletas:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Bienvenido Admin</p>

      <div className="flex gap-4 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Publicar Evento</button>
        <button className="bg-green-200 text-green-900 px-4 py-2 rounded">Ver Finanzas</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Ubicación de Bicicletas</h2>
      <div className="h-[400px] w-full rounded overflow-hidden shadow">
        <MapContainer
          center={[4.710989, -74.072092]}  // Bogotá como ejemplo
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {bicycles.map(b => (
            <Marker key={b.id} position={[b.lat, b.lng]}>
              <Popup>
                <strong>{b.name}</strong><br/>
                {b.is_available ? "Disponible" : "No disponible"}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
