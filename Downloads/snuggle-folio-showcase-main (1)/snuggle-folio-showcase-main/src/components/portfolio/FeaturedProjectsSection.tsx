import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const featured = [
  {
    title: "Automated Irrigation System",
    description: "Smart irrigation system using MERN stack that monitors soil moisture and weather data to make data-driven decisions, reducing water wastage by up to 60%.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "border-emerald-500/30",
  },
  {
    title: "Local Business Directory",
    description: "A platform to search, filter, and explore nearby businesses with a secure admin panel for listing management and optimized performance.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    color: "from-sky-500/20 to-blue-500/10",
    accent: "border-sky-500/30",
  },
  {
    title: "Real-Time Chat App",
    description: "A real-time communication platform enabling instant messaging with live updates and seamless user experience.",
    tags: ["React.js", "Node.js", "Socket.io"],
    color: "from-amber-500/20 to-orange-500/10",
    accent: "border-amber-500/30",
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mb-12">
            Real projects I designed and built — hover for details
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 120} direction="scale">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl border ${project.accent} bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5`}
              >
                <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center p-4`}>
                  <span className="text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-200 text-center">
                    {project.title}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/Sagarpatidar407" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
