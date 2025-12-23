"use client";

import Masonry from "react-masonry-css";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </Masonry>
  );
}
