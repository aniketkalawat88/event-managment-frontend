"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EventTable() {
    const [IsVal, setIsVal] = useState([]);

  const fetchEvents = async () => {
    try {
        const res = await axios.get(`http://localhost:5000/api/admin/allevent`);
        console.log(res.data.value)
        setIsVal(res.data.value)
    } catch (error) {
        console.log("error hai" , error)            
      }
  };
  const deleteEvent = async (eventId) => {
    const token = localStorage.getItem("token");
      try {
          await axios.delete(`http://localhost:5000/api/admin/${eventId}`, {
              headers: { Authorization: `Bearer ${token}` },
          });
          setIsVal(IsVal.filter((e) => e._id !== eventId));
      } catch (error) {
          console.log("error hai" , error.response.data.message)
          alert(error.response.data.message)
      }
  }
useEffect(()=> {
  fetchEvents()
},[])
  return (
    
    <div className="overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-sm text-white uppercase bg-primary-main border border-primary-main text-center">
        <tr>
          <th scope="col" className="px-6 py-3">
            S.no.
          </th>
          <th scope="col" className="px-6 py-3">
            Event Title
          </th>
          <th scope="col" className="px-6 py-3">
            Event Location
          </th>
          <th scope="col" className="px-6 py-3">
            Number of Guest
          </th>
          <th scope="col" className="px-3 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3 ">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {
          IsVal.map((ele,i) => (
        <tr key={i} className="border text-gray-900 text-base border-primary-main text-center">
          <td className="px-6 py-4">{i+1}</td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            {ele.title}
          </th>
          <td className="px-6 py-4">{ele.location}</td>
          <td className="px-6 py-4">{ele.attendees.length}</td>
          <td className="px-3 py-4 text-center">
              {new Date(ele.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </td>
          <td className="px-6 py-4">
           <button type='submit' className='text-red-500' onClick={()=>deleteEvent(ele._id)}> delete</button>
          </td>
        </tr>
          ))
        }
      </tbody>
    </table>
      {
        IsVal.length === 0 && 
        <p className='p-6 w-full text-primary-main text-xl text-center'>
          No Event Persent
        </p>
      }
  </div>
  )
}
