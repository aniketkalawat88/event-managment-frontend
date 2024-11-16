"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EventList() {
    const [events, setEvents] = useState([]);
    const isFetch = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please log in to access your profile.");
          router.push("/login");
          return;
        }
        try {
          const isData = await axios.get(
            "http://localhost:5000/api/users/rsvp-list",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log(isData.data.value, "Data fetch");
          setEvents(isData.data.value);
        } catch (err) {
          console.log("error hai", err);
        }
      };
      useEffect(() => {
        isFetch();
      }, []);
  


    if (!events.length) {
        return <p>You are not paticipated in any events.</p>;
    }
  return (
    <div>
        <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-primary-main">My RSVP List</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white shadow-md rounded p-4 border border-gray-300"
          >
            <p className="text-xl font-medium text-primary-main">
            <strong>Title:</strong>{" "} {event.title}
            </p>
            <p className="mt-1">
              <strong>Date:</strong>{" "}
              {new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mt-1">
              <strong>Time:</strong> {new Date(event.date).toLocaleTimeString()}
            </p>
            <p className="mt-1">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="mt-1">
              <strong>Attendees:</strong> {event.attendees.length}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
