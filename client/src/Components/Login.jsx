import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useContextMethod } from "./AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const [userauth, setuserauth] = useContextMethod();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const obj = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(obj);
    let fetchAuth = await fetch(`http://localhost:4000/login/user`, {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }); 
    fetchAuth = await fetchAuth.json();
    console.log(fetchAuth);
    setuserauth({...userauth, user:fetchAuth.loginuser, token:fetchAuth.token})
    localStorage.setItem('auth', JSON.stringify(fetchAuth.loginuser));
    localStorage.setItem('token ', JSON.stringify(fetchAuth.token));
    navigate("/dashboard/add/report");
  };
  return (
    <div>
      <div className="max-w-2xl shadow-lg rounded mt-5 mx-auto">
        <h1 className="text-center">Login</h1>
        <form className="p-5 space-y-4" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setemail(e.target.value)}
            placeholder="enter email"
            className="w-full outline-none p-2 border"
            type="text"
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            placeholder="enter password"
            className="w-full outline-none p-2 border"
            type="text"
          />

          <button
            type="submit"
            className="bg-green-500 mt-5 rounded px-4 py-1 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
