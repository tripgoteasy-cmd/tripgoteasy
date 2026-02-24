import { FaStar } from "react-icons/fa";

function GoogleRating() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Rating Title */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Rated <span className="text-blue-600">4.9/5</span> on Google
        </h3>

        {/* Stars */}
        <div className="flex justify-center text-yellow-400 text-2xl mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          View All Reviews
        </a>
      </div>
    </section>
  );
}

export default GoogleRating;
