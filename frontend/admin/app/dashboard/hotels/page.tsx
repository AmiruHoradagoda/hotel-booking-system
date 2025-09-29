"use client";
import { useState } from "react";

type Hotel = {
  id: number;
  name: string;
  description: string;
  status: "Active" | "Inactive";
  rooms: number;
};
export default function HotelPage() {
  const [hotels, setHotels] = useState<Hotel[]>([
    {
      id: 1,
      name: "Hotel 1",
      description: "description 1",
      status: "Active",
      rooms: 10,
    },
    {
      id: 2,
      name: "Hotel 2",
      description: "description 2",
      status: "Inactive",
      rooms: 50,
    },
    {
      id: 3,
      name: "Hotel 3",
      description: "description 3",
      status: "Active",
      rooms: 30,
    },
    {
      id: 4,
      name: "Hotel 4",
      description: "description 4",
      status: "Inactive",
      rooms: 5,
    },
  ]);

  function handleDelete(id: number) {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  }

  return (
    <div className=" h-screen bg-gray-100 flex flex-col items-center justify-start">
      <h2 className="text-2xl font-bold mb-6">Hotels</h2>

      <div className="w-full max-w-5xl mb-4 flex justify-end">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          + Add Hotel
        </button>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Hotel Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Rooms</th>
              <th className="px-4 py-3">Tools</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={hotel.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{hotel.name}</td>
                <td className="px-4 py-3">{hotel.description}</td>
                <td className="px-4 py-3">{hotel.status}</td>
                <td className="px-4 py-3">{hotel.rooms}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(hotel.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
            {hotels.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No Result Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
