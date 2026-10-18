function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/66896/tulips-flowers-fish-eye-red-66896.jpeg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <p className="text-blue-400 mb-4">Jammu and Kashmir, India</p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Discover Paradise <br /> on Earth
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Experience the breathtaking beauty of Kashmir Tulip Festival 2026 with
          our curated travel packages.
        </p>

        {/* Updated Buttons */}
        <div className="flex gap-4">
          <a
            href="#packages"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Packages →
          </a>

          <a
            href="#destinations"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Destinations
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
