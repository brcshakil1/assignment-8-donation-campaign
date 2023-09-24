import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import bg from "../../assets/images/bg.jpg";

const Header = () => {
  return (
    <div className="relative">
      <div
        className=" h-screen bg-cover opacity-10 absolute w-full -z-40 bg-top"
        style={{ backgroundImage: `url("${bg}")` }}
      ></div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;
