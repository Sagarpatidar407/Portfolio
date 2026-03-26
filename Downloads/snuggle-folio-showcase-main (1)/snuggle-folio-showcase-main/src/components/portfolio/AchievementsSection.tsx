import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, FolderGit2, Trophy, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// ── Card config ──────────────────────────────────────────────
const stats = [
  {
    icon: Code2,
    value: 98,
    suffix: "+",
    label: "Problems Solved",
    sublabel: "GFG + Codolio combined",
    gradient: "from-[#1d9bf0] to-[#0d6efd]",        // blue — matches reference box 1
    iconBg: "bg-[#1d9bf0]",
    link: "https://www.geeksforgeeks.org/user/sagarpatidar2209/",
  },
  {
    icon: FolderGit2,
    value: 3,
    suffix: "",
    label: "Projects Built",
    sublabel: "MERN · PHP · React",
    gradient: "from-[#0d6efd] to-[#0a58ca]",        // slightly darker blue
    iconBg: "bg-[#0d6efd]",
    link: "https://github.com/Sagarpatidar407",
  },
  {
    icon: Trophy,
    value: 6894,
    suffix: "",
    prefix: "#",
    label: "Institute Rank",
    sublabel: "GFG · LPU Jalandhar",
    gradient: "from-[#f97316] to-[#ea580c]",        // orange — matches reference box 3
    iconBg: "bg-[#f97316]",
    link: "https://www.geeksforgeeks.org/user/sagarpatidar2209/",
  },
  {
    icon: Star,
    value: 226,
    suffix: "",
    label: "Coding Score",
    sublabel: "GeeksforGeeks",
    gradient: "from-[#22c55e] to-[#16a34a]",        // green — matches reference box 4
    iconBg: "bg-[#22c55e]",
    link: "https://www.geeksforgeeks.org/user/sagarpatidar2209/",
  },
];

// ── Animated counter ─────────────────────────────────────────
const Counter = ({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ── Section ──────────────────────────────────────────────────
const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Achievements &amp; Milestones
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Numbers that showcase my journey and dedication to crafting
              exceptional digital experiences
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100} direction="scale">
              <motion.a
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-2xl bg-[#161616] border border-white/5 p-6 overflow-hidden cursor-pointer hover:border-white/10 transition-all duration-300"
              >
                {/* subtle gradient glow behind card on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${stat.gradient} transition-opacity duration-300 pointer-events-none`} />

                {/* Icon badge */}
                <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center mb-5 shadow-lg`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>

                {/* Big animated number */}
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-none">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>

                {/* Labels */}
                <div className="mt-3">
                  <div className="text-sm font-medium text-foreground/80">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</div>
                </div>

                {/* Small watermark icon bottom-right */}
                <stat.icon className="absolute bottom-4 right-4 w-12 h-12 text-white/[0.04] group-hover:text-white/[0.07] transition-all duration-300" />
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* Profile links row */}
        <AnimatedSection delay={400}>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            {[
              { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/sagarpatidar2209/", color: "text-[#2f8d46]" },
              { label: "Codolio", href: "https://codolio.com/profile/sgr_ptdr", color: "text-[#a78bfa]" },
              { label: "GitHub", href: "https://github.com/Sagarpatidar407", color: "text-foreground" },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${p.color} hover:underline underline-offset-4 transition-all duration-200 opacity-70 hover:opacity-100`}
              >
                {p.label} ↗
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AchievementsSection;
