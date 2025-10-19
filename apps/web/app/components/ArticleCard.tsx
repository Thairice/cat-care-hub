import Image from 'next/image';
import Link from 'next/link';
import { ArticleEntry, ArticleFields } from '@/types/contentful';

interface ArticleCardProps {
  article: ArticleEntry;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, excerpt, category, slug, publishDate, featuredImage } =
    article.fields as ArticleFields;

  const categoryColors: Record<string, string> = {
    'care-tasks': 'bg-blue-100 text-blue-800',
    behavior: 'bg-purple-100 text-purple-800',
    general: 'bg-gray-100 text-gray-800',
  };

  // Handle Contentful image URL
  const imageUrl =
    featuredImage && typeof featuredImage === 'object' && 'fields' in featuredImage && featuredImage.fields.file
      ? `https:${featuredImage.fields.file.url}`
      : '/placeholder-cat.jpg';

  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      <div className="relative h-56 w-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title || 'Article image'}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span
            className={`text-xs font-bold px-4 py-1.5 rounded-full shadow-sm ${
              categoryColors[category] || categoryColors.general
            }`}
          >
            {category.replace('-', ' ').toUpperCase()}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {new Date(publishDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">{excerpt}</p>
        <Link
          href={`/articles/${slug}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/link"
        >
          Read Article
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
