import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((project) => project.type === "internal")
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.type === "external") {
    notFound();
  }

  return (
    <div className="project-layout">
      <div className="project-images">
        {project.images?.map((image, index) => (
          <div
            key={index}
            className={index === 0 ? "project-image-transition" : undefined}
            style={{
              marginBottom: "16px",
              background: "#BBB9BE",
            }}
          >
            <Image
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              width={1200}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      <div className="project-info">
        <h1 className="project-title">
          {project.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < project.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>

        {project.description && (
          <div className="project-description">
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="project-meta">
          {project.client && <p>Client: {project.client}</p>}
          {project.year && <p>Year: {project.year}</p>}
        </div>
      </div>
    </div>
  );
}
