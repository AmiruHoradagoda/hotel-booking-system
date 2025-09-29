"use client";

import { useState } from "react";

type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
};
export default function UserPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "john_doe", firstName: "John", lastName: "Doe" },
    { id: 2, username: "jane_smith", firstName: "Jane", lastName: "Smith" },
    { id: 3, username: "alice_jones", firstName: "Alice", lastName: "Jones" },
    { id: 4, username: "bob_brown", firstName: "Bob", lastName: "Brown" },
    {
      id: 5,
      username: "charlie_black",
      firstName: "Charlie",
      lastName: "Black",
    },
  ]);

  function handleDelete(id:number) {
    //delete user logic
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  }

  return (
    <div className=" h-screen bg-gray-100 flex flex-col items-center justify-start">
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.firstName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
