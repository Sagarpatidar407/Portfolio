import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import hero3d from "@/assets/hero-3d.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/Sagarpatidar407", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sagarpatidar01", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sagarpatidar407@gmail.com", label: "Email" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-paddin">
      <div className="container-narrow w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Hi, Sagar here
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-muted-foreground text-md  max-w-lg leading-relaxed"
            >
              Full-Stack Developer passionate about building innovative web
              applications and solving real-world problems with clean, efficient code.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <ul className="space-y-2.5 text-secondary-foreground text-[15px] leading-relaxed">
                <li>B.Tech in Computer Science & Engineering at Lovely Professional University</li>
                <li>Focused on React.js, Node.js, and MERN stack development</li>
                <li>Skilled in C++, Java, JavaScript, PHP, and SQL</li>
                <li>Passionate about problem-solving, critical thinking, and building impactful projects</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8">
              <Link
                to="/work"
                className="inline-flex items-center px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200 active:scale-[0.97] shadow-lg shadow-white/10"
              >
                View My Work
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3 rounded-full glass text-sm font-medium text-foreground hover:bg-white/10 transition-all duration-200 active:scale-[0.96]"
              >
                View Resume
              </a>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/10"
          >
            <img
              src={hero3d}
              alt="3D geometric art"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
