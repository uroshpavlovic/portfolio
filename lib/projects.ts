import fs from "fs";
import path from "path";
import { Project } from "@/types";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export function getProjects(): Project[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".json"));
  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
    return JSON.parse(raw) as Project;
  });
  return projects.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}
