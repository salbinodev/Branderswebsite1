import Navbar from "../src/components/Navbar"; 
import Footer from "../src/components/Footer"; 
import ScholarshipCard from "../src/components/ScholarshipCard"; 
import ScholarshipOpportunities from "../src/components/ScholarshipOpportunities";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      {/* Hero Section with Banner Image */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/Images/studybanner.webp")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 py-12 text-white">
          <h1 className="text-5xl font-bold leading-tight">Welcome to Our Scholarship Program</h1>
          <p className="mt-4 text-lg">Providing opportunities for a brighter future</p>
          <a
            href="#opportunities"
            className="mt-6 inline-block px-6 py-3 bg-wine text-white rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

       {/* New Section for Open Scholarships */}
       <ScholarshipOpportunities />

      
      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-wine">About Us</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          We are dedicated to providing scholarships and educational opportunities to talented students worldwide.
        </p>
      </section>

      {/* Scholarship Opportunities Section */}
      <section
        id="opportunities"
        className="py-16 px-6 bg-gray-200 text-center"
      >
        <h2 className="text-3xl font-semibold text-wine">Scholarship Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
          <ScholarshipCard title="Full Scholarship" description="Covers tuition, accommodation, and books." />
          <ScholarshipCard title="Partial Funding" description="Financial support for tuition fees." />
          <ScholarshipCard title="Grants & Special Aid" description="For specific programs and students." />
        </div>
      </section>

      
      

      <Footer />
    </div>
  );
}
