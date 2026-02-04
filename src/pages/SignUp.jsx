import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const primaryColor = "#ff4d2d";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]"
        style={{ border: `1px solid ${borderColor}` }}
      >
        <h1 className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
          Vingo
        </h1>

        <p className="text-gray-600 mb-8">
          Create your account to get started with delicious food deliveries
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="enter your full name"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            id="Email"
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="enter your email"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label htmlFor="Mobile" className="block text-gray-700 font-medium mb-1">
            Mobile
          </label>
          <input
            id="Mobile"
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="enter your mobile number"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none"
              placeholder="Enter your password"
              style={{ border: `1px solid ${borderColor}` }}
            />

            <button
              type="button"
              className="absolute right-3 top-[14px] text-gray-500 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Role
          </label>

          <div className="flex gap-2">
            {["user", "admin", "deliveryBoy"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 border rounded-lg px-3 py-2 font-medium transition-colors`}

                // onClick={() => setRole(r)}
                style={role == r ? { backgroundColor: primaryColor  , color: "white" } : { backgroundColor: borderColor, color: "black" }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}

export default SignUp;
