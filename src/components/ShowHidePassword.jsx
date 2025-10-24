import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ShowHidePassword = () => {

  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ password, setPassword ] = useState("");

  const togglePassword = () => {
   setPasswordVisible((prev) => !prev); 
  }

  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Show / Hide Password</h2>  
        <div className="relative">
          <input 
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            type={passwordVisible ? 'text' : 'password'} 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            type="button"
            onClick={togglePassword}
          >
            { passwordVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} /> }
          </button>
        </div>
      </div> 
    </div>
  );
};

export default ShowHidePassword;
