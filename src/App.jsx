import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useAuth } from "./context/AuthContext" 
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import { ToastContainer } from "react-toastify"
import Login from "./pages/Login"
import Home from "./pages/Home"

export default function App() {

  const { currentUser } = useAuth()

  return (
    <>
    <Navbar />
    <Routes>
      {!currentUser && <Route  path="/signup" element={<Signup />} />}
      {!currentUser && <Route  path="/signup" element={<Login />} />}
      {currentUser && <Route  path="/profile" element={<Profile />} />}
      {!currentUser && <Route  path="/profile" element={<Home />} />}
    </Routes>
    <ToastContainer position="top-right"/>
  </>
  )
}