import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ExternalLink, Github, Check } from "lucide-react";
import FloatingDockDemo from "@/components/floating-dock-demo";

import projectIrrigation from "@/assets/project-irrigation.png";
import projectBusiness from "@/assets/project-business.png";
import projectChat from "@/assets/project-chat.png";
import projectEcommerce from "@/assets/e-com website.png";

interface Project {
  title: string;
  tagline: string;
  about: string;
  features: string[];
  image: string;
  projectUrl: string;
  githubUrl: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Automated Irrigation System",
    tagline: "A smart IoT-powered system for efficient water management and crop monitoring.",
    about:
      "An intelligent irrigation management system built with the MERN stack that automates water distribution based on real-time sensor data. It monitors soil moisture, temperature, and humidity to optimize water usage, helping farmers reduce waste and improve crop yields through data-driven decisions.",
    features: [
      "Real-time sensor data dashboard with live charts",
      "Built with MongoDB, Express.js, React.js, Node.js",
      "Automated zone-based irrigation control",
    ],
    image: projectIrrigation,
    projectUrl: "https://github.com/Sagarpatidar407",
    githubUrl: "https://github.com/Sagarpatidar407",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Local Business Directory",
    tagline: "A platform connecting communities with local businesses and services.",
    about:
      "A comprehensive local business directory that helps users discover and connect with businesses in their area. Features include business listings with detailed profiles, user reviews, category-based search, and an admin panel for business owners to manage their presence.",
    features: [
      "Dynamic search and category filtering",
      "User reviews and ratings system",
      "Built with HTML, CSS, PHP, and MySQL",
    ],
    image: projectBusiness,
    projectUrl: "https://github.com/Sagarpatidar407",
    githubUrl: "https://github.com/Sagarpatidar407",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Real-Time Chat Application",
    tagline: "Instant messaging with real-time updates and a sleek modern interface.",
    about:
      "A real-time chat application powered by WebSockets that enables instant messaging between users. Features a responsive UI with conversation threads, online presence indicators, typing notifications, and message history — delivering a seamless communication experience.",
    features: [
      "Real-time messaging with Socket.io WebSockets",
      "Online status and typing indicators",
      "Built with React.js, Node.js, and Socket.io",
    ],
    image: projectChat,
    projectUrl: "https://github.com/Sagarpatidar407",
    githubUrl: "https://github.com/Sagarpatidar407",
    tech: ["React.js", "Node.js", "Socket.io"],
  },
  {
    title: "E-Commerce Website",
    tagline: "A full-featured online shopping platform with a modern, responsive design.",
    about:
      "A complete e-commerce website featuring product listings, shopping cart functionality, user authentication, and a seamless checkout experience. Built with a focus on clean UI and smooth user interactions, it delivers a professional online shopping experience with category browsing, product search, and responsive design across all devices.",
    features: [
      "Product catalog with category filtering and search",
      "Shopping cart and checkout flow",
      "Responsive design with modern UI/UX",
    ],
    image: projectEcommerce,
    projectUrl: "https://e-commerce-website-ten-gamma-39.vercel.app/Home.html",
    githubUrl: "https://github.com/Sagarpatidar407/E-Commerce-Website",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    rotateY: direction > 0 ? -15 : 15,
  }),
};

const Work = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < projects.length) {
      setCurrentIndex([newIndex, newDirection]);
    }
  };

  const project = projects[currentIndex];

  return (
    <div className="work-page min-h-screen bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="work-bg-glow work-bg-glow--pink" />
      <div className="work-bg-glow work-bg-glow--purple" />

      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link
          to="/"
          className="work-back-link group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center pt-24 pb-8 md:pt-28 md:pb-12"
        >
          <span className="work-label inline-block text-xs font-semibold tracking-[0.25em] uppercase text-purple-400 mb-4">
            Featured Case Studies
          </span>
          <h1 className="work-title text-5xl md:text-7xl font-bold">
            My Work
          </h1>
        </motion.div>

        {/* Slider */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-16 lg:px-24 pb-32">
          <div className="work-slider w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Image Card */}
            <div className="work-image-container relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="work-image-card relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Tagline overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => paginate(-1)}
                    disabled={currentIndex === 0}
                    className="work-nav-btn w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous project"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    disabled={currentIndex === projects.length - 1}
                    className="work-nav-btn w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next project"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <span className="work-counter text-sm font-mono text-white/50">
                  <span className="text-white font-semibold">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  {" / "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Right: Project Details */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="work-details"
              >
                <h2 className="work-project-title text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h2>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">
                    About
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {project.about}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="work-check-icon mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="work-tech-tag px-3 py-1 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <FloatingDockDemo />
    </div>
  );
};

export default Work;
