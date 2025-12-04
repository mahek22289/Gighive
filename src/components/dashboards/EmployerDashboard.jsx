import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { io } from "socket.io-client";

import EmployerSidebar from "../employer/EmployerSidebar";
import PostGig from "../employer/PostGig";
import Applications from "../employer/Applications";
import Messages from "../employer/Messages";
import Dashboard from "../employer/Dashboard";
import Plans from "../employer/Plans";

const socket = io("http://localhost:5001"); // ✅ match your backend port

function EmployerDashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <EmployerSidebar user={user} onLogout={onLogout} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/employer-dashboard/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard user={user} socket={socket} />} />
          <Route path="/post-gig" element={<PostGig user={user} socket={socket} />} />
          <Route path="/applications" element={<Applications user={user} socket={socket} />} />
          <Route path="/messages/:userId" element={<Messages user={user} socket={socket} />} />
          <Route path="/plans" element={<Plans user={user} socket={socket} />} />
        </Routes>
      </main>
    </div>
  );
}

export default EmployerDashboard;
