import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <NavLink
        to="/"
        className={` ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`
        }
      >
        Demo
      </NavLink>
    </div>
  );
};

export default Navbar;
