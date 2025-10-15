import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Dashboard: React.FC = () => {
  // ubicaciones de prueba de bicicletas
  const bikeLocations = [
    { id: 1, lat: 37.7749, lng: -122.4194, name: "Bike 1 - San Francisco" },
    { id: 2, lat: 37.8044, lng: -122.2712, name: "Bike 2 - Oakland" },
  ];

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome back, Admin</p>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Publish New Event</button>
        <button className="bg-green-200 text-green-900 px-4 py-2 rounded">View Financial Summary</button>
      </div>

      {/* Map Section */}
      <h2 className="text-xl font-semibold mb-2">Bike Locations</h2>
      <div className="h-[400px] w-full rounded overflow-hidden shadow">
        <MapContainer center={[37.7749, -122.4194]} zoom={12} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {bikeLocations.map(bike => (
            <Marker key={bike.id} position={[bike.lat, bike.lng]}>
              <Popup>{bike.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
