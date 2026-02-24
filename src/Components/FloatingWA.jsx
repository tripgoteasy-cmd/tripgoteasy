import { FaWhatsapp } from "react-icons/fa";

function FloatingWA() {
  return (
    <a
      href="https://wa.me/919560980793"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default FloatingWA;
