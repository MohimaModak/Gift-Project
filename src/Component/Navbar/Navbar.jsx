import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <NavLink
        to="/"
        className={`pr-5 ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
      >
        Choice
      </NavLink>
      <NavLink
        to="/surprise"
        className={` ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
      >
        Luck
      </NavLink>
    </div>
  );
};

export default Navbar;
