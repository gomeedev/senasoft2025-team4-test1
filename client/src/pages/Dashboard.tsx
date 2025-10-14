import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 📝 Definimos el tipo de dato para TypeScript
type Bike = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  is_available: boolean;
};

const Dashboard: React.FC = () => {
  // 🟡 1. Estado donde guardaremos las bicicletas
  const [bikeLocations, setBikeLocations] = useState<Bike[]>([]);

  // 🟢 2. useEffect para cargar datos del backend cuando se monta el componente
  useEffect(() => {
    fetch("http://localhost:8000/api/bikes/")
      .then((res) => res.json())
      .then((data) => setBikeLocations(data))
      .catch((err) => console.error("Error al cargar bicicletas:", err));
  }, []);

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome back, Admin</p>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Publish New Event
        </button>
        <button className="bg-green-200 text-green-900 px-4 py-2 rounded">
          View Financial Summary
        </button>
      </div>

      {/* Mapa con las bicicletas */}
      <h2 className="text-xl font-semibold mb-2">Bike Locations</h2>
      <div className="h-[400px] w-full rounded overflow-hidden shadow">
        <MapContainer
          center={[4.710989, -74.072092]} // 👈 Coordenadas iniciales (Bogotá por ejemplo)
          zoom={12}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {bikeLocations.map((bike) => (
            <Marker key={bike.id} position={[bike.lat, bike.lng]}>
              <Popup>
                <strong>{bike.name}</strong><br />
                {bike.is_available ? "Disponible ✅" : "No disponible ❌"}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
