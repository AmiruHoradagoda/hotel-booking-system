"use client";
import { useRouter } from "next/navigation";
import LineChart from "./components/LineChart";
export default function DashboardPage() {
  const router = useRouter();

  function handleLogout() {
    router.push("/");
  }

  return (
    <div className="flex items-start justify-start p-6 space-y-6 bg-gray-100">
      <div className="w-full max-w-sm min-h-screen p-6 space-y-4 bg-white shadow rounded-xl">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Logout
          </button>
          <p>Welcome to your dashboard</p>
        </div>
      </div>
      <div className="w-full max-w-4xl px-6 bg-white shadow rounded-xl">
        <LineChart title={"Trending Hotels in Year"}/>
      </div>
    </div>
  );
}
