import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="py-5 px-5 sticky">
      
      <div className="navbar pt-5">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-5 space-y-5 shadow"
          >
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            Project
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            Contact
          </NavLink>

           
          </ul>

        </div>

        <Link to="/" className="flex items-center space-x-2">
  
          <div className="text-6xl font-thin">
           R
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            Project
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black  rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
                : "px-6 py-4 border bg-white text-black border-black transition-all duration-300 ease-in-out rounded-full hover:bg-black hover:text-white"
            }
          >
            Contact
          </NavLink>

        </ul>

      </div>

      {/* User Actions */}
      <div className="navbar-end flex items-center space-x-4 text-lg">
      
      </div>
    </div>

    </div>
  );
};

export default Navbar;
