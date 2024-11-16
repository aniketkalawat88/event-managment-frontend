/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Form Data:", formData);
    try {
      const isData = await axios.post(
        `http://localhost:5000/api/users/login`,
        formData
      );
      console.log("Login Successful:", isData);

      localStorage.setItem("token", isData.data.Token); 
      router.push("/");
    } catch (error) {
      console.log("Login Error:", error.isData?.data || error.message);
    }
  };

  return (
    <div className="bg-secondary-main flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white-main shadow-md rounded-md p-6">
          <img
            className="mx-auto h-12 w-auto"
            src="https://www.svgrepo.com/show/499664/user-happy.svg"
            alt="User Icon"
          />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight">
            Login to your account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-main focus:outline-none focus:ring-primary-main sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-main focus:outline-none focus:ring-primary-main sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 bg-primary-main"
              >
                Login
              </button>
              
              <p className="mt-4 text-center">
                    Dont have an account?{" "}
                    <a href="/register" className="text-blue-500 underline">
                        Register here
                    </a>
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
