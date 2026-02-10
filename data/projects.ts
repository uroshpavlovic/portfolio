import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "project-one",
    title: "Project One\nMultiple Lines",
    coverImage: "https://placehold.co/600x800/e8ddd5/333333?text=Project+1",
    type: "internal",
    description: [
      "Liceulice is a street magazine. No. 89 was dedicated to football and everything related to football. This sport, like anything else, brings together such diverse people in one place, and serves as a framework for such diverse conversations. In this issue, we were interested in what in this game, and everything that follows it, can be truly progressive, and what can be truly dangerous.",
    ],
    client: "Liceulice",
    year: "2023",
    images: [
      "https://placehold.co/1200x800/e8ddd5/333333?text=Image+1",
      "https://placehold.co/1200x900/e8ddd5/333333?text=Image+2",
      "https://placehold.co/1200x700/e8ddd5/333333?text=Image+3",
    ],
  },
  {
    id: "2",
    slug: "project-two",
    title: "Project Two",
    coverImage: "https://placehold.co/600x900/ddd5e8/333333?text=Project+2",
    type: "external",
    externalUrl: "https://example.com",
  },
  {
    id: "3",
    slug: "project-three",
    title: "Project Three\nWith Subtitle",
    coverImage: "https://placehold.co/600x700/d5e8dd/333333?text=Project+3",
    type: "internal",
    description: [
      "A detailed description of this illustration project.",
      "Additional information about the creative process.",
    ],
    client: "Another Client",
    year: "2023",
    images: [
      "https://placehold.co/1200x800/d5e8dd/333333?text=Image+1",
      "https://placehold.co/1200x1000/d5e8dd/333333?text=Image+2",
    ],
  },
  {
    id: "4",
    slug: "project-four",
    title: "Project Four",
    coverImage: "https://placehold.co/600x850/e8e5d5/333333?text=Project+4",
    type: "internal",
    description: [
      "Description of project four.",
    ],
    client: "Client Four",
    year: "2023",
    images: [
      "https://placehold.co/1200x800/e8e5d5/333333?text=Image+1",
    ],
  },
  {
    id: "5",
    slug: "project-five",
    title: "External Project",
    coverImage: "https://placehold.co/600x750/d5dde8/333333?text=External",
    type: "external",
    externalUrl: "https://behance.net",
  },
  {
    id: "6",
    slug: "project-six",
    title: "Project Six",
    coverImage: "https://placehold.co/600x950/e5d5e8/333333?text=Project+6",
    type: "internal",
    description: [
      "Another project description here.",
    ],
    client: "Client Six",
    year: "2024",
    images: [
      "https://placehold.co/1200x800/e5d5e8/333333?text=Image+1",
    ],
  },
];
