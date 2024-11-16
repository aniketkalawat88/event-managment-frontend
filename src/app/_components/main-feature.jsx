import React from 'react'

export default function MainFeature() {
  return (
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Event Management Features</h2>
        <div className="flex flex-col sm:flex-row mt-12">
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
            >
              <p className="font-semibold text-xl">Browse Events</p>
              <p className="mt-4">
                Easily explore upcoming events in your area. Filter and search to find events that match your interests.
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
            >
              <p className="font-semibold text-xl">RSVP to Events</p>
              <p className="mt-4">
                Confirm your attendance by RSVP’ing to events. Get reminders and stay updated on event details.
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div
              className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
            >
              <p className="font-semibold text-xl">Event Reminders</p>
              <p className="mt-4">
                Receive notifications and reminders for your upcoming events, ensuring you never miss an exciting opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
