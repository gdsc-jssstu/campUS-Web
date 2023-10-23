import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { camelize, path } from "../helpers/navbar";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext

function NavbarButton({ title, currentUser }) {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Get the logout function from the AuthContext

  function textClassName() {
    return currentUser && window.location.pathname === path[camelize(title)]
      ? "text-white underline underline-offset-8"
      : "text-tea-green";
  }


  function handleClick() {
    if (camelize(title) === "logOut") {
      // Handle the "Logout" button click
      logout();
    } else {
      navigate(path[camelize(title)]);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer mx-8 whitespace-nowrap ${textClassName()}`}
    >
      {title}
    </div>
  );
}

NavbarButton.propTypes = {
  currentUser: PropTypes.object,
  title: PropTypes.string,
};

export default NavbarButton;
