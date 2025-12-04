import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminSidebar } from '../admin/AdminSidebar';
import { Dashboard } from '../admin/Dashboard';
import { Students } from '../admin/Students';
import { Employers } from '../admin/Employers';
import { Gigs } from '../admin/Gigs';

export function AdminDashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar user={user} onLogout={onLogout} />
      
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/students" element={<Students user={user} />} />
          <Route path="/employers" element={<Employers user={user} />} />
          <Route path="/gigs" element={<Gigs user={user} />} />
        </Routes>
      </main>
    </div>
  );
}