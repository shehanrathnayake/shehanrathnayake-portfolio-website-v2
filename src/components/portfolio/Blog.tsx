
import { Terminal, ExternalLink, Calendar, BookOpen } from "lucide-react";
import { config } from "@/config";

export const Blog = () => {
  const blogPosts = config.blog.posts;

  return (
    <section id="blog" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 mb-4">
            <Terminal className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm">blog/</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Latest Articles
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Thoughts on software development, technology trends, and lessons learned
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-slate-900/80 text-slate-300 px-2 py-1 rounded-full text-xs font-mono">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-mono">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-mono border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors font-mono text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={config.contact.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800/70 text-slate-300 hover:text-orange-400 px-6 py-3 rounded-lg border border-slate-700 transition-all duration-200 hover:scale-105 font-mono"
          >
            <BookOpen className="w-5 h-5" />
            <span>View All Articles on Medium</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
