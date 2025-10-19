import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getArticleBySlug, getAllArticles } from '@/lib/contentful-helpers';
import { ArticleFields } from '@/types/contentful';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: (article.fields as ArticleFields).slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const fields = article.fields as ArticleFields;

  return {
    title: `${fields.title} | Cat Care Hub`,
    description: fields.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const { title, excerpt, category, publishDate, featuredImage, content } =
    article.fields as ArticleFields;

  const categoryColors: Record<string, string> = {
    'care-tasks': 'bg-blue-100 text-blue-800',
    behavior: 'bg-purple-100 text-purple-800',
    general: 'bg-gray-100 text-gray-800',
  };

  const imageUrl =
    featuredImage && typeof featuredImage === 'object' && 'fields' in featuredImage && featuredImage.fields.file
      ? `https:${featuredImage.fields.file.url}`
      : '/placeholder-cat.jpg';

  // Rich text rendering options
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
        <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_node: any, children: any) => (
        <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_node: any, children: any) => (
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node: any, children: any) => (
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (_node: any, children: any) => (
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node: any, children: any) => (
        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
        <li className="ml-4">{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node: any, children: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">
          {children}
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a
          href={node.data.uri}
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              categoryColors[category] || categoryColors.general
            }`}
          >
            {category.replace('-', ' ').toUpperCase()}
          </span>
          <time className="text-sm text-gray-500">
            {new Date(publishDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed">{excerpt}</p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {content && documentToReactComponents(content, richTextOptions)}
      </div>

      {/* Back to Home Link (Bottom) */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Articles
        </Link>
      </div>
    </article>
  );
}
