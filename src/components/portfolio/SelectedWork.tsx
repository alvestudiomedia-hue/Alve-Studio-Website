"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Plus } from "@/components/ui/icons";
import { projectFilters, projects, type Project } from "@/lib/portfolio";
import { cn } from "@/lib/cn";

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="rounded-sm border border-border bg-surface p-8 md:p-10">
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-sm bg-purple-tint text-purple-deep">
          <Icon className="size-6" />
        </span>
        <p className="font-sans text-eyebrow uppercase text-ink-faint">
          {project.meta}
        </p>
      </div>

      <h3 className="mt-7 font-sans text-h1 text-purple-ink">{project.name}</h3>
      <p className="mt-2 text-h2 text-ink">{project.tagline}</p>
      <p className="mt-4 max-w-3xl text-body text-ink-soft text-pretty">
        {project.summary}
      </p>

      <details className="group mt-7 rounded-sm border border-border bg-background">
        <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-body-sm text-ink marker:content-['']">
          <span>
            <span className="font-sans text-eyebrow uppercase text-ink-faint">
              What we worked on
            </span>
            <span className="mt-1 block text-body-sm text-ink">
              {project.workLabel}
            </span>
          </span>
          <Plus
            aria-hidden="true"
            className="size-5 shrink-0 text-purple-deep transition-transform duration-200 group-open:rotate-45"
          />
        </summary>

        <div className="border-t border-border p-5">
          <ul className="flex flex-wrap gap-2">
            {project.work.map((item) => (
              <li
                key={item}
                className="rounded-pill bg-purple-tint px-3 py-1.5 text-body-sm text-purple-deep"
              >
                {item}
              </li>
            ))}
          </ul>

          {project.detail ? (
            <dl className="mt-6 space-y-4">
              {project.detail.map((row) => (
                <div key={row.label}>
                  <dt className="font-sans text-eyebrow uppercase text-ink-faint">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-body-sm text-ink-soft">{row.body}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </details>

      <dl className="mt-7 flex flex-wrap gap-x-12 gap-y-5 border-t border-border pt-6">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-sans text-h2 text-purple-ink">
                {stat.value}
              </span>
              <span
                aria-hidden="true"
                className="mt-1 block font-sans text-eyebrow uppercase text-ink-faint"
              >
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function SelectedWork() {
  const [filter, setFilter] = useState<string>("all");

  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Section tone="background">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow className="text-purple-deep">Selected Work</Eyebrow>
          <h2 className="mt-4 font-sans text-h1 text-purple-ink text-balance">
            Five projects. Two disciplines. One team.
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((option) => {
            const active = filter === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                aria-pressed={active}
                className={cn(
                  "cursor-pointer rounded-pill border px-4 py-2 text-body-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-deep",
                  active
                    ? "border-transparent bg-purple-deep text-surface"
                    : "border-border bg-surface text-ink-soft hover:border-border-strong hover:text-ink",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 space-y-6">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
