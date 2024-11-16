"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/admin/allevent`);
      console.log(res.data.value);
      return res.data.value;
    } catch (error) {
      console.log("error hai", error);
    }
  };

  const rsvpEvent = async (eventId) => {
    const token = await localStorage.getItem("token");
    try {
      const data = await axios.post(
        `http://localhost:5000/api/users/rsvp/${eventId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("succes", data);
      alert("Event Book successful!");
    } catch (error) {
      console.log("error hai", error);
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const handleRSVP = async (eventId) => {
    await rsvpEvent(eventId);
  };

  return (
    <div id="allevents" className="p-6 pt-20">
      <h1 className="text-4xl font-bold py-8 text-primary-main text-center">
        All Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((ele, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <p className="float-right px-2 font-bold">Date: <span className="font-normal"> {new Date(ele.date).toLocaleDateString()}</span></p>
            <p className="text-lg font-bold">Event Location: <span className="font-normal">{ele.location}</span></p>
            <p className="float-right px-2 font-bold">Time: <span className="font-normal"> {new Date(ele.date).toLocaleTimeString()}</span></p>
            <h2 className="text-lg font-bold">Event Title : <span className="font-normal">{ele.title}</span></h2>
            <button
              onClick={() => handleRSVP(ele._id)}
              className="mt-2 bg-primary-main text-white px-4 py-2 rounded"
            >
              Click To attend Seminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
