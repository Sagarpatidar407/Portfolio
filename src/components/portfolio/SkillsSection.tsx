import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const allSkills = [
  { name: "C", color: "#6E56CF" },
  { name: "C++", color: "#3B82F6" },
  { name: "Java", color: "#F97316" },
  { name: "Python", color: "#22C55E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#EAB308" },
  { name: "Docker", color: "#2496ED" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "SQL", color: "#DC2626" },
  { name: "PHP", color: "#777BB4" },
  { name: "Next.js", color: "#A78BFA" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Express.js", color: "#68D391" },
  { name: "Node.js", color: "#339933" },
  { name: "MySQL", color: "#00758F" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Figma", color: "#F24E1E" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Postman", color: "#FF6C37" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#C9D1D9" },
  { name: "Problem-Solving", color: "#A855F7" },
  { name: "Critical Thinking", color: "#EC4899" },
  { name: "Adaptability", color: "#14B8A6" },
  { name: "Team Work", color: "#F59E0B" },
  { name: "Time Management", color: "#6366F1" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const SkillPill = ({ name, color }: { name: string; color: string }) => (
  <motion.span
    variants={pillVariants}
    whileHover={{
      scale: 1.12,
      y: -6,
      boxShadow: `0 0 20px ${color}55, 0 0 40px ${color}22`,
      borderColor: color,
      transition: { duration: 0.25, ease: "easeOut" },
    }}
    whileTap={{ scale: 0.97 }}
    className="skill-pill"
  >
    {name}
  </motion.span>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding skills-section-bg">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="skills-header">
            <span className="skills-label">WHAT I WORK WITH</span>
            <h2 className="skills-title">
              Skills & Technologies
            </h2>
            <p className="skills-subtitle">
              A curated collection of languages, frameworks, tools, and soft skills I use to build modern digital experiences.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="skills-grid"
        >
          {allSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} color={skill.color} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
