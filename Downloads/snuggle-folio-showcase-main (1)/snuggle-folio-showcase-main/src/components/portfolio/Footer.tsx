import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border-t border-white/5 py-16 mb-24"
    >
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Let's work together</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Always open to interesting projects and collaborations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/Sagarpatidar407", label: "GitHub" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/sagarpatidar01", label: "LinkedIn" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:sagarpatidar407@gmail.com", label: "Email" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-200"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sagar Patidar. Built with React & Tailwind CSS.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
