import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-12">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink className="text-[18px]" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[18px]" to="/donation">
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[18px]" to="/statistics">
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
