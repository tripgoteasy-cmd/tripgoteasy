import { FaWhatsapp } from "react-icons/fa";

function TulipFestival() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
          {/* Image */}
          <div
            className="h-80 md:h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1671974489983-083171c0215e?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>

          {/* Content */}
          <div className="p-10 flex flex-col justify-center">
            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              🌷 Limited Time – Tulip Festival 2026
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kashmir Tulip Festival Special Package
            </h2>

            <p className="text-gray-600 mb-6">
              Experience Asia’s largest tulip garden in full bloom. Enjoy
              breathtaking views, luxury stays, shikara rides and guided
              sightseeing during the magical Tulip Festival season.
            </p>

            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-900">
                5 Days / 4 Nights
              </p>
              <p className="text-2xl font-bold text-blue-600">
                Starting from ₹19,999 / person
              </p>
            </div>

            <a
              href="https://wa.me/919560980793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-medium transition duration-300"
            >
              <FaWhatsapp />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TulipFestival;
