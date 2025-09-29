"use client";
import { useState } from "react";

type Booking = {
  id: number;
  date: string;
  customerName: string;
  amount: string;
  roomsCount: string;
  details: object;
};
export default function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      date: "2023-10-01",
      customerName: "John Doe",
      amount: "$200",
      roomsCount: "2",
      details: {},
    },
    {
      id: 2,
      date: "2023-10-05",
      customerName: "Jane Smith",
      amount: "$150",
      roomsCount: "1",
      details: {},
    },
    {
      id: 3,
      date: "2023-10-10",
      customerName: "Alice Johnson",
      amount: "$300",
      roomsCount: "3",
      details: {},
    },
  ]);

  function handleDelete(id: number) {
    setBookings(bookings.filter((user) => user.id !== id));
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 ">
      <h2 className="mb-6 text-2xl font-bold">Bookings</h2>

      <div className="w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead className="text-white bg-blue-600">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Customer name</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Room Count</th>
              <th className="px-4 py-3">Tools</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{booking.date}</td>
                <td className="px-4 py-3">{booking.customerName}</td>
                <td className="px-4 py-3">{booking.amount}</td>
                <td className="px-4 py-3">{booking.roomsCount}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
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
