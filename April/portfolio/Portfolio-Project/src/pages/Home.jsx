import React from "react";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";

import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="bg-[#020617] overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* Feature Cards */}
      <FeatureCards />

      {/* Other Sections */}

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="achievement">
        <Achievements />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
export default Home;