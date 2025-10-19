import { contentfulClient } from './contentful';
import { ArticleEntry } from '@/types/contentful';

export async function getAllArticles(): Promise<ArticleEntry[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'catCareHub',
      order: ['-fields.publishDate'],
    });
    return response.items as ArticleEntry[];
  } catch (error) {
    console.error('Error fetching articles from Contentful:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticleEntry | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'catCareHub',
      'fields.slug': slug,
      limit: 1,
    });
    return (response.items[0] as ArticleEntry) || null;
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}":`, error);
    return null;
  }
}
