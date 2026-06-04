import { getAllGames } from "@/lib/data";
import { Card3D, CardBody, CardItem } from "@/components/ui/card-3d";
import Link from "next/link";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Projects & Design Documents",
  description: "Browse the complete catalog of game design concepts, Story Bibles, and Game Design Documents (GDD) crafted by Kobilan Studios.",
};

export default function GamesPage() {
  const games = getAllGames();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Kobilan Studios Game Projects Portfolio",
    "description": "A collection of game design documents and pre-production concepts by Matthew Kobilan.",
    "url": "https://kobilanstudios.com/games",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Kobilan Studios",
      "url": "https://kobilanstudios.com"
    },
    "about": {
      "@type": "Person",
      "name": "Matthew Kobilan"
    },
    "hasPart": games.map((game) => ({
      "@type": "CreativeWork",
      "name": game.title,
      "description": game.tagline,
      "genre": game.genre,
      "url": `https://kobilanstudios.com/games/${game.slug}`
    }))
  };

  return (
    <div className="min-h-screen relative py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SparklesCore className="w-full h-full z-0 fixed inset-0 opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-[var(--text-primary)] mb-4">
            <span className="text-[var(--accent-blood)]">STUDIO</span> PROJECTS
          </h1>
          <p className="text-[var(--text-secondary)]">Explore the worlds currently in development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card3D key={game.slug} className="w-full h-full">
              <CardBody className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl p-6 h-full flex flex-col group/card hover:border-[var(--accent-blood)]/50 transition-colors">
                <CardItem translateZ={30} className="w-full rounded-lg overflow-hidden border border-[var(--border-subtle)] mb-6 aspect-video relative">
                  {game.thumbnail ? (
                    <Image 
                      src={game.thumbnail} 
                      alt={game.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent-blood)] font-serif text-xl">
                      {game.title}
                    </div>
                  )}
                </CardItem>
                
                <CardItem translateZ={20}>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-serif text-[var(--text-primary)]">{game.title}</h2>
                    <span className="text-xs px-2 py-1 bg-[var(--bg-secondary)] border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded uppercase tracking-wider">
                      {game.status.split('/')[0]}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">{game.genre}</p>
                  <p className="text-[var(--text-primary)] italic text-sm mb-6 flex-grow">
                    "{game.tagline}"
                  </p>
                </CardItem>

                <CardItem translateZ={40} className="mt-auto pt-4 border-t border-[var(--border-subtle)]">
                  <Link 
                    href={`/games/${game.slug}`}
                    className="w-full block text-center py-2 bg-[var(--bg-secondary)] hover:bg-[var(--accent-blood)] text-[var(--text-primary)] transition-colors rounded uppercase tracking-widest text-sm"
                  >
                    View Project
                  </Link>
                </CardItem>
              </CardBody>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
}
