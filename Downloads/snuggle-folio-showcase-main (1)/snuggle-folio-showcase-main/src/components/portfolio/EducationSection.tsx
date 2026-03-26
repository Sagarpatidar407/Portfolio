import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import lpuLogo from "@/assets/Lovely_Professional_University_logo.png";
import sophiaLogo from "@/assets/sophia logo.jpg";
import vardhamanLogo from "@/assets/vardhaman logo.jpg";

const educationData = [
  {
    logo: lpuLogo,
    institution: "Lovely Professional University",
    degree: "B.Tech CSE Student",
    duration: "August 2023 - Present",
  },
  {
    logo: sophiaLogo,
    institution: "Sophia Senior Secondary School",
    degree: "Intermediate",
    duration: "April 2020 - March 2022",
  },
  {
    logo: vardhamanLogo,
    institution: "Vardhaman Higher Secondary School",
    degree: "Matriculation",
    duration: "April 2018 - March 2020",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Education
          </h2>
        </AnimatedSection>

        <div className="space-y-2">
          {educationData.map((item, i) => (
            <AnimatedSection key={item.institution} delay={i * 100}>
              <motion.div
                whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.03)" }}
                transition={{ duration: 0.2 }}
                className="group flex items-center justify-between gap-5 py-6 px-5 -mx-5 rounded-2xl border border-transparent hover:border-white/5 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.degree}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-muted-foreground whitespace-nowrap hidden sm:block font-mono">
                  {item.duration}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
