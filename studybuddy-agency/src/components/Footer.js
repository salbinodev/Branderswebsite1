import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-wine text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold">Your Logo</h2>
          <p className="mt-2 text-gray-300">Empowering education through scholarships.</p>
        </div>

        {/* About / Menu Section */}
        <div>
          <h3 className="text-xl font-semibold">About</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="#about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="#opportunities" className="hover:text-gray-300">Opportunities</Link></li>
            <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="mt-3 space-y-2">
            <li>Full Scholarships</li>
            <li>Partial Funding</li>
            <li>Mentorship Programs</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Luanda, Angola</li>
            <li className="flex items-center"><FaEnvelope className="mr-2" /> email@example.com</li>
            <li className="flex items-center">
              <FaWhatsapp className="mr-2  bg-green-500 rounded-sm" />
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Chat on WhatsApp Now
              </a>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-300 mt-8 border-t border-white pt-4">
        <p>&copy; {new Date().getFullYear()} Developed by BrandersbySA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
