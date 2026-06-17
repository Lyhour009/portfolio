type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Rental Management System",
    category: "Full Stack Web Application",
    description:
      "A complete property management platform for rooms, tenants, contracts, monthly bills, payments, maintenance requests, and admin reporting.",
    image: "/projects/rrms.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/your-username/rental-management",
    featured: true,
  },
  {
    title: "Khmer AI Video Studio",
    category: "Python Desktop Tool",
    description:
      "A local video production tool that converts scripts into scenes, voiceovers, subtitles, thumbnails, and vertical videos for social media.",
    image: "/projects/khmer-ai-video-studio.png",
    technologies: ["Python", "Streamlit", "MoviePy", "SQLite", "FFmpeg"],
    githubUrl: "https://github.com/your-username/khmer-ai-video-studio",
  },
  {
    title: "Developer Portfolio",
    category: "Personal Website",
    description:
      "A responsive developer portfolio with light and dark mode, smooth animations, reusable components, and a clean project showcase.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Motion"],
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/your-username/portfolio",
  },
];
