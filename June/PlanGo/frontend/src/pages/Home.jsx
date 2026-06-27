import {
  FaSearch,
  FaCalendarCheck,
  FaMusic,
  FaBirthdayCake,
  FaBriefcase,
  FaGraduationCap,
  FaGlassCheers,
  FaFutbol,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const Home = () => {
  const categories = [
    {
      name: "Concert",
      icon: <FaMusic size={35} />,
    },
    {
      name: "Birthday",
      icon: <FaBirthdayCake size={35} />,
    },
    {
      name: "Corporate",
      icon: <FaBriefcase size={35} />,
    },
    {
      name: "College",
      icon: <FaGraduationCap size={35} />,
    },
    {
      name: "Festival",
      icon: <FaGlassCheers size={35} />,
    },
    {
      name: "Sports",
      icon: <FaFutbol size={35} />,
    },
  ];

  const events = [
    {
      title: "Music Fiesta",
      location: "Bhubaneswar",
      date: "15 Aug 2026",
      price: "₹499",
    },
    {
      title: "Tech Summit",
      location: "Cuttack",
      date: "28 Aug 2026",
      price: "₹799",
    },
    {
      title: "Food Carnival",
      location: "Puri",
      date: "5 Sept 2026",
      price: "₹299",
    },
  ];

  return (
    <div className="bg-[#F8F4EC]">

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-5xl font-extrabold leading-tight text-[#5C4033]">
            Plan Your
            <br />
            Perfect Event
            <span className="text-[#A67C52]"> With PlanGo</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Discover amazing events, book tickets instantly,
            and create unforgettable memories.
          </p>

          {/* Search */}

          <div className="mt-10 flex bg-white rounded-full shadow-lg overflow-hidden">

            <input
              type="text"
              placeholder="Search events..."
              className="flex-1 px-6 py-4 outline-none"
            />

            <button className="bg-[#6F4E37] px-8 text-white hover:bg-[#5C4033] transition">

              <FaSearch />

            </button>

          </div>

          {/* Buttons */}

          <div className="flex gap-5 mt-8">

            <button className="bg-[#6F4E37] text-white px-8 py-3 rounded-full hover:bg-[#5C4033] transition">

              Explore Events

            </button>

            <button className="border-2 border-[#6F4E37] text-[#6F4E37] px-8 py-3 rounded-full hover:bg-[#6F4E37] hover:text-white transition">

              Become Organizer

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="bg-[#EADBC8] w-96 h-96 rounded-full flex items-center justify-center shadow-2xl">

            <FaCalendarCheck
              size={170}
              className="text-[#6F4E37]"
            />

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 mb-20">

        {[
          ["1000+", "Events"],
          ["500+", "Organizers"],
          ["10K+", "Users"],
          ["4.9★", "Ratings"],
        ].map((item) => (
          <div
            key={item[1]}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
          >
            <h2 className="text-3xl font-bold text-[#6F4E37]">
              {item[0]}
            </h2>

            <p className="mt-2 text-gray-600">{item[1]}</p>

          </div>
        ))}
      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center text-[#5C4033]">

          Browse Categories

        </h2>

        <p className="text-center text-gray-600 mt-3">

          Find events based on your interests.

        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

          {categories.map((category) => (

            <div
              key={category.name}
              className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center hover:bg-[#6F4E37] hover:text-white transition duration-300 cursor-pointer"
            >

              <div>{category.icon}</div>

              <h3 className="mt-5 font-semibold">

                {category.name}

              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ================= FEATURED EVENTS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center">

          <h2 className="text-4xl font-bold text-[#5C4033]">

            Featured Events

          </h2>

          <button className="text-[#6F4E37] font-semibold">

            View All →

          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {events.map((event) => (

            <div
              key={event.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <div className="h-52 bg-[#EADBC8] flex justify-center items-center">

                <FaCalendarCheck
                  size={80}
                  className="text-[#6F4E37]"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#5C4033]">

                  {event.title}

                </h3>

                <div className="flex items-center gap-2 mt-4 text-gray-600">

                  <FaMapMarkerAlt />

                  {event.location}

                </div>

                <p className="mt-3 text-gray-600">

                  📅 {event.date}

                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-2xl font-bold text-[#6F4E37]">

                    {event.price}

                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">

                    <FaStar />

                    4.8

                  </div>

                </div>

                <button className="w-full mt-6 bg-[#6F4E37] text-white py-3 rounded-xl hover:bg-[#5C4033] transition">

                  Book Now

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;