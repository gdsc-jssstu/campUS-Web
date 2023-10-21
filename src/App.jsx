import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Requests from "./pages/Requests"
import MyRequests from "./pages/MyRequests"

export default function App() {
  const { currentUser, setCurrentUser } = useAuth();

  const pathComponent = {
    requests: <Requests />,
    myrequests: <MyRequests />,
    profile: <Profile />,
    signup: <Signup />,
    login: <Login />,
  };

  function PrivateRoute({ children }) {
    return currentUser ? <>{children}</> : <Navigate to="/" />
  }

  function AuthenticateRoute({ children }) {
    return currentUser ? <Navigate to="/profile" /> : <>{children}</>
  }

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {
          ["requests", "myrequests", "profile"].map((path, index) => (
            <Route
              key={index}
              path={`/${path}`}
              element={
                <PrivateRoute>
                  {pathComponent[path]}
                </PrivateRoute>
              }
            />
          ))
        }

        {
          ["signup", "login"].map((path, index) => (
            <Route
              key={index}
              path={`/${path}`}
              element={
                <AuthenticateRoute>
                  {pathComponent[path]}
                </AuthenticateRoute>
              }
            />
          ))
        }
      </Routes>
      <ToastContainer position="top-right" />
    </>
  );
}
