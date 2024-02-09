import "./style.css";
import Logo from "../../assets/Logo.svg";
import { useState } from "react";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="">
      <div className="px-4 py-10 text-gray-500 flex md:w-[80%] md:items-center md:mx-auto  justify-between">
        <div>
          <img src={Logo} alt="" className="cursor-pointer" />
        </div>
        <div
          className={
            toggleMenu
              ? "md:flex justify-between  md:pt-0 pt-10 w-full"
              : "hidden md:flex"
          }
          id="menu"
        >
          <ul>
            <li className="md:inline-block cursor-pointer hover:text-white border-b md:border-none py-2 px-3">
              Home
            </li>
            <li className="dropdown md:inline-block cursor-pointer hover:text-white border-b md:border-none py-2 px-3 relative">
              <a>About</a>
            </li>
            <li className="md:inline-block cursor-pointer hover:text-white border-b md:border-none py-2 px-3">
              Contact
            </li>
            <li className="md:inline-block cursor-pointer hover:text-white border-b md:border-none py-2 px-3">
              Blog
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span
              onClick={handleToggle}
              class="navicon bg-white-darkest flex items-center relative"
            ></span>
          </label>
        </div>
      </div>
    </header>
  );
};
