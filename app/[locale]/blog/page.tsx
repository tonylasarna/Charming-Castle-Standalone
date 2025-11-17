import { blogPosts } from '../../../lib/content';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container-balanced py-12 space-y-6">
      <div>
        <p className="section-title">Blog</p>
        <p className="section-subtitle">SEO-friendly insights for planning elevated celebrations.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`./${post.slug}`} className="card-glass p-6 block">
            <p className="font-display text-xl text-charcoal">{post.title}</p>
            <p className="text-sm text-slate-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-slate-700 mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
