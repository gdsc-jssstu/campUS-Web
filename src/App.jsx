import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        {!currentUser && <Route path="/signup" element={<Signup />} />}
        {!currentUser && <Route path="/login" element={<Login />} />}
        {currentUser && <Route path="/profile" element={<Profile />} />}
      </Routes>
      <ToastContainer position="top-right" />
    </>
  );
}
