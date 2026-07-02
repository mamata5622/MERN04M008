import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

function FeatureCards() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive and modern user interfaces using React.js, Tailwind CSS, HTML and JavaScript.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Creating secure REST APIs and scalable server-side applications using Node.js and Express.js.",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      description:
        "Designing efficient database structures using MongoDB and MySQL with optimized queries.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Developing mobile-first websites that provide a seamless experience across all devices.",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />

      <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h1 className="text-5xl font-bold text-white">
            What <span className="text-sky-500">I Do</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Technologies and services I use to build modern web applications.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-lg
                border
                border-sky-700/40
                rounded-2xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-sky-400
                hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]
              "
            >
              {/* Icon */}

              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white text-3xl mb-6 transition-transform duration-300 group-hover:scale-110">

                {item.icon}

              </div>

              {/* Title */}

              <h2 className="text-2xl font-bold text-white mb-4">

                {item.title}

              </h2>

              {/* Description */}

              <p className="text-gray-400 leading-8">

                {item.description}

              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeatureCards;