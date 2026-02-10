import ProjectGrid from "@/components/ProjectGrid";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  return (
    <ProjectGrid projects={projects} />
  );
}
