/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoading , setIsLoading] = useState(false)

  const isFetch = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to access your profile.");
      router.push("/login");
      return;
    }
    try {
      setIsLoading(true)
      const isData = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/users/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(isData.data.value, "Data done");
      setUser(isData.data.value);
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log("error hai", err);
    }
  };
  useEffect(() => {
    isFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(isLoading){
    return <div className="min-h-[80vh] w-full flex justify-center items-center">
      Loading...
    </div>
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div className="bg-primary-main flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white-main shadow-md rounded-md p-6">
          <img
            className="mx-auto h-24 w-24 rounded-full border-2 border-primary-main"
            src="https://www.svgrepo.com/show/499664/user-happy.svg"
            alt="User Icon"
          />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight">
            Welcome, {user.name}
          </h2>
          <div className="space-y-4">
            <p className="capitalize">
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p className="capitalize">
              <strong>Role:</strong> {user.role}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-6 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 bg-primary-main"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
