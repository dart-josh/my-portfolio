// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Build responsive, modern, and accessible websites using cutting-edge frontend technologies like React, Next.js, Tailwind CSS, and more. From landing pages to dynamic interfaces, I deliver fast, mobile-friendly solutions optimized for performance and user experience.",
    link: "/",
  },
  {
    id: "02",
    title: "Backend Development",
    description: "Design and develop robust server-side applications with scalable APIs, secure authentication, and seamless database integrations using Node.js, Express, PHP, or Python. Perfect for powering web apps, admin systems, and real-time platforms.",
    link: "/",
  },
  {
    id: "03",
    title: "IT & DevOps Support",
    description: "Set up and manage your hosting environment, domains, servers, and deployment pipelines. I provide SSL integration, DNS setup, backups, performance tuning, and DevOps workflows to keep your site secure, fast, and always online.",
    link: "/",
  },
  {
    id: "04",
    title: "Mobile & Hybrid App Development",
    description: "Create beautiful cross-platform mobile apps using Flutter. I also convert existing web apps into mobile versions, integrate backend APIs, and deliver sleek mobile experiences for both Android and iOS devices.",
    link: "/",
  },
  {
    id: "05",
    title: "Database & Cloud Services",
    description: "Design efficient data structures, manage and migrate databases (MongoDB, MySQL), and integrate cloud platforms like Firebase, Supabase, or AWS. Ideal for projects needing real-time data, user management, or scalable storage solutions.",
    link: "/",
  },
  {
    id: "06",
    title: "API Integration & Third-Party Services",
    description: "Seamlessly connect your application with external APIs and services like payment gateways, email providers, social media platforms, and more. I help integrate tools like Stripe, Paystack, Google Maps, SendGrid, REST APIs, and GraphQL to enhance your app’s capabilities and deliver richer user experiences.",
    link: "/",
  },
  {
    id: "07",
    title: "Automation & Scripting",
    description: "Streamline your workflow with custom scripts and tools using Python or Node.js. Whether it’s automating tasks, scraping web data, or creating custom CLI utilities, I help you save time and reduce repetitive work.",
    link: "/",
  },
  {
    id: "08",
    title: "Authentication & Security",
    description: "Implement secure login systems with JWT, OAuth, or social logins. Add role-based access, two-factor authentication, and essential protections to guard your app against unauthorized access and common vulnerabilities.",
    link: "/",
  },
  {
    id: "09",
    title: "Technical Consulting & Support",
    description: "Get expert guidance on architecture, tech stack selection, and project planning. I offer code reviews, debugging help, documentation support, and ongoing technical advice to ensure your project runs smoothly from start to finish.",
    link: "/",
  },
  {
    id: "10",
    title: "Optional Add-ons (High Value)",
    description: "Enhance your project with features like payment integration (Stripe, Paystack), email notifications, analytics tracking, SEO, multi-language support, or real-time chat systems — tailored to boost functionality and engagement.",
    link: "/",
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-15">
      {services.map((service, i) => {
        const delay = 0.4 * i;
        return (
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: delay }}
              className="w-full group border-b border-white/20 pb-7 space-y-3"
            >
              <div className="flex justify-between items-center">
                <div className="text-4xl sm:text-5xl font-bold text-outline text-outline-hover transition duration-500">
                  {service.id}
                </div>
                <div className="size-[40px] md:size-[50px] rounded-full bg-slate-100 group-hover:bg-teal-500 transition duration-500 flex justify-center items-center cursor-pointer">
                  <BsArrowDownRight
                    size={20}
                    className="hover:-rotate-45 transition duration-300"
                  />
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-semibold leading-none text-white group-hover:text-teal-500 transition duration-500">
                {service.title}
              </div>

              <div className="text-white/60">{service.description}</div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default Services;
