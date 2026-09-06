import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { ArrowLeft } from 'lucide-react';
import { insights } from '../data/insights';

export function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const insight = insights.find(i => i.slug === slug);

  if (!insight) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/insights" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-text-main mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
          </Link>
          
          <div className="mb-8 flex items-center gap-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full border border-primary/20">
              {insight.category}
            </span>
            <span className="text-sm text-text-muted">{insight.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8 leading-tight">
            {insight.title}
          </h1>

          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 relative border border-border">
            <div className="absolute inset-0 bg-navy/40 mix-blend-multiply z-10" />
            <img src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <p className="lead text-xl text-text-muted mb-8 font-medium">
              {insight.excerpt}
            </p>
            
            {/* Split the content by double newlines to render paragraphs */}
            {insight.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-bold text-text-main mt-12 mb-6">{paragraph.replace('### ', '')}</h3>;
              }
              return (
                <p key={index} className="text-text-muted leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </article>
          
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-text-muted text-sm">
              Published on {insight.date} in <span className="text-text-main font-medium">{insight.category}</span>
            </div>
            <div className="flex gap-4">
              <button className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Share Article</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
