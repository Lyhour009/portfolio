import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Lightbulb,
  Target,
  TriangleAlert,
} from "lucide-react";

import { getProjectBySlug, projects } from "@/src/data/project";
import { FaGithub } from "react-icons/fa6";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="border-b border-border/70 py-16 sm:py-20">
        <div className="container-page">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {project.type}
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                {project.shortDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pink-button gap-2"
                  >
                    Live Demo
                    <ArrowUpRight className="size-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="white-button gap-2"
                  >
                    <FaGithub className="size-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-secondary shadow-[0_12px_40px_rgba(236,72,153,0.08)]">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Lightbulb className="size-5" />
              </div>

              <h2 className="mt-6 text-2xl font-bold">Project overview</h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                {project.description}
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Target className="size-5" />
              </div>

              <h2 className="mt-6 text-2xl font-bold">Project category</h2>

              <p className="mt-4 text-muted-foreground">{project.category}</p>

              <p className="mt-2 font-semibold">{project.type}</p>
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <ProjectListCard
              title="Main features"
              icon={<Check className="size-5" />}
              items={project.features}
            />

            <ProjectListCard
              title="Challenges"
              icon={<TriangleAlert className="size-5" />}
              items={project.challenges}
            />

            <ProjectListCard
              title="Results"
              icon={<Target className="size-5" />}
              items={project.results}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

type ProjectListCardProps = {
  title: string;
  icon: React.ReactNode;
  items: string[];
};

function ProjectListCard({ title, icon, items }: ProjectListCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
        {icon}
      </div>

      <h2 className="mt-5 text-xl font-bold">{title}</h2>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
