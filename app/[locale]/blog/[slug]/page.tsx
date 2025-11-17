import { notFound } from 'next/navigation';
import { blogPosts } from '../../../../lib/content';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container-balanced py-12 space-y-4">
      <p className="section-title">Blog</p>
      <div className="card-glass p-6 space-y-3">
        <p className="font-display text-3xl text-charcoal">{post.title}</p>
        <p className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString()}</p>
        <p className="text-base text-slate-700">{post.excerpt}</p>
        <p className="text-base text-slate-700">
          Detailed content for this article is coming soon. In the meantime, reach out and we can share our full
          recommendations for your celebration.
        </p>
      </div>
    </div>
  );
}
