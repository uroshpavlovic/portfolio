import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Image
        src={project.coverImage}
        alt={project.title}
        width={600}
        height={800}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );

  if (project.type === "external" && project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={`/projects/${project.slug}`}>
      {cardContent}
    </Link>
  );
}
