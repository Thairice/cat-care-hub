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
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={imageUrl}
          alt={title || 'Article image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              categoryColors[category] || categoryColors.general
            }`}
          >
            {category.replace('-', ' ').toUpperCase()}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(publishDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/articles/${slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
