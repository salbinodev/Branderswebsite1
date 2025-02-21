import React from "react";
import Image from "next/image";
import Link from "next/link";

const scholarships = [
  {
    country: "Northern Cyprus",
    type: "Bachelor",
    image: "/Images/Ncyprus.webp", // Ensure this image is inside the `public/images` folder
    link: "/apply/northern-cyprus",
  },
  {
    country: "India",
    type: "Masters",
    image: "/Images/india.webp",
    link: "/apply/india",
  },
  {
    country: "Portugal",
    type: "English School",
    image: "/Images/Portugal.webp",
    link: "/apply/portugal",
  },
  {
    country: "China",
    type: "Bachelor & Masters",
    image: "/Images/china.webp",
    link: "/apply/china",
  },
];

const ScholarshipOpportunities = () => {
  return (
    <section id="scholarships" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-wine mb-8">
        Scholarships Open for Applications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <div className="h-60 relative">
              <Image
                src={scholarship.image}
                alt={scholarship.country}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h3 className="text-xl font-bold">{scholarship.country}</h3>
              <p className="mt-2 text-lg">{scholarship.type}</p>
              
                <a href={scholarship.link} className="mt-4 bg-wine px-4 py-2 text-white rounded-lg hover:bg-white hover:text-wine transition duration-300">
                  Apply Now
                </a>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScholarshipOpportunities;
