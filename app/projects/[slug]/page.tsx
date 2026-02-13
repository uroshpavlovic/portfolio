import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjects, getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects()
    .filter((project) => project.type === "internal")
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.type === "external") {
    notFound();
  }

  return (
    <div className="project-layout">
      <div className="project-images">
        {project.gallery?.map((row, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              display: row.layout === "double" ? "flex" : "block",
              gap: row.layout === "double" ? "16px" : undefined,
              viewTransitionName: index === 0 ? `project-image-${slug}` : undefined,
            }}
          >
            <Image
              src={row.image1}
              alt={`${project.title} - Image ${index + 1}a`}
              width={row.layout === "double" ? 600 : 1200}
              height={row.layout === "double" ? 400 : 800}
              style={{
                width: row.layout === "double" ? "50%" : "100%",
                height: "auto",
                display: "block",
              }}
            />
            {row.layout === "double" && row.image2 && (
              <Image
                src={row.image2}
                alt={`${project.title} - Image ${index + 1}b`}
                width={600}
                height={400}
                style={{
                  width: "50%",
                  height: "auto",
                  display: "block",
                }}
              />
            )}
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
          <div className="project-description" >
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
