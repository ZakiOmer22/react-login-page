import React from "react";
import { MdMailOutline, MdLockOutline } from "react-icons/md";
import { FaApple, FaGoogle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-[#1c1c1c] p-8 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-6">
        {/* LOGO */}
        <div className="flex justify-center">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
            O
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p className="text-sm text-gray-400">
            Don’t have an account yet?
            <span className="text-blue-500 cursor-pointer">Sign up</span>
          </p>
        </div>

        {/* Email Address */}
        <div className="flex items-center bg-[#2a2a2a] rounded-md px-3 py-2">
          <MdMailOutline className="text-gray-400 text-xl" />
          <input
            type="email"
            placeholder="Email address"
            className="bg-transparent w-full px-2 text-white focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex items-center bg-[#2a2a2a] rounded-md px-3 py-2">
          <MdLockOutline className="text-gray-400 text-xl" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent w-full px-2 text-white focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md font-medium">
          Login
        </button>

        {/* Divider */}
        <div className="text-center text-sm text-gray-400">OR</div>

        {/* Social Media */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#2a2a2a] py-2 rounded-md flex justify-center items-center text-lg hover:bg-[#333]">
            <FaApple />
          </button>
          <button className="flex-1 bg-[#2a2a2a] py-2 rounded-md flex justify-center items-center text-lg hover:bg-[#333]">
            <FaGoogle />
          </button>
          <button className="flex-1 bg-[#2a2a2a] py-2 rounded-md flex justify-center items-center text-lg hover:bg-[#333]">
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
