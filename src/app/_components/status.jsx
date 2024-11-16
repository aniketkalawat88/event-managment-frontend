import React from 'react'

export default function Status() {
  return (
    <section id="stats" className="my-10 lg:pt-24">
      <div className="container mx-auto text-center">
        <p className="uppercase tracking-wider text-gray-600">
          Our Events Deliver Outstanding Results
        </p>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
              +200%
            </p>
            <p className="font-semibold mb-6">Attendees Registered</p>
            <p className="text-lg text-gray-500">Our events have seen a 200% increase in attendee registrations.</p>
          </div>
          <div className="w-full sm:w-1/3">
            <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
              +150%
            </p>
            <p className="font-semibold mb-6">Successful Events</p>
            <p className="text-lg text-gray-500">Event completion rates have increased by 150%, ensuring smooth and successful experiences.</p>
          </div>
          <div className="w-full sm:w-1/3">
            <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
              98%
            </p>
            <p className="font-semibold mb-6">Customer Satisfaction</p>
            <p className="text-lg text-gray-500">98% of our event participants are satisfied with the overall experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
