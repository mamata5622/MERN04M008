import { Link } from "react-router";
import {
  FaCalendarCheck,
  FaHome,
  FaPlusCircle,
  FaCalendarAlt,
  FaTicketAlt,
  FaUsers,
  FaWallet,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";

const OrganizerLayout = ({ isOpen, setIsOpen }) => {
  const menu = [
    { name: "Dashboard", icon: <FaHome />, path: "/organizer/dashboard" },
    {
      name: "Create Event",
      icon: <FaPlusCircle />,
      path: "/organizer/create-event",
    },
    { name: "My Events", icon: <FaCalendarAlt />, path: "/organizer/events" },
    { name: "Bookings", icon: <FaTicketAlt />, path: "/organizer/bookings" },
    { name: "Attendees", icon: <FaUsers />, path: "/organizer/attendees" },
    { name: "Revenue", icon: <FaWallet />, path: "/organizer/revenue" },
    { name: "Settings", icon: <FaCog />, path: "/organizer/settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-[#6F4E37] text-white shadow-xl transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-[#8B7355]">
          <div className="bg-white p-2 rounded-xl">
            <FaCalendarCheck className="text-[#6F4E37] text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Plan<span className="text-[#EADBC8]">Go</span>
            </h1>

            <p className="text-xs tracking-widest uppercase">Organizer</p>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-8 px-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 px-5 py-3 rounded-xl hover:bg-[#8B7355] transition"
            >
              <span className="text-lg">{item.icon}</span>

              {item.name}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="absolute bottom-8 left-4 right-4">
          <button className="w-full flex items-center justify-center gap-3 bg-[#EADBC8] text-[#6F4E37] py-3 rounded-xl hover:bg-white transition">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default OrganizerLayout;
