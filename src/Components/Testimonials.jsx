import { FaStar } from "react-icons/fa";

function Testimonials() {
  <section id="testimonials" className="py-20 bg-[#F8FAFC]"></section>;
  const reviews = [
    {
      name: "Mr. Sahil; Sayyed",
      location: "Mumbai",
      package: "Honeymoon Package",
      text: `"I booked a 5 Nights 6 Days Kashmir trip through Trip Got Easy, and my experience was absolutely wonderful. The entire trip was very well planned and organized. The hotels were comfortable and clean, and all the arrangements were proper and well-managed. We did not face any issues during the trip.
Our driver, Mr. Dawood, was also very kind and helpful. He was friendly, supportive, and made our journey even more enjoyable. His guidance and assistance throughout the trip were truly appreciated.
I would highly recommend Trip Got Easy to anyone planning a trip to Kashmir. They provide professional and trustworthy service."`,
    },
    {
      name: "Mr. Parnajyoti Karmakar & Family",
      location: "Kolkata",
      package: "Family Package",
      text: `"I would like to share my wonderful experience of my Kashmir tour from 24th December 2025 to 29th December 2025, organized by Trip Got Easy Travel Agency. Our journey began at Srinagar Airport, where we were warmly received by our courteous and professional driver, Mr. Dawood Ji. His hospitality was truly commendable, and he ensured a comfortable transfer to Hotel Hermitage, where we were welcomed with a traditional Kashmiri Pashmina shawl, a gesture that made us feel truly special.
The hotel rooms were excellent, and the food served at the restaurant was delicious. The hotel staff were extremely cooperative and attended to our needs promptly. Overall, our stay at Hotel Hermitage was outstanding and highly satisfying.
Over the next two days, we visited Gulmarg and Sonmarg. Throughout these excursions, Dawood Ji guided us efficiently, making our journeys both comfortable and memorable with his knowledge and courteous behavior.
We then proceeded to Pahalgam, where we stayed at Hotel Arabian Nights. The facilities were superb, and a variety of delicious food options were available. The hotel staff were equally cooperative and ensured a pleasant stay.
Above all, I would like to specially mention Mr. Hazim Wani Ji and the entire team of Trip Got Easy Travel Agency. Their services were truly exceptional. Hazim Ji’s support and presence were felt at every step of our journey, ensuring a smooth and worry-free experience. I wholeheartedly recommend this agency to anyone planning a tour to Kashmir.
Finally, I pray to the Almighty that I may get the opportunity to visit this beautiful paradise once again in the near future."`,
    },
    {
      name: "Mr. Naved Malek",
      location: "Ahemdabad",
      package: "Couple Package",
      text: `"Everything was great, We had a lot of fun even our hotel was fabulous and beyond words.It was my first time snow experience and i totally enjoyed a lottt.
I got the best experience with Trip got easy and even our cab driver Mr Mehraj was too good. Heartfull thanks to Mr Hazim & Miss Khadija."`,
    },
    {
      name: "Mr. Ubaid",
      location: "Bangalore",
      package: "Premium Experience",
      text: `"My family is very satisfied with trip got easy
EveryThing is good translations and accomodation is also good
Driver is very helpful and staff is also very helpful
Thankyou
TRIPGOTEASY"`,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2 tracking-wide">
            ✦ TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Travelers Say
          </h2>
          <p className="text-gray-500 mt-4">
            Real experiences from real people who explored Kashmir with us
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {review.text}
              </p>

              {/* Divider */}
              <div className="border-t pt-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>

                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {review.package}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
