import PropTypes from "prop-types";
import NavbarButton from "./NavbarButton";

function Navbar({ currentUser }) {
  return (
    <div className="flex h-[120px] bg-san-marino font-playfair-display">
      <div className="text-4xl text-tea-green w-full ml-10 pt-[62px] curson-default">
        CampUs
      </div>
      <div className="flex float-right text-xl w-fit pt-[78px]">
        {currentUser
          ? [
              "Requests",
              "My Requests",
              "My Profile",
              "About Us",
              "Log Out",
            ].map((title, index) => (
              <NavbarButton
                key={index}
                title={title}
                currentUser={currentUser}
              />
            ))
          : ["Home", "About Us"].map((title, index) => (
              <NavbarButton key={index} title={title} />
            ))}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  currentUser: PropTypes.object,
};

export default Navbar;
