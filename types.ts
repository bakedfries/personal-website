export enum ViewMode {
  PROFESSIONAL = 'PROFESSIONAL',
  PERSONAL = 'PERSONAL'
}

export type ProjectCategory = 'Data Science' | 'CS';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  link: string;
}

export type GalleryType = 'PHOTO' | 'BOOK' | 'MUSIC';

export interface GalleryItem {
  id: string;
  type: GalleryType;
  title: string;
  subtitle?: string; // Author for books, Artist for music
  imageUrl: string;
  caption?: string;
  aspect?: 'square' | 'wide' | 'tall'; // For masonry layout sizing
}
