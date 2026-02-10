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
  images?: string[];
}
