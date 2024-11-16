"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function AdminLayout({children}) {
    const [role, setRole] = useState(null);
    const router = useRouter();
    const checkRole = async () => {
      const token = localStorage.getItem("token");
      try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/users/checkrole`, {
              headers: { Authorization: `Bearer ${token}` },
          });
          console.log(res.data.role)
          return res.data.role;
      } catch (error) {
          console.error("Error checking role", error);
          return null;
      }
  };
    useEffect(() => {
        const verifyRole = async () => {
            const userRole = await checkRole();
            if (userRole !== "admin") {
                alert("Access Denied. Admins only!");
                router.push("/"); 
            } else {
                setRole(userRole);
            }
        };
        verifyRole();
    }, [router]);

    if (!role) return <p>Loading...</p>;
  return (
    <div>
      {children}
    </div>
  )
}
