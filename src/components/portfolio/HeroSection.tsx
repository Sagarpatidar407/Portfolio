import { motion, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import profileImg from "@/assets/profile2.png";

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

/* ─── Animated abstract circles in the background ─── */
const BackgroundRings = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
    {[160, 220, 290, 370].map((size, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-white/[0.04]"
        style={{ width: size, height: size }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
      />
    ))}
  </div>
);

/* ─── Premium oval profile card ─── */
const ProfileCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 22 });
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["15%", "85%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      className="relative cursor-pointer select-none group"
    >
      {/* Animated background rings behind the card */}
      <BackgroundRings />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-[200px] h-[270px] lg:w-[230px] lg:h-[310px]"
      >
        {/* Outer ambient glow — intensifies on hover */}
        <div
          className="absolute -inset-4 rounded-[999px] transition-all duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: "radial-gradient(ellipse, rgba(180,180,180,0.10) 0%, transparent 70%)",
            filter: "blur(16px)",
          }}
        />

        {/* Outermost border — soft gradient ring */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "999px",
            background: "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02), rgba(255,255,255,0.08))",
            boxShadow:
              "0 0 0 1.5px rgba(255,255,255,0.10), 0 25px 70px rgba(0,0,0,0.85), 0 0 40px rgba(255,255,255,0.03)",
            padding: "1.5px",
          }}
        />

        {/* Dark fill layer */}
        <div
          className="absolute"
          style={{
            inset: "1.5px",
            borderRadius: "999px",
            background: "#0d0d0d",
          }}
        />

        {/* Inner visible dark ring (the border gap from the screenshot) */}
        <div
          className="absolute"
          style={{
            inset: "10px",
            borderRadius: "999px",
            background: "#111",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.07), inset 0 0 20px rgba(0,0,0,0.6)",
          }}
        />

        {/* White inner accent border around image */}
        <div
          className="absolute"
          style={{
            inset: "16px",
            borderRadius: "999px",
            boxShadow: "0 0 0 1.5px rgba(255,255,255,0.12)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Profile image — grayscale, clipped to oval */}
        <div
          className="absolute overflow-hidden"
          style={{ inset: "18px", borderRadius: "999px", zIndex: 1 }}
        >
          <img
            src={profileImg}
            alt="Sagar Patidar"
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            draggable={false}
          />
        </div>

        {/* Inner vignette */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "18px",
            borderRadius: "999px",
            boxShadow: "inset 0 0 35px rgba(0,0,0,0.5)",
            zIndex: 3,
          }}
        />

        {/* Cursor-tracking glare */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            inset: "18px",
            borderRadius: "999px",
            zIndex: 4,
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.10) 0%, transparent 60%)`
            ),
          }}
        />
      </motion.div>
    </div>
  );
};

/* ─── Main section ─── */
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-paddin">
      <div className="container-narrow w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Hi, Sagar here
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-muted-foreground text-md max-w-lg leading-relaxed"
            >
              Full-Stack Developer passionate about building innovative web
              applications and solving real-world problems with clean, efficient code.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <ul className="space-y-2.5 text-secondary-foreground text-[15px] leading-relaxed">
                <li>B.Tech in Computer Science &amp; Engineering at Lovely Professional University</li>
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
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center justify-center"
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
