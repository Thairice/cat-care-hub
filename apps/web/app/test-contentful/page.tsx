import { getAllArticles } from '@/lib/contentful-helpers';
import { ArticleEntry, ArticleFields } from '@/types/contentful';

export default async function TestContentfulPage() {
  const articles = await getAllArticles();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Contentful Integration Test</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Found <strong>{articles.length}</strong> articles:
      </p>

      {articles.length === 0 ? (
        <p style={{ color: 'red' }}>
          No articles found. Check your Contentful configuration and API keys.
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {articles.map((article) => {
            const { title, excerpt, category, slug, publishDate, featuredImage } = article.fields as ArticleFields;

            return (
              <div
                key={article.sys.id}
                style={{
                  border: '1px solid #ddd',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <h2 style={{ marginTop: 0, color: '#333' }}>
                  {title}
                </h2>
                <p style={{ color: '#666', fontStyle: 'italic' }}>
                  {excerpt}
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                  <p>
                    <strong>Category:</strong>{' '}
                    <span
                      style={{
                        backgroundColor: '#e0f2fe',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      {category}
                    </span>
                  </p>
                  <p>
                    <strong>Slug:</strong>{' '}
                    <code style={{ backgroundColor: '#f0f0f0', padding: '0.25rem 0.5rem' }}>
                      {slug}
                    </code>
                  </p>
                  <p>
                    <strong>Published:</strong> {new Date(publishDate).toLocaleDateString()}
                  </p>
                </div>
                {featuredImage && (
                  <p>
                    <strong>Featured Image:</strong> ✓ Image attached
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
