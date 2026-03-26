import { motion } from "framer-motion";
import { Home, Briefcase, Code2, Award, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Award, label: "Achievements", href: "#achievements" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const BottomNavbar = () => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-4 py-3 rounded-2xl glass">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative group flex items-center justify-center w-11 h-11 rounded-xl text-muted-foreground hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-black/80 backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomNavbar;
