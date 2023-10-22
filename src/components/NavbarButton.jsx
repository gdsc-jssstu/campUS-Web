import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { camelize, path } from "../helpers/navbar";

function NavbarButton({ title, currentUser }) {
  const navigate = useNavigate();

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
