import React from "react";
import {
  FaCode,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaCode />,
      title: "Languages",
      items: ["C", "SQL", "JavaScript"],
    },
    {
      icon: <FaLayerGroup />,
      title: "Frameworks",
      items: ["React.js", "Node.js", "Express.js"],
    },
    {
      icon: <FaTools />,
      title: "Tools & Technologies",
      items: [
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Postman",
        "MongoDB",
        "MongoDB Compass",
        "MongoDB Shell",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h1 className="text-5xl font-bold text-white">
            Skills & <span className="text-sky-500">Technologies</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Technologies and tools I use to build modern web applications.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white text-3xl mb-6">

                {skill.icon}

              </div>

              {/* Title */}

              <h2 className="text-2xl font-bold text-white mb-8">

                {skill.title}

              </h2>

              {/* Skills */}

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item, i) => (

                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-600 text-sky-300 hover:bg-sky-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;