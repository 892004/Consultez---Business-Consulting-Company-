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
import Layout1 from "./User/layout/Layout1";
import Homepage1 from "./User/pages/Homepage1";
import Layout2 from "./User/layout/Layout2";
import Homepage2 from "./User/pages/Homepage2";
import Layout3 from "./User/layout/Layout3";
import Homepage3 from "./User/pages/Homepage3";
import Layout4 from "./User/layout/Layout4";
import Homepage4 from "./User/pages/Homepage4";
import Layout5 from "./User/layout/Layout5";
import Homepage5 from "./User/pages/Homepage5";
import Layout6 from "./User/layout/Layout6";
import Homepage6 from "./User/pages/Homepage6";
import Layout7 from "./User/layout/Layout7";
import Homepage7 from "./User/pages/Homepage7";
import Aboutus from "./User/pages/Aboutus";
import Faqs from "./User/pages/Faqs";
import Pricing from "./User/pages/Pricing";
import TeamList from "./User/pages/TeamList";
import TeamDetails from "./User/pages/TeamDetails";
import Testimonial2 from "./User/pages/Testimonial";
import Notfound from "./User/pages/Notfound";



function App() {
  return (
    <Routes>
      {/* User Side Rounting */}
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Homepage1 />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path = "/teamlist" element={<TeamList />} />
        <Route path = "/team-details" element={<TeamDetails />} />
        <Route path = "/testimonial" element={<Testimonial2 />} />
      </Route>

      <Route path = '/error' element={<Notfound />} />



      <Route path="/homepage2" element={<Layout2 />}>
        <Route index element={<Homepage2 />} />
      </Route>

      <Route path="/homepage3" element={<Layout3 />}>
        <Route index element={<Homepage3 />} />
      </Route>

      <Route path="/homepage4" element={<Layout4 />}>
        <Route index element={<Homepage4 />} />
      </Route>

      <Route path="/homepage5" element={<Layout5 />}>
        <Route index element={<Homepage5 />} />
      </Route>

      <Route path="/homepage6" element={<Layout6 />}>
        <Route index element={<Homepage6 />} />
      </Route>

      <Route path="/homepage7" element={<Layout7 />}>
        <Route index element={<Homepage7 />} />
      </Route>

      {/* Pages */}

      {/* Admin Side Routing */}
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
        <Route path="blogs" element={<Blogs />} />
        <Route path="team-members" element={<TeamMember />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="inquiries" element={<Inquiries />} />
      </Route>
    </Routes>
  );
}

export default App;
