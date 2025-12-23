export interface Project {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  type: 'external' | 'internal';
  externalUrl?: string;
  description?: string[];
  client?: string;
  year?: string;
  images?: string[];
}
