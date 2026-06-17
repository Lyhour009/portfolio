import type { IconType } from "react-icons";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { Database, LayoutPanelTop, ServerCog, Wrench } from "lucide-react";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: typeof LayoutPanelTop;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    icon: LayoutPanelTop,
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    title: "Backend",
    description: "Creating reliable application logic and server features.",
    icon: ServerCog,
    skills: [
      { name: "Next.js API", icon: SiNextdotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Prisma", icon: SiPrisma },
      { name: "Zod", icon: SiZod },
      { name: "React Hook Form", icon: SiReacthookform },
    ],
  },
  {
    title: "Database",
    description: "Designing and managing structured application data.",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    title: "Tools",
    description: "Tools I use to build, manage, and deploy projects.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

// End of Skills //
