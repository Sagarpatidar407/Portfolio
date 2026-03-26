import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconTrophy,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMail,
  IconFileText,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import resumePdf from "@/assets/sagarCVFinal (1).pdf";

export default function FloatingDockDemo() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
    setIsDark(!isDark);
  };

  const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-white" />,
    href: "#home",
  },
  {
    title: "Work",
    icon: <IconTerminal2 className="h-full w-full text-white" />,
    href: "/work",
  },
  {
    title: "Skills",
    icon: <IconNewSection className="h-full w-full text-white" />,
    href: "#skills",
  },
  {
    title: "Achievements",
    icon: <IconTrophy  className="h-full w-full text-white" />,
    href: "#achievements",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-white" />,
    href: "https://github.com/Sagarpatidar407",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-white" />,
    href: "https://linkedin.com/in/https://www.linkedin.com/in/sagar-patidar-481b49298/",
  },
  {
    title: isDark ? "Light Mode" : "Dark Mode",
    icon: isDark ? (
      <IconSun className="h-full w-full text-white" />
    ) : (
      <IconMoon className="h-full w-full text-white" />
    ),
    href: "#",
    onClick: toggleTheme,
  },
  {
    title: "Download Resume",
    icon: (
      <IconFileText className="h-full w-full text-white" />
    ),
    href: resumePdf,
    download: true,
  },
  {
    title: "Email",
    icon: (
      <IconMail className="h-full w-full text-white" />
    ),
    href: "mailto:sagarpatidar407@gmail.com",
  }
];
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
