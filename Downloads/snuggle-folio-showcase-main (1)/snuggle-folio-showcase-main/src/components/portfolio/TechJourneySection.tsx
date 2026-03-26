import { Timeline } from "@/components/ui/timeline";

const Tag = ({ label }: { label: string }) => (
  <span className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-secondary-foreground">
    {label}
  </span>
);

const JourneyCard = ({
  icon,
  period,
  title,
  description,
  tags,
}: {
  icon: string;
  period: string;
  title: string;
  description: string;
  tags: string[];
}) => (
  <div className="rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-5 max-w-sm">
    <div className="flex items-center gap-2.5 mb-3">
      <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-sm">
        {icon}
      </div>
      <span className="text-xs font-medium text-muted-foreground">{period}</span>
    </div>
    <h4 className="text-base font-bold text-foreground mb-1.5">{title}</h4>
    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  </div>
);

const data = [
  {
    title: "2025",
    content: (
      <JourneyCard
        icon="📅"
        period="2024–Present"
        title="Full Stack Mastery"
        description="Building scalable full-stack applications with modern frameworks and best practices"
        tags={["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"]}
      />
    ),
  },
  {
    title: "2024",
    content: (
      <JourneyCard
        icon="⚙️"
        period="2023–2024"
        title="Backend & APIs"
        description="Developed REST APIs and backend services with authentication and database design"
        tags={["Express.js", "PHP", "MySQL", "PostgreSQL", "Docker", "Git"]}
      />
    ),
  },
  {
    title: "2023",
    content: (
      <JourneyCard
        icon="🎨"
        period="2022–2023"
        title="Frontend & Design"
        description="Mastered responsive UI development and design systems with modern CSS"
        tags={["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "Figma"]}
      />
    ),
  },
  {
    title: "2022",
    content: (
      <JourneyCard
        icon="📘"
        period="2022"
        title="Programming Foundations"
        description="Started B.Tech CSE at LPU — built strong foundations in OOP and data structures"
        tags={["C", "C++", "Java", "SQL", "Git"]}
      />
    ),
  },
];

const TechJourneySection = () => {
  return (
    <section id="journey" className="section-padding">
      <div className="container-narrow">
        <div className="mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground border border-border rounded-full px-3 py-1 mb-4 bg-card">
            MY JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Tech Stack Journey
          </h2>
          <p className="text-muted-foreground">
            My evolution as a developer — from fundamentals to full-stack expertise
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default TechJourneySection;
