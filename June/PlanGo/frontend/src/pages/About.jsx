import { useState, useEffect, useRef } from "react";
import {
  FaBirthdayCake,
  FaUsers,
  FaGlassCheers,
  FaBriefcase,
  FaHeart,
  FaStar,
  FaBullseye,
  FaEye,
  FaCalendarCheck,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBirthdayCake />,
    title: "Birthday Celebrations",
    description:
      "Create unforgettable birthday parties with beautiful decorations, entertainment, and hassle-free planning.",
  },
  {
    icon: <FaUsers />,
    title: "Meetups",
    description:
      "Host professional or casual meetups that help people connect, learn, and grow together.",
  },
  {
    icon: <FaGlassCheers />,
    title: "Family Gatherings",
    description:
      "Celebrate family moments with customized planning, catering, and venue management.",
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Events",
    description:
      "From conferences to seminars and office celebrations, we make every corporate event seamless.",
  },
];

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;

    const duration = 2000;

    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref}>
      <h2 className="text-5xl font-bold text-white">
        {count}
        {suffix}
      </h2>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-[#FAF7F0]">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="bg-[#EADBC8] text-[#5C4033] px-5 py-2 rounded-full font-semibold">
              About PlanGo
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#5C4033] mt-6 leading-tight">
              Making Every
              <span className="block text-[#B0926A]">
                Celebration Special
              </span>
            </h1>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              At <span className="font-semibold text-[#5C4033]">PlanGo</span>,
              we believe every celebration deserves thoughtful planning and
              unforgettable memories. Whether it's a birthday party, family
              gathering, college event, meetup, corporate function, or festive
              celebration, we make planning simple, organized, and enjoyable.
            </p>

          </div>

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#EADBC8] via-[#D8B38C] to-[#5C4033] flex items-center justify-center shadow-2xl">

              <h1 className="text-5xl font-bold text-white">
                Plan<span className="text-[#FAF7F0]">Go</span>
              </h1>

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-[#5C4033]">
              Who We Are
            </h2>

            <p className="text-gray-600 mt-6 leading-8 max-w-4xl mx-auto">
              PlanGo is an event management platform designed to simplify the
              process of organizing events. We connect organizers and attendees
              through a user-friendly platform that makes event planning,
              registration, and management effortless.
              Our goal is to help people focus on creating memories while we
              handle the planning experience.
            </p>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-[#5C4033]">
            What We Plan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {services.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-[#5C4033] text-white flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-[#5C4033] mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="bg-[#EADBC8] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-[#5C4033]">
            Why Choose PlanGo?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">

            <div className="bg-white rounded-3xl p-8 text-center">

              <FaHeart className="mx-auto text-5xl text-[#5C4033]" />

              <h3 className="text-2xl font-semibold mt-5">
                Personalized Planning
              </h3>

              <p className="mt-4 text-gray-600">
                Every event is customized according to your preferences and
                budget.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 text-center">

              <FaCalendarCheck className="mx-auto text-5xl text-[#5C4033]" />

              <h3 className="text-2xl font-semibold mt-5">
                Easy Management
              </h3>

              <p className="mt-4 text-gray-600">
                Manage registrations, schedules, and attendees from one place.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 text-center">

              <FaStar className="mx-auto text-5xl text-[#5C4033]" />

              <h3 className="text-2xl font-semibold mt-5">
                Trusted Experience
              </h3>

              <p className="mt-4 text-gray-600">
                Our platform is designed to make every event enjoyable and
                stress-free.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          <div className="bg-[#FAF7F0] rounded-3xl p-10 shadow">

            <FaBullseye className="text-5xl text-[#5C4033]" />

            <h2 className="text-3xl font-bold mt-6 text-[#5C4033]">
              Our Mission
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              To simplify event planning through technology and provide a
              seamless platform where organizers and participants can connect
              effortlessly.
            </p>

          </div>

          <div className="bg-[#FAF7F0] rounded-3xl p-10 shadow">

            <FaEye className="text-5xl text-[#5C4033]" />

            <h2 className="text-3xl font-bold mt-6 text-[#5C4033]">
              Our Vision
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              To become the most trusted event management platform where every
              celebration, meeting, and gathering is easy to organize and
              memorable to experience.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="bg-[#5C4033] py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <Counter end={500} suffix="+" />
            <p className="text-[#EADBC8] mt-2">Events Planned</p>
          </div>

          <div>
            <Counter end={1000} suffix="+" />
            <p className="text-[#EADBC8] mt-2">Happy Users</p>
          </div>

          <div>
            <Counter end={50} suffix="+" />
            <p className="text-[#EADBC8] mt-2">Professional Organizers</p>
          </div>

          <div>
            <Counter end={99} suffix="%" />
            <p className="text-[#EADBC8] mt-2">Customer Satisfaction</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold text-[#5C4033]">
          Ready to Plan Your Next Event?
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Join PlanGo today and let us help you create memorable experiences,
          whether it's a birthday celebration, meetup, wedding, corporate
          event, or family gathering.
        </p>

        <button className="mt-10 bg-[#5C4033] text-white px-10 py-4 rounded-full hover:bg-[#3A2D28] transition">
          Get Started
        </button>

      </section>

    </div>
  );
};

export default About;