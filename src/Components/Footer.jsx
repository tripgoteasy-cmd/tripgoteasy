import {
  FaInstagram,
  FaWhatsapp,
  FaGoogle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0A192F] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              Trip Got Easy
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Your trusted partner for unforgettable Kashmir adventures.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/tripgoteasy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919560980793"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-green-600 transition"
              >
                <FaWhatsapp />
              </a>

              {/* Google Business */}
              <a
                href="https://share.google/btz3Q6qcFiqng7W6T"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaGoogle />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition">
                  Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaPhone /> +91 9560980793, +91 7006026944
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope /> tripgoteasy@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt /> Baramulla, Kashmir, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Trip Got Easy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
