import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
    <nav className="flex justify-between items-center py-6 shadow-md px-5">

      <img src="https://i.ibb.co/ggYbYY4/Logo.png" alt="" />

      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline text-xl" : "text-xl"
            }
          >
            Home
          </NavLink>

        </li>

        <li>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline text-xl" : "text-xl"
            }
          >
            Donation
          </NavLink>

          
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline text-xl" : "text-xl"
            }
          >
            statistics
          </NavLink>

          
        </li>
      </ul>

    </nav>
  </div>
  );
};

export default Navbar;