"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbLoaderQuarter } from "react-icons/tb";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading , setIsLoading] = useState({})
  const [mainLoading , setMainLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const fetchEvents = async () => {
    try {
      setMainLoading(true)
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/admin/allevent`);
      console.log(res.data.value);
      setEvents(res.data.value);
      setMainLoading(false)
    } catch (error) {
      setMainLoading(false)
      console.log("error hai", error);
    }
  };

  const rsvpEvent = async (eventId) => {
    const token = await localStorage.getItem("token");
    try {
      setIsLoading((prev) => ({ ...prev, [eventId]: true }))
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/users/rsvp/${eventId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("succes", data);
      setIsModalOpen(false)
      setIsLoading((prev) => ({ ...prev, [eventId]: false }))
      alert("Event Book successful!");
    } catch (error) {
      setIsLoading((prev) => ({ ...prev, [eventId]: false }))
      setIsModalOpen(false)
      console.log("error hai", error);
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleRSVP = async () => {
    if (selectedEventId) {
      await rsvpEvent(selectedEventId);
    }
  };
  
  if(mainLoading){
    return <div className="min-h-[80vh] w-full flex justify-center items-center">
      Loading...
    </div>
  }

  const openModal = (eventId) => {
    setSelectedEventId(eventId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEventId(null);
  };

  return (
    <div className="p-6 pt-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-primary-main">
        All Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((ele, i) => (
          <div key={i} className="border p-4 rounded shadow bg-white">
            <p className="float-right px-2 font-bold">Date: <span className="font-normal"> {new Date(ele.date).toLocaleDateString()}</span></p>
            <p className="text-lg font-bold">Event Location: <span className="font-normal">{ele.location}</span></p>
            <p className="float-right px-2 font-bold">Time: <span className="font-normal"> {new Date(ele.date).toLocaleTimeString()}</span></p>
            <h2 className="text-lg font-bold">Event Title : <span className="font-normal">{ele.title}</span></h2>
            <button
              onClick={() => openModal(ele._id)}
              className="mt-2 bg-primary-main text-white px-4 py-2 rounded flex justify-center items-center gap-2"
            >
              Book Event
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Confirm RSVP</h2>
            <p className="mb-6">Are you sure you want to attend this event?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleRSVP}
                className="bg-primary-main text-white px-4 py-2 rounded flex justify-center items-center gap-2"
                disabled={isLoading[selectedEventId]}
              >
                Confirm {isLoading[selectedEventId] && <TbLoaderQuarter className="animate-spin" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
