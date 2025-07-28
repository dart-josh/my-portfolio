import { Download} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube,  } from "react-icons/bs";
import { Link } from "react-router-dom";

const profile = [
  { title: "Years of experience", value: "8" },
  { title: "Projects comleted", value: "26" },
  { title: "Technologies mastered", value: "12" },
  { title: "Code commits", value: "500" },
];

const cv_link = 'https://drive.google.com/file/d/1fX-zEY4-JPJ9r8sDq99sgF-Kald7PaWN/view?usp=drive_link';
const github_link = 'https://github.com/dart-josh';
const linkedin_link = 'https://www.linkedin.com/in/adelooye-joshua-3b66b1159';
const youtube_link = '';
const x_link = '';

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:items-center lg:flex-row gap-10 xl:gap-20 w-full">
        {/* short info */}
        <div className="order-2">
          <MyInfo />
        </div>

        {/* image */}
        <div className="order-1 lg:order-2">
          <Image />
        </div>
      </div>

      {/* profile details */}
      <ProfileDetails />
    </div>
  );
};

// details
const MyInfo = () => {
  return (
    <div className="space-y-8 flex flex-col items-center lg:items-start">
      <div className="font-bold flex flex-col items-center lg:items-start">
        <div className="text-[16px] font-semibold text-gray-300 mb-1 sm:mb-3">
          Softare Developer
        </div>
        <span className="text-white text-2xl sm:text-4xl sm:mb-1">
          Hello I'm
        </span>
        <span className="text-teal-500 text-3xl sm:text-5xl">
          Joshua Adelooye
        </span>
      </div>

      <div className="text-gray-300 text-sm sm:text-[16px] max-w-lg flex flex-col gap-1 sm:gap-2 items-center text-center lg:text-start leading-6">
        <span>
          I excel at crafting elegant digital experience and bringing brilliant
          ideas to reality
        </span>
        {/* <br /> */}
        <span>
          I am proficient in various programming languages and technologies.
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 sm:pt-4">
        <Link to={cv_link} target="_blank" rel="noopener noreferrer" className="border border-teal-500/80 cursor-pointer duration-300 rounded-3xl py-1.5 px-5 bg-transparent hover:bg-teal-500/80 text-teal-500/80 inline-flex w-[200px] justify-center hover:text-white font-semibold items-center gap-4 transition">
          DOWNLOAD CV
          <Download size={22} />
        </Link>

        {/* socials */}
        <div className="flex gap-3.5 sm:gap-4 items-center px-2 sm:px-0">
          {/* github */}
          <Link to={github_link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-teal-500/80 cursor-pointer duration-300 size-9 flex items-center justify-center transition bg-transparent hover:bg-teal-500/80 text-teal-500/80 hover:text-white font-semibold">
            <BsGithub size={19} />
          </Link>

          {/* linkedin */}
          <Link to={linkedin_link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-teal-500/80 cursor-pointer duration-300 size-9 flex items-center justify-center transition bg-transparent hover:bg-teal-500/80 text-teal-500/80 hover:text-white font-semibold">
            <BsLinkedin size={19} />
          </Link>

          {/* youtube */}
          <Link to={youtube_link} className="rounded-full border border-teal-500/80 cursor-pointer duration-300 size-9 flex items-center justify-center transition bg-transparent hover:bg-teal-500/80 text-teal-500/80 hover:text-white font-semibold">
            <BsYoutube size={19} />
          </Link>

          {/* x */}
          <Link to={x_link} className="rounded-full border border-teal-500/80 cursor-pointer duration-300 size-9 transition flex items-center justify-center bg-transparent hover:bg-teal-500/80 text-teal-500/80 hover:text-white font-semibold">
            <BsTwitterX size={19} />
          </Link>
        </div>
      </div>
    </div>
  );
};

// image
const Image = () => {
  return (
    <div className="w-[280px] sm:w-[300px] mx-auto lg:w-full relative">
      <div className="absolute size-[280px] sm:size-[300px] lg:size-[500px] rounded-full overflow-hidden flex justify-center pt-15 lg:pt-25 items-end w-full">
        <img
          src="/profile.webp"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      <motion.svg
        className="size-[280px] sm:size-[300px] lg:size-[500px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx={"253"}
          cy={"253"}
          r={"250"}
          stroke={"#00BBA7"}
          strokeWidth={"4"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 258 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.circle>
      </motion.svg>
    </div>
  );
};

// details
const ProfileDetails = () => {
  return (
    <div className="mt-15 sm:mt-25 lg:w-full grid grid-cols-2 md:grid-cols-4 justify-between gap-y-6 md:gap-x-6">
      {profile.map((detail, i) => (
        <div key={i} className="flex items-center gap-2 text-white">
          <span className="text-3xl sm:text-5xl font-bold">
            <CountUp end={detail.value} duration={2.5} delay={1.4} enableScrollSpy  />
            
            </span>
          <span className="max-w-[60px] sm:max-w-[80px] leading-4 text-[12px] sm:text-[16px]">
            {detail.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;
