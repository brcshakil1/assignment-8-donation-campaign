import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(true);

  const handleToggle = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="flex justify-between items-center py-5 px-4 max-w-7xl mx-auto">
      <div>
        <Link to="/">
          <img className="w-[120px] md:w-auto" src={logo} alt="" />
        </Link>
      </div>
      <nav>
        <ul
          className={`${
            isTrue && "hidden"
          } md:flex gap-5 items-center absolute md:static top-14 right-4 py-14 px-14 md:py-8 md:px-6 bg-gray-200 md:bg-transparent z-50`}
        >
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
      <div onClick={handleToggle} className="md:hidden">
        {isTrue ? (
          <AiOutlineMenu className="text-3xl" />
        ) : (
          <AiOutlineClose className="text-3xl" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
