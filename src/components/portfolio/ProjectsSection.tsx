import { motion } from "framer-motion";
import { Droplets, Store, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Automated Irrigation Management System",
    role: "Full-Stack Developer",
    tech: "MongoDB, Express.js, React.js, Node.js",
    period: "MERN Stack",
  },
  {
    icon: <Store className="w-5 h-5" />,
    title: "Local Business Directory",
    role: "Full-Stack Developer",
    tech: "HTML, CSS, PHP, MySQL",
    period: "Web App",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Real-Time Chat Application",
    role: "Full-Stack Developer",
    tech: "React.js, Node.js, Socket.io",
    period: "Real-Time App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Projects & Experience
          </h2>
        </AnimatedSection>

        <div className="space-y-2">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 100}>
              <motion.div
                whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.03)" }}
                transition={{ duration: 0.2 }}
                className="group flex items-start gap-5 py-6 px-5 -mx-5 rounded-2xl border border-transparent hover:border-white/5 transition-all duration-200 cursor-pointer"
              >
                <div className="mt-1 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.role} | Tech: {project.tech}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap hidden sm:block font-mono">
                  {project.period}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
