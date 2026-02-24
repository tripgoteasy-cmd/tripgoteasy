import { FaWhatsapp } from "react-icons/fa";

function Packages() {
  <section id="Packages" className="py-20 bg-[#F8FAFC]"></section>;
  const packages = [
    {
      title: "Honeymoon Package 3 Star",
      duration: "6 Days / 5 Nights",
      price: "₹ 40,000 per Couple",
      description:
        "Create unforgettable memories with your loved one in the paradise of Kashmir.",
      inclusions: [
        "Romantic Free Shikara Ride on Dal Lake",
        "Luxury Houseboat Stay",
        "Airport Transfers",
        "Pre-Booked Stays in Srinagar, Pahalgam and Lake",
        "Breakfast and Dinner Included",
      ],
      destinations: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
        "Doodhpathri",
      ],
    },
    {
      title: "Family Package 3 Star",
      duration: "7 Days / 6 Nights",
      price: "₹ 20,000 per person",
      description:
        "Perfect family getaway with activities for all ages in the valleys of Kashmir.",
      inclusions: [
        "Sightseeing Tours",
        "Family-friendly Accommodations",
        "Local Guide Services",
        "All Transportation",
        "Pre-Booked Stays in Srinagar, Pahalgam and Lake",
        "Breakfast and Dinner Included",
      ],
      destinations: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
        "Doodhpathri",
      ],
    },
    {
      title: "Group Package 3 Star",
      duration: "5 Days / 4 Nights",
      price: "₹ 15,000 per person",
      description:
        "Explore Kashmir with friends and create lasting memories together.",
      inclusions: [
        "Group Discounts Available",
        "Pre-Booked Stays in Srinagar, Pahalgam and Lake",
        "Breakfast and Dinner Included",
        "All Transportation",
        "Pickup and Drop",
      ],
      destinations: ["Srinagar", "Gulmarg", "Sonamarg", "Pahalgam"],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold mb-2 tracking-wide">
            ✦ PACKAGES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Choose Your Perfect Package
          </h2>
          <p className="text-gray-500 mt-4">
            Carefully crafted packages to suit every type of traveler
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-sm text-blue-600 mb-4">📅 {pkg.duration}</p>

                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {pkg.price}
                </div>

                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <h4 className="font-semibold mb-3">Package Inclusions:</h4>
                <ul className="space-y-2 mb-6">
                  {pkg.inclusions.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-green-500">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-3">Destinations Covered:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.destinations.map((place, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919560980793"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md transition duration-300"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
