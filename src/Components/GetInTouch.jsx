import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold mb-2 tracking-wide">
            ✦ CONTACT US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-500 mt-4">
            Have questions? We’re here to help you plan your perfect Kashmir
            getaway.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white p-10 rounded-2xl shadow-md">
          {/* Inputs (Optional — UI only) */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your travel plans..."
            className="border p-3 rounded-lg w-full mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Email Button */}
            <a
              href="mailto:info@tripgoteasy.com?subject=Kashmir%20Tour%20Inquiry&body=Hi%20Team,%0A%0AI%20am%20interested%20in%20your%20Kashmir%20tour%20packages.%20Please%20share%20more%20details.%0A%0AThanks"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              <FaEnvelope />
              Send via Email
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919560980793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
