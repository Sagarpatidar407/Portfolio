import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDateTime(
        now.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" }) +
          ", " +
          now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-4"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-pulse_dot absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">Available for work</span>
          <span className="text-xs text-muted-foreground font-mono">{dateTime}</span>
        </div>
      </div>
      <span
        className="text-[1.6rem] leading-none select-none text-white dark:text-white"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontWeight: 700,
          color: "hsl(var(--foreground))",
          letterSpacing: "0.02em",
        }}
      >
        Sagar Patidar
      </span>
    </motion.nav>
  );
};

export default Navbar;
