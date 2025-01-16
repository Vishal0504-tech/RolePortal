import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import CreateUserPage from "./components/CreateUserPage/CreateUserPage";
import StudentLoginSignup from "./components/StudentLoginSignup/StudentLoginSignup";
import StaffLoginSignup from "./components/StaffLoginSignup/StaffLoginSignup";
import HODLoginSignup from "./components/HODLoginSignup/HODLoginSignup";
import AdminLoginSignup from "./components/AdminLoginSignup/AdminLoginSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/student-login-signup" element={<StudentLoginSignup />} />
        <Route path="/staff-login-signup" element={<StaffLoginSignup />} />
        <Route path="/hod-login-signup" element={<HODLoginSignup />} />
        <Route path="/admin-login-signup" element={<AdminLoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
