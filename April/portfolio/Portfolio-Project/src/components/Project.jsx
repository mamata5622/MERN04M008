import React from "react";
import {
  FaShoppingCart,
  FaFilm,
  FaCar,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

function Project() {
  const projects = [
    {
      icon: <FaShoppingCart />,
      title: "Blinkit Clone",
      description:
        "Developed a full-stack grocery delivery web application inspired by Blinkit with authentication, shopping cart, order management, and responsive user interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "#",
      live: "#",
    },
    {
      icon: <FaFilm />,
      title: "HD Movies",
      description:
        "A responsive movie streaming interface where users can browse trending movies, search titles, and view movie information with a clean user experience.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      icon: <FaCar />,
      title: "Rental Management System",
      description:
        "Built a complete vehicle rental platform where users can rent vehicles and administrators can manage vehicles, bookings, and customers through an admin dashboard.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="project"
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
            My <span className="text-sky-500">Projects</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Some of the projects I have built during my learning journey.
          </p>
        </div>

        {/* Projects */}

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]"
            >
              {/* Icon */}

              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white text-3xl mb-6">
                {project.icon}
              </div>

              {/* Title */}

              <h2 className="text-2xl font-bold text-white">{project.title}</h2>

              {/* Description */}

              <p className="text-gray-400 mt-5 leading-8">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="flex flex-wrap gap-3 mt-8">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 rounded-full border border-sky-600 bg-sky-500/10 text-sky-300 text-sm"
                  >
                    {tech}
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

export default Project;
