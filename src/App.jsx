// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import PopularDestinations from "./Components/PopularDestinations";
// import Packages from "./Components/Packages";
// import AboutUs from "./Components/AboutUs";
// import Testimonials from "./Components/Testimonials";
// import GetInTouch from "./Components/GetInTouch";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <div>
//       <>
//         <Navbar />
//         <div className="pt-20"></div>
//         <Hero />
//         <PopularDestinations />
//         <Packages />
//         <AboutUs />
//         <Testimonials />
//         <GetInTouch />
//         <Footer />
//       </>
//     </div>
//   );
// }

// export default App;
import Navbar from "./Components/Navbar";
import Hero from "./components/Hero";
import PopularDestinations from "./Components/PopularDestinations";
import Packages from "./Components/Packages";
import FloatingWA from "./Components/FloatingWA";
import Testimonials from "./Components/Testimonials";
import GoogleRating from "./Components/GoogleRating";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";
import TulipFestival from "./Components/TulipFestival";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TulipFestival />
      <PopularDestinations />
      <Packages />
      <FloatingWA />
      <Testimonials />
      <GoogleRating />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
