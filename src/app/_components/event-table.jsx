"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbLoaderQuarter } from "react-icons/tb";

export default function EventTable() {
  const [IsVal, setIsVal] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [isLoading , setIsLoading] = useState(false)

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/admin/allevent`
      );
      console.log(res.data.value);
      setIsVal(res.data.value);
    } catch (error) {
      console.log("error hai", error);
    }
  };

  const deleteEvent = async () => {
    const token = localStorage.getItem("token");
    try {
      setIsLoading(true)
      await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}/api/admin/${selectedEventId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIsVal(IsVal.filter((e) => e._id !== selectedEventId));
      setIsModalOpen(false);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("error hai", error.response?.data?.message);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const openModal = (eventId) => {
    setSelectedEventId(eventId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEventId(null);
  };

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
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {IsVal.map((ele, i) => (
            <tr
              key={i}
              className="border text-gray-900 text-base border-primary-main text-center"
            >
              <td className="px-6 py-4">{i + 1}</td>
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
                <button
                  type="submit"
                  className="text-red-500"
                  onClick={() => openModal(ele._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {IsVal.length === 0 && (
        <p className="p-6 w-full text-primary-main text-xl text-center">
          No Event Present
        </p>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">Are you sure you want to delete this event?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={deleteEvent}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex justify-center items-center gap-2"
              >
                Confirm {isLoading && <TbLoaderQuarter className="animate-spin" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
