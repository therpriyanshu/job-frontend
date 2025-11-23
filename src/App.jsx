import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import JobDetails from "./pages/JobDetails";
import AppliedJobs from "./pages/AppliedJobs";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import PostJob from "./pages/PostJob";
import EditJob from "./pages/EditJob";
import AdminDashboard from "./pages/AdminDashboard";
import RecruiterRegister from "./pages/RecruiterRegister";
import RecruiterLogin from "./pages/RecruiterLogin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/applied" element={<AppliedJobs />} />

        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/recruiter/post-job" element={<PostJob />} />
        <Route path="/recruiter/edit/:id" element={<EditJob />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/recruiter/login" element={<RecruiterLogin />} />
        <Route path="/recruiter/register" element={<RecruiterRegister />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
