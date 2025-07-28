import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const projects = [
  {
    id: "01",
    title: "Dz E-Store",
    description:
      "Dz E-Store is a Windows and web-based POS application tailored for small businesses, offering an efficient way to manage sales operations. It provides essential tools for tracking transactions, organizing inventory, and enhancing the overall sales process, making business management smoother and more effective.",
    statck: ["Flutter", "JavaScript", "Node.js", "MongoDB"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "02",
    title: "Dz Ride",
    description:
      "Dz Ride is a convenient taxi booking app that connects users with local drivers for reliable, on-demand rides. With easy-to-use features, it allows passengers to book, track, and pay for rides seamlessly, providing a fast and efficient transportation solution.",
    statck: ["Flutter", "Firebase", "Google Maps SDK"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "03",
    title: "O3 Dispatch",
    description:
      "O3 Dispatch is a user-friendly food ordering app that connects users to their favorite local restaurants for quick and reliable delivery. It offers an easy way to browse menus, place orders, and enjoy fast service, bringing delicious meals straight to the user's door.",
    statck: ["Flutter", "Firebase", "Google Maps SDK"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "04",
    title: "DB Store",
    description:
      "DB Store is a Windows and web-based POS application tailored for small businesses, offering an efficient way to manage sales operations. It provides essential tools for tracking transactions, organizing inventory, and enhancing the overall sales process, making business management smoother and more effective.",
    statck: ["Flutter", "Firebase"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "05",
    title: "Lounge DB",
    description:
      "Lounge DB is a versatile, cross-platform software solution designed for hotels, bars, restaurants, and lounges to streamline inventory management, sales, and organization. It simplifies operations, making it easy for establishments to keep track of stock, manage orders, and optimize their workflow.",
    statck: ["Flutter", "Firebase"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "06",
    title: "Hookflix",
    description:
      "Hookflix is an online movie streaming app that provides users with a diverse selection of films to watch on demand, similar to Netflix. It includes an admin section for easy video uploading and management, making content organization seamless for administrators.",
    statck: ["Flutter", "Firebase"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "07",
    title: "Delightsome Software [PRIVATE]",
    description:
      "Delightsome Software is a custom-built solution designed for a juice and smoothie production company. Featuring a local server and database, it optimizes workflows by managing inventory, recording production and sales, and providing sales analysis, making operations efficient and organized.",
    statck: ["Flutter", "Node.js", "JavaScript", "Dart", "MongoDB"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "08",
    title: "Delightsome Website [PRIVATE]",
    description:
      "Delightsome Website is the ultimate online platform for juice and smoothie lovers. Designed for convenience and freshness, this user-friendly website enables customers to effortlessly browse a wide range of freshly made juices and smoothies, customize their orders, and have them delivered straight to their doorsteps. Whether you’re looking for a refreshing fruit blend or a nutrient-packed smoothie, Delightsome Website makes it easy to enjoy healthy, delicious beverages with just a few clicks. With a seamless ordering experience, reliable delivery, and top-quality ingredients, Delightsome Website is your go-to solution for satisfying your thirst for fresh, vibrant drinks—anytime, anywhere.",
    statck: ["React", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "09",
    title: "Heritage Fitness Software [PRIVATE]",
    description:
      "Heritage Fitness Software is an intuitive, all-in-one platform designed to optimize operations for fitness organizations, health clinics, and wellness centers. It provides real-time updates to efficiently manage client and staff data, track attendance, and monitor performance. Key features include a digital attendance system, a clinic management module for secure, paperless patient file handling, and tools for tracking doctor progress. This comprehensive solution streamlines workflows, reduces errors, and enhances productivity, improving service delivery for both clients and healthcare professionals.",
    statck: ["React", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "10",
    title: "Dz Poker Hub",
    description:
      "Dz Poker Hub is an exciting digital poker platform that allows users to deposit funds and play poker in real-time against other players. With a seamless, user-friendly interface, players can manage their balances and engage in live poker games, using their software balance to place bets and participate in various poker games. The platform also features a dedicated Dealer Section, where the dealer can manage and control the flow of the game, ensuring smooth gameplay and fair dealing for all participants. Dz Poker Hub combines the thrill of poker with the convenience of digital play, offering a dynamic and secure environment for poker enthusiasts.",
    statck: ["Flutter", "Firebase"],
    image: "",
    project_link: "",
    github_link: "",
  },
  {
    id: "11",
    title: "Dz Sports Hub",
    description:
      "Dz Sports Hub is a comprehensive sports results platform designed specifically for schools. It allows students, faculty, and staff to easily access information about the school’s sports programs, view upcoming events, and track results from various sporting activities. With a user-friendly interface, Dz Sports Hub keeps everyone up-to-date on game schedules, results, and achievements, fostering a stronger sense of community and school spirit. Whether you're looking to follow a particular team, check event dates, or see how your favorite sports are performing, Dz Sports Hub makes it simple to stay informed and engaged with all the athletic activities at your school.",
    statck: ["Flutter", "Firebase", "Node.js", "JavaScript", "Dart"],
    image: "",
    project_link: "",
    github_link: "",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col lg:flex-row gap-y-3 gap-x-10 w-full items-center pb-10">
      <div className="w-full order-1 lg:order-none">
        <ProjectDetails project={projects[current]} />
      </div>

      <div className="w-full">
        <ImageSlider project={projects[current]} next={next} prev={prev} />
      </div>
    </div>
  );
};

const ProjectDetails = ({ project }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        className="space-y-6 w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-5xl font-bold text-outline">{project.id}</div>

        <div className="text-white font-semibold text-xl sm:text-2xl">
          {project.title}
        </div>

        <div className="text-white/50">{project.description}</div>

        <div className="flex flex-wrap gap-2 text-teal-500">
          {project.statck.map((stac, i) => (
            <span
              key={i}
              className="hover:underline transition-all duration-500"
            >
              {stac} {(i + 1 !== project.statck.length) && ','}
            </span>
          ))}
        </div>

        <div className="w-full border-b border-white/30"></div>

        <div className="flex gap-3">
          {project.project_link && (
            <Link
              to={project.project_link}
              className="size-[40px] flex items-center justify-center rounded-full bg-gray-700/70 text-white hover:rotate-45 transition-all duration-300 hover:text-teal-500"
            >
              <BsArrowUpRight size={20} />{" "}
            </Link>
          )}

          {project.github_link && (
            <Link
              to={project.github_link}
              className="size-[40px] flex items-center justify-center rounded-full bg-gray-700/70 text-white hover:scale-105 transition-all duration-300 hover:text-teal-500"
            >
              <BsGithub size={20} />{" "}
            </Link>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ImageSlider = ({ project, prev, next }) => {
  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col gap-4">
      <div
        {...handlers}
        className={`relative overflow-hidden rounded-xl h-[400px] w-full max-w-3xl mx-auto touch-pan-y`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={project.id}
            src={project.image || "/placeholder.webp"}
            alt={`Slide ${project.id}`}
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex gap-1 justify-end items-center">
        <button
          onClick={prev}
          className="bg-teal-500 text-black p-2 rounded-tl rounded-bl hover:bg-teal-500/70 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className=" bg-teal-500 text-black p-2 rounded-tr rounded-br hover:bg-teal-500/70 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Projects;
