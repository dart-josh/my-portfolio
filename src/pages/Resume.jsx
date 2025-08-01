import { Circle } from "lucide-react";
import { useRef, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPython,
  FaJs,
  FaPhp,
  FaGit,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import Tooltip from "../components/Tooltip";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const experience = [
  {
    startDate: "2023",
    endDate: "PRESENT",
    role: "ICT Manager",
    company: "Delightsome Heritage Intl.",
    sector: "Health, Fitness & Nutrition",
  },
  {
    startDate: "2020",
    endDate: "PRESENT",
    role: "IT Consultant",
    company: "",
    sector: "Cybersecurity, Network management, Software development,",
  },
  {
    startDate: "2021",
    endDate: "2023",
    role: "Senior Software Developer",
    company: "DB Store",
    sector: "E-commerce",
  },
  {
    startDate: "2020",
    endDate: "",
    role: "Mobile App Developer",
    company: "DB Store",
    sector: "E-commerce startup",
  },
  {
    startDate: "2020",
    endDate: "",
    role: "Freelance Web Developer",
    company: "",
    sector: "REMOTE",
  },
  {
    startDate: "2019",
    endDate: "2022",
    role: "Technical Instructor / Coding Mentor",
    company: "",
    sector: "EdTech (Educational Technology)",
  },
];

const education = [
  {
    startDate: "2023",
    endDate: "",
    role: "BSc Information Technology",
    company: "National Open University (NOUN)",
    sector: "",
  },
];

const skills = [
  {
    icon: <FaJs />,
    label: "JavaScript",
  },
  {
    icon: <FaReact />,
    label: "ReactJS",
  },
  {
    icon: <FaNodeJs />,
    label: "Node.js",
  },
  {
    icon: <SiNextdotjs />,
    label: "Next.js",
  },
  {
    icon: <SiFlutter />,
    label: "Flutter",
  },
  {
    icon: <FaHtml5 />,
    label: "HTML",
  },
  {
    icon: <FaCss3 />,
    label: "CSS",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
  },
  {
    icon: <SiMongodb />,
    label: "MongoDB",
  },
  {
    icon: <SiMysql />,
    label: "MySQL",
  },
  {
    icon: <FaPython />,
    label: "Python",
  },
  {
    icon: <FaPhp />,
    label: "PHP",
  },
];

const profile = [
  {
    label: "Name",
    value: "Joshua Adelooye",
  },
  {
    label: "Phone",
    value: "(+234) 901 515 3464",
  },
  {
    label: "Experience",
    value: "8+ Years",
  },
  {
    label: "Skype",
    value: "",
  },
  {
    label: "Nationality",
    value: "Nigerian",
  },
  {
    label: "Email",
    value: "joshadework@gmail.com",
  },
  {
    label: "Freelance",
    value: "Available",
  },
  {
    label: "Languages",
    value: "English",
  },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showRaw, setShowRaw] = useState(false);

  const contentRef = useRef(null);

  const tabs = [
    <ExperienceTab key="experience" ref={contentRef} />,
    <EducationTab key="education" ref={contentRef} />,
    <SkillTab
      key="skill"
      showRaw={showRaw}
      setShowRaw={setShowRaw}
      ref={contentRef}
    />,
    <AboutTab key="about" ref={contentRef} />,
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-20 w-full">
      {/* selector */}
      <Selector
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showRaw={showRaw}
        contentRef={contentRef}
      />

      {/* content */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab} ${showRaw ? "label" : "icon"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full pb-20"
          >
            {tabs[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// selector
const Selector = ({ activeTab, setActiveTab, showRaw, contentRef }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeTab} ${showRaw ? "label" : "icon"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="w-full pb-20"
      >
        <div className="space-y-10 max-w-[370px] w-full mx-auto">
          <div className="space-y-6">
            <div className="text-4xl md:text-5xl text-white">Why hire me?</div>
            <div className="text-white/60">
              I bring a strong blend of technical skill, creativity, and
              reliability. From frontend polish to backend performance, I build
              clean, scalable solutions that deliver real value—on time and with
              attention to detail.
            </div>
          </div>

          <div className="space-y-3">
            {["Experience", "Education", "Skills", "About me"].map(
              (tile, i) => (
                <div
                  onClick={() => {
                    setActiveTab(i);
                    contentRef.current.scrollIntoView({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  key={i}
                  className={`w-full h-[40px] flex items-center justify-center   hover:text-black cursor-pointer font-semibold hover:bg-teal-500 transition duration-300 rounded ${activeTab === i ? "bg-teal-500 text-black" : "text-white bg-gray-700"}`}
                >
                  {tile}
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// experience
const ExperienceTab = ({ ref }) => {
  return (
    <div className="w-full space-y-10 pt-[85px] lg:pt-0" ref={ref}>
      {/* title */}
      <div className="space-y-6">
        <div className="text-4xl md:text-5xl text-white">My experience</div>
        <div className="text-white/60">
          Over the years, I’ve worked on a wide range of projects—both
          independently and in collaboration with teams—delivering functional,
          user-focused solutions across web and mobile platforms. My experience
          spans from building dynamic user interfaces and scalable backend
          systems to integrating APIs, managing databases, and deploying
          fullstack applications. Each project has strengthened my
          problem-solving skills and deepened my understanding of modern
          development workflows.
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[400px] overflow-y-auto">
        {experience.map((tile, i) => (
          <div
            key={i}
            className="bg-gray-700/50 rounded-md p-6 flex flex-col gap-1"
          >
            {/* duration */}
            <div className="flex gap-2 text-teal-500">
              <span>{tile.startDate}</span>
              {tile.endDate && <span className="text-white">-</span>}
              <span>{tile.endDate}</span>
            </div>

            {/* role */}
            <div className="text-white text-xl leading-6 font-semibold mb-2">
              {tile.role}
            </div>

            {/* company */}
            <div className="text-white/80">{tile.company}</div>

            {tile.sector && (
              <div className="flex items-center gap-2">
                <Circle size={6} fill="#00BBA7" stroke="#00BBA7" />
                <div className="text-white/50 leading-none text-sm">
                  {tile.sector}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// education
const EducationTab = ({ ref }) => {
  return (
    <div className="w-full space-y-10 pt-[85px] lg:pt-0" ref={ref}>
      {/* title */}
      <div className="space-y-6">
        <div className="text-4xl md:text-5xl text-white">My Educataion</div>
        <div className="text-white/60">
          Although I'm a self-taught developer, I’ve invested countless hours
          into learning through hands-on projects, online courses,
          documentation, and real-world problem-solving. My approach to learning
          is practical and continuous, allowing me to stay up-to-date with the
          latest tools and best practices in software development.
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[400px] overflow-y-auto">
        {education.map((tile, i) => (
          <div
            key={i}
            className="bg-gray-700/50 rounded-md p-6 flex flex-col gap-1"
          >
            {/* duration */}
            <div className="flex gap-2 text-teal-500">
              <span>{tile.startDate}</span>
              {tile.endDate && <span className="text-white">-</span>}
              <span>{tile.endDate}</span>
            </div>

            {/* role */}
            <div className="text-white text-xl leading-6 font-semibold mb-2">
              {tile.role}
            </div>

            {/* company */}
            <div className="text-white/80">{tile.company}</div>

            {tile.sector && (
              <div className="flex items-center gap-2">
                <Circle size={6} fill="#00BBA7" stroke="#00BBA7" />
                <div className="text-white/50 leading-none text-sm">
                  {tile.sector}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// skills
const SkillTab = ({ showRaw, setShowRaw, ref }) => {
  return (
    <div className="w-full space-y-10 pt-[85px] lg:pt-0" ref={ref}>
      {/* title */}
      <div className="space-y-6">
        <div className="text-4xl md:text-5xl text-white">My skills</div>
        <div className="text-white/60">
          I specialize in building fullstack web and mobile applications using
          modern technologies and frameworks. With experience across frontend,
          backend, and database systems, I’m able to craft scalable,
          high-performance solutions tailored for real-world use.
          <br />
          <br />
          Below are some of the technologies I’ve mastered:
        </div>
      </div>

      {/* content */}
      <div className={`grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-5`}>
        {skills.map((skill, i) => (
          <div key={i}>
            <Tooltip text={showRaw ? "" : skill.label}>
              <div
                className={`bg-gray-700/50 rounded-md p-4 sm:p-6 flex items-center justify-center text-white/90 hover:text-teal-500 transition duration-300 hover:scale-105 `}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={showRaw ? "label-" + i : "icon-" + i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`${showRaw ? "text-xs sm:text-[15px]" : "text-4xl sm:text-5xl"}`}
                  >
                    {showRaw ? skill.label : skill.icon}
                  </motion.span>
                </AnimatePresence>
              </div>
            </Tooltip>
          </div>
        ))}
      </div>

      <div
        onClick={() => setShowRaw(!showRaw)}
        className="text-teal-500 underline flex"
      >
        <Tooltip text={showRaw ? "Label" : "Icon"} position="right">
          {showRaw ? "Show Icon" : "Show Label"}
        </Tooltip>
      </div>
    </div>
  );
};

// about
const AboutTab = ({ ref }) => {
  return (
    <div className="w-full space-y-10 pt-[85px] lg:pt-0" ref={ref}>
      {/* title */}
      <div className="space-y-6">
        <div className="text-4xl md:text-5xl text-white">About me</div>
        <div className="text-white/60">
          I'm a self-taught fullstack developer passionate about building
          responsive, user-friendly, and visually appealing software. I take
          pride in writing clean, maintainable code and turning ideas into
          polished digital experiences.
          <br />
          <br />
          When I'm not coding, I'm usually exploring new technologies,
          sharpening my skills, or experimenting with something creative.
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {profile.map((detail, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:gap-3">
            <div className="text-white/60">{detail.label}:</div>
            <div className="text-white font-semibold">{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
