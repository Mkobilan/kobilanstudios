import { getGameBySlug, getGameGDD, getAllGames } from "@/lib/data";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Metadata } from "next";

export async function generateStaticParams() {
  const games = getAllGames();
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const game = getGameBySlug(resolvedParams.slug);
  
  if (!game) {
    return {
      title: "Game Design Document"
    };
  }
  
  return {
    title: `${game.title} | Game Design Document`,
    description: `${game.title}: ${game.subtitle}. ${game.tagline} Read the full pre-production Game Design Document (GDD) for setting, gameplay, and systems.`,
    keywords: [
      game.title,
      game.genre,
      "Game Design Document",
      "GDD",
      "Story Bible",
      game.setting,
      "Kobilan Studios",
      "Matthew Kobilan"
    ],
    openGraph: {
      title: `${game.title} | Game Design Document`,
      description: game.tagline,
      images: [
        {
          url: game.hero || "/images/games/new-amsterdam/hero.png",
          alt: `${game.title} Hero Art`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.title} | Game Design Document`,
      description: game.tagline,
      images: [game.hero || "/images/games/new-amsterdam/hero.png"]
    }
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const game = getGameBySlug(resolvedParams.slug);
  const gdd = getGameGDD(resolvedParams.slug);

  if (!game) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.tagline,
    "genre": game.genre,
    "gamePlatform": game.platforms,
    "author": {
      "@type": "Person",
      "name": game.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kobilan Studios",
      "url": "https://kobilanstudios.vercel.app"
    },
    "inLanguage": "English",
    "applicationCategory": "Game",
    "headline": game.subtitle,
    "image": game.hero ? `https://kobilanstudios.vercel.app${game.hero}` : undefined
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO BANNER */}
      <div className="relative h-[60vh] w-full border-b border-[var(--accent-blood)]">
        {game.hero && (
          <Image 
            src={game.hero} 
            alt={game.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-serif text-[var(--text-primary)] mb-2 drop-shadow-xl">{game.title}</h1>
            <p className="text-xl md:text-2xl text-[var(--accent-gold)] font-serif italic drop-shadow-md">{game.subtitle}</p>
          </div>
        </div>
      </div>

      {/* SUB-NAVIGATION */}
      <div className="sticky top-16 z-40 bg-[var(--bg-primary)]/90 backdrop-blur border-b border-[var(--border-subtle)]">
        <div className="container mx-auto max-w-5xl flex gap-8 px-4 overflow-x-auto">
          <Link href={`/games/${game.slug}`} className="py-4 text-[var(--accent-gold)] border-b-2 border-[var(--accent-gold)] font-medium whitespace-nowrap">
            Game Design Document
          </Link>
          <button className="py-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium whitespace-nowrap cursor-not-allowed opacity-50">
            Story Bible (Coming Soon)
          </button>
          <button className="py-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium whitespace-nowrap cursor-not-allowed opacity-50">
            Characters (Coming Soon)
          </button>
        </div>
      </div>

      {/* CONTENT WITH TRACING BEAM */}
      <div className="py-16 px-4">
        <TracingBeam className="px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-headings:font-serif prose-h1:text-[var(--accent-blood)] prose-h2:text-[var(--accent-crimson)] prose-h3:text-[var(--accent-gold)] prose-a:text-[var(--accent-gold)] hover:prose-a:text-[var(--accent-gold-light)] prose-strong:text-[var(--text-primary)] prose-blockquote:border-[var(--accent-blood)] prose-blockquote:bg-[var(--bg-secondary)] prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:italic prose-blockquote:text-[var(--accent-gold-light)]">
            {gdd ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {gdd}
              </ReactMarkdown>
            ) : (
              <div className="text-center py-20 text-[var(--text-secondary)]">
                Game Design Document not available yet.
              </div>
            )}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}
