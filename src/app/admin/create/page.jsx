/* eslint-disable @next/next/no-img-element */
"use client";

import AdminLayout from "@/app/_components/admin-layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Create Event", formData);
    const token = localStorage.getItem("token");
    try {
      const isData = await axios.post(`http://localhost:5000/api/admin/create`,formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
        }
      );
      console.log("isData ", isData);
      alert("Succesfully Event Created")
      router.push("/admin");

    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-primary-main flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white-main shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt="User Icon"
            />
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight">
              Create Event
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-main focus:outline-none focus:ring-primary-main sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium">
                  Location
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-main focus:outline-none focus:ring-primary-main sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium">
                  Date
                </label>
                <div className="mt-1">
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-main focus:outline-none focus:ring-primary-main sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 bg-primary-main"
                >
                  Create Events
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
