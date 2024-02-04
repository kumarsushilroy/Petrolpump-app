import React from "react";
import { useContextMethod } from "./AuthContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [userauth, setuserauth] = useContextMethod();
  return (
    <div>
      {userauth?.user ? (
        <div className="bg-gray-300 flex justify-between space-x-4">
          <ul className="flex justify-between w-full px-4">
            <NavLink
              to={`/dashboard/${userauth.user.role == 1 ? "admin" : "user"}`}
            >
              Dashboard
            </NavLink>
            <NavLink to={"dashboard/table"}>Petrol List</NavLink>
          </ul>
        </div>
      ) : (
        <div className="bg-gray-300 flex justify-between space-x-4">
          <ul>
            <NavLink>Login</NavLink>
            <NavLink>Register</NavLink>
            <NavLink>Login</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
