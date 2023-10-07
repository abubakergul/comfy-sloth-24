import logo from "../assets/logo.svg";
import { BsCart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="shadow-md flex  justify-between items-center w-full">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex w-1/6 ">
        <li className="mx-2">
          <a className="hover:text-custom-brown" href="#">
            Home
          </a>
        </li>
        <li className="mx-2">
          <a className="hover:text-custom-brown" href="#">
            Products
          </a>
        </li>
      </ul>
      <div className="flex w-1/6 text-2xl">
        <a href="#" className="flex items-center  mx-2 relative  ">
          <span className="hover:text-custom-brown ">Cart</span>
          <BsCart />
          <span className="absolute bottom-4 right-0  bg-custom-brown text-white text-sm px-1 rounded">
            0
          </span>
        </a>
        <a href="#" className="flex items-center text-lg mx-2">
          <span className="hover:text-custom-brown">Login</span>
          <FaUserAlt />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
