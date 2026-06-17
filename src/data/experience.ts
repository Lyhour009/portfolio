import { BriefcaseBusiness, GraduationCap } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  icon: typeof BriefcaseBusiness;
};
export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Personal Projects",
    location: "Cambodia",
    period: "2025 — Present",
    type: "Independent Development",
    description:
      "Building practical web applications to improve my frontend, backend, database, and product development skills.",
    responsibilities: [
      "Built a rental management system with admin and tenant dashboards.",
      "Designed responsive interfaces with light and dark mode support.",
      "Integrated authentication, database operations, payments, and file uploads.",
      "Organized reusable components and server-side application logic.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Zod",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Frontend Development Student",
    company: "Self-Directed Learning",
    location: "Cambodia",
    period: "2024 — Present",
    type: "Education",
    description:
      "Learning modern frontend development through documentation, practical exercises, and complete projects.",
    responsibilities: [
      "Studied HTML, CSS, JavaScript, React, and TypeScript.",
      "Practiced responsive design and reusable component architecture.",
      "Learned form validation, API integration, and application state handling.",
      "Improved debugging and problem-solving through real project development.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Git"],
    icon: GraduationCap,
  },
];
