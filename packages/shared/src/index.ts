// Shared types and interfaces for Cat Care Hub

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  publishDate: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
  affiliateLink: string;
  rationale: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
  category: string;
}
