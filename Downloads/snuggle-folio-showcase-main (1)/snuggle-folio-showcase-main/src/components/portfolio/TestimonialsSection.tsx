import { motion } from "framer-motion";
import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "Programming in C++: Data Structure and Algorithms",
    issuer: "Centre for Professional Enhancement",
    date: "Aug 2025",
    description: "Comprehensive certification covering advanced data structures and algorithmic problem-solving using C++.",
  },
  {
    title: "Complete Web Development Course",
    issuer: "Udemy",
    date: "Oct 2024",
    description: "Full-stack web development covering HTML, CSS, JavaScript, Node.js, React, and database technologies.",
  },
  {
    title: "Data Structures and Algorithms Training",
    issuer: "Lovely Professional University",
    date: "Jun – Aug 2025",
    description: "Intensive DSA training program focused on competitive programming and algorithmic thinking.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Certifications & Training
          </h2>
          <p className="text-muted-foreground mb-12">
            Credentials that validate my skills and continuous learning
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 120} direction="scale">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/5 bg-card p-6 flex flex-col h-full hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex gap-2 items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-primary font-medium">{cert.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                  {cert.description}
                </p>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="text-xs text-muted-foreground">
                    Issued by <span className="text-secondary-foreground font-medium">{cert.issuer}</span>
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

export default TestimonialsSection;
