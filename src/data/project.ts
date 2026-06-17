export type ProjectCategory = "Full Stack" | "Frontend";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  type: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rental-management-system",
    title: "Rental Management System",
    shortDescription:
      "A complete platform for managing rooms, tenants, contracts, bills, payments, and maintenance.",
    description:
      "The Rental Management System is a full-stack web application designed to simplify property and tenant management. It includes separate dashboards for administrators and tenants, with support for contracts, monthly billing, payment approval, maintenance requests, notifications, and reporting.",
    category: "Full Stack",
    type: "Property Management Platform",
    image: "/projects/rrms.png",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Zod",
    ],
    features: [
      "Admin and tenant dashboards",
      "Room and tenant management",
      "Rental contract management",
      "Monthly invoice generation",
      "Payment proof upload and approval",
      "Maintenance request tracking",
      "Notification system",
      "Responsive light and dark interface",
    ],
    challenges: [
      "Connecting multiple database tables safely",
      "Keeping invoice and payment status synchronized",
      "Designing separate permissions for tenants and administrators",
    ],
    results: [
      "Reduced repetitive rental management tasks",
      "Created a clear workflow for bills and payments",
      "Built reusable components for future projects",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Lyhour009/final-project-RRMS",
    featured: true,
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    shortDescription:
      "A modern portfolio with responsive design, project filtering, animations, and theme support.",
    description:
      "A personal developer portfolio built to present projects, technical skills, experience, and contact information in a clear and professional way.",
    category: "Frontend",
    type: "Personal Portfolio Website",
    image: "/projects/portfolio.png",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "next-themes",
    ],
    features: [
      "Light and dark mode",
      "Responsive navigation",
      "Active section indicator",
      "Animated project filtering",
      "SEO and social sharing metadata",
      "Custom contact form",
    ],
    challenges: [
      "Creating a unique visual identity",
      "Keeping animation smooth without distracting users",
      "Maintaining reusable and readable components",
    ],
    results: [
      "Created a professional personal brand",
      "Improved project presentation",
      "Built reusable UI patterns",
    ],
    liveUrl: "https://your-portfolio-domain.com",
    githubUrl: "https://github.com/lyhour009/portfolio",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
