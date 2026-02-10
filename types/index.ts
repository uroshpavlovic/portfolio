export interface GalleryRow {
  layout: 'single' | 'double';
  image1: string;
  image2?: string;
}

export interface Project {
  slug: string;
  title: string;
  coverImage: string;
  type: 'external' | 'internal';
  order?: number;
  externalUrl?: string;
  description?: string[];
  client?: string;
  year?: string;
  gallery?: GalleryRow[];
}
