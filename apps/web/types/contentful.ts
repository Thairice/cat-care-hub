import type { Entry, Asset, EntrySkeletonType } from 'contentful';

export interface ArticleFields {
  title: string;
  slug: string;
  category: 'care-tasks' | 'behavior' | 'general';
  excerpt: string;
  content: any; // Rich text content
  featuredImage: Asset;
  publishDate: string;
}

export interface ArticleSkeleton extends EntrySkeletonType {
  contentTypeId: 'catCareHub';
  fields: ArticleFields;
}

export type ArticleEntry = Entry<ArticleSkeleton>;

export interface ProductRecommendationFields {
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
  affiliateLink: string;
  rationale: string;
}

export interface ProductRecommendationSkeleton extends EntrySkeletonType {
  contentTypeId: 'productRecommendation';
  fields: ProductRecommendationFields;
}

export type ProductRecommendationEntry = Entry<ProductRecommendationSkeleton>;

export interface GalleryImageFields {
  title: string;
  image: Asset;
  caption: string;
  category: string;
}

export interface GalleryImageSkeleton extends EntrySkeletonType {
  contentTypeId: 'galleryImage';
  fields: GalleryImageFields;
}

export type GalleryImageEntry = Entry<GalleryImageSkeleton>;
