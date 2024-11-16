import React from 'react'

export default function Contact() {
  return (
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold text-gray-800">Ready to manage your next event?</h3>
      <p className="mt-8 text-xl font-light text-gray-600">
        Whether you are planning a small gathering or a large conference, our team is ready to help you execute a flawless event.
      </p>
      <p className="mt-8">
        <button
          type="button"
          className="py-5 px-16 text-lg bg-teal-500 hover:bg-teal-600 rounded text-white"
        >
          Get Started Now
        </button>
      </p>
    </section>
  )
}
