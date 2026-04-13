import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Admin/pages/Login";
import ProtectedRoute from "./Admin/layout/ProtectedRoutes";
import Dashboard from "./Admin/pages/Dashboard";
import AdminLayout from "./Admin/layout/AdminLayout";
import Service from "./Admin/pages/Service";
import Blogs from "./Admin/pages/Blogs";
import TeamMember from "./Admin/pages/TeamMember";
import Testimonials from "./Admin/pages/Testimonials";
import Inquiries from "./Admin/pages/Inquiries";
import User from "./Admin/pages/User";
import Category from "./Admin/pages/Category";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/admin/login" element={<Login />} />

      {/*Protected  Admin Layout */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* 🔥 default redirect */}
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="categories" element={<Category />} />
        <Route path="services" element={<Service />} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="team-members" element={<TeamMember />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="inquiries" element={<Inquiries />} />
      </Route>
    </Routes>
  );
}

export default App;