"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  function handleLogout() {
    router.push("/");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full flex justify-between px-8 py-5 bg-blue-600 text-white shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <nav className="space-x-6">
          <Link href="/dashboard" className="hover:underline">
            Home
          </Link>
          <Link href="/dashboard/bookings" className="hover:underline">
            Bookings
          </Link>
          <Link href="/dashboard/users" className="hover:underline">
            Users
          </Link>
          <Link href="/dashboard/hotels" className="hover:underline">
            Hotels
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="ml-6 px-3 py-1 bg-white text-blue-600 hover:bg-gray-100"
        >
          Logout
        </button>
      </header>
      <main className="flex:1 max-w-6xl mx-auto w-full px-6 py-8">
        {children}
      </main>
      <footer className="w-full bg-gray-200 text-center py-4 mt-auto">
        <p className="text-sm text-gray-700">
          {new Date().getFullYear()} My Dashboard
        </p>
      </footer>
    </div>
  );
}
