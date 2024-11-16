import React from "react";

export default function Testimonial() {
    const arr = [
        {
          name: "Aniket Kalawat",
          title: "A truly professional and impactful event!",
          data: "The speakers were insightful, the sessions interactive, and the networking opportunities were fantastic.",
          role: "Event Speaker",
        },
        {
          name: "Sarah Lee",
          title: "An unforgettable experience with exceptional organization!",
          data: "From start to finish, the event was flawlessly executed. The organizers paid attention to every detail. ",
          role: "Event Attendee",
        },
        {
          name: "John Smith",
          title: "Seamless and well-organized event!",
          data: "Everything was well-planned, from registration to sessions. I felt valued as an attendee, and the content was highly engaging.",
          role: "Event Attendee",
        },
      ];
      
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto">
        <p className="uppercase tracking-wider mb-8 text-gray-600 text-center">
          What our event participants are saying
        </p>
        <div className="grid md:grid-cols-3">
          {arr.map((ele, i) => (
            <div key={i} className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
                <p className="text-xl font-semibold">
                  {ele.title}
                </p>
                <p className="mt-6">
                  {ele.data}
                </p>
                <div className="flex items-center mt-8">
                  <div>
                    <p>{ele.name}</p>
                    <p className="text-sm text-gray-600">{ele.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
