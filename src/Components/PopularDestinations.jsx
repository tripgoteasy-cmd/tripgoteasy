import { FaWhatsapp } from "react-icons/fa";

function PopularDestinations() {
  const destinations = [
    {
      name: "Dal Lake",
      image:
        "https://images.unsplash.com/photo-1600845747913-e33543f94892?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      season: "March to October",
      description:
        "Experience the serene beauty of Asia's most famous lake with shikara rides and floating gardens.",
    },
    {
      name: "Gulmarg",
      image:
        "https://images.unsplash.com/photo-1771098524367-ca20713de68f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      season: "December to March (Snow), April to June (Flowers)",
      description:
        "The 'Meadow of Flowers' offers world-class skiing and the highest cable car ride in Asia.",
    },
    {
      name: "Pahalgam",
      image:
        "https://images.unsplash.com/photo-1668173443752-bdec2fbb3c79?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      season: "April to November",
      description:
        "A picturesque valley known for its lush meadows, pristine rivers, and trekking trails.",
    },
    {
      name: "Sonamarg",
      image:
        "https://images.unsplash.com/photo-1688562167973-18d8b64624d1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      season: "May to September",
      description:
        "The 'Meadow of Gold' features pristine glaciers, alpine lakes, and breathtaking mountain views.",
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold mb-2 tracking-wide">
            ✦ DESTINATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Popular Destinations
          </h2>
          <p className="text-gray-500 mt-4">
            Explore the most stunning locations Kashmir has to offer
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${place.image})` }}
              ></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {place.name}
                </h3>
                <p className="text-sm text-blue-600 mb-3">⏱ {place.season}</p>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://wa.me/919560980793"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition duration-300"
          >
            <FaWhatsapp size={22} />
            Chat on Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
