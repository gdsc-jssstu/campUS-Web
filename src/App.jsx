import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components and Pages
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import { Toaster } from 'react-hot-toast';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Requests from "./pages/Requests"
import MyRequests from "./pages/MyRequests"

// Context
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { currentUser, setCurrentUser } = useAuth();

  const privateRoutes = [
    { path: 'requests', component: <Requests /> },
    { path: 'myrequests', component: <MyRequests /> },
    { path: 'profile', component: <Profile /> },
  ];

  const authRoutes = [
    { path: 'signup', component: <Signup /> },
    { path: 'login', component: <Login /> },
  ];

  function PrivateRoute({ children }) {
    return currentUser ? <>{children}</> : <Navigate to="/" />;
  }

  function AuthenticateRoute({ children }) {
    return currentUser ? <Navigate to="/profile" /> : <>{children}</>;
  }

  return (
    <>
      <Toaster/>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {privateRoutes.map(({ path, component }, index) => (
          <Route
            key={index}
            path={`/${path}`}
            element={<PrivateRoute>{component}</PrivateRoute>}
          />
        ))}

        {authRoutes.map(({ path, component }, index) => (
          <Route
            key={index}
            path={`/${path}`}
            element={<AuthenticateRoute>{component}</AuthenticateRoute>}
          />
        ))}
      </Routes>
    </>
  );
}
