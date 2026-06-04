import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kobilanstudios.com"),
  title: {
    default: "Kobilan Studios | Dark Fantasy Game Design & World Building",
    template: "%s | Kobilan Studios"
  },
  description: "Immersive, narrative-driven gaming portfolio of Matthew Kobilan (Kobilan Studios). Explore detailed Game Design Documents (GDD), Story Bibles, and character concepts blending historical authenticity with dark fantasy.",
  keywords: [
    "Matthew Kobilan",
    "Kobilan Studios",
    "Game Design Document",
    "GDD",
    "Story Bible",
    "Dark Fantasy Game Designer",
    "World Builder",
    "Narrative Designer",
    "Concept Designer",
    "New Amsterdam Game",
    "Vampire RPG pre-production",
    "Manhattan 1626 Game Design"
  ],
  authors: [{ name: "Matthew Kobilan", url: "https://kobilanstudios.com" }],
  creator: "Matthew Kobilan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kobilanstudios.com",
    siteName: "Kobilan Studios",
    title: "Kobilan Studios | Dark Fantasy Game Design & World Building",
    description: "Explore the game design portfolio of Matthew Kobilan, featuring the historical dark-fantasy vampire concept 'New Amsterdam'.",
    images: [
      {
        url: "/images/games/new-amsterdam/hero.png",
        width: 1200,
        height: 630,
        alt: "New Amsterdam Game Design Hero Art"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobilan Studios | Dark Fantasy Game Design & World Building",
    description: "Explore the game design portfolio of Matthew Kobilan.",
    images: ["/images/games/new-amsterdam/hero.png"],
    creator: "@KobilanStudios"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matthew Kobilan",
    "jobTitle": ["Game Designer", "World Builder", "Narrative Designer", "Concept Designer"],
    "url": "https://kobilanstudios.com",
    "knowsAbout": [
      "Game Design",
      "World Building",
      "Creative Writing",
      "System Design",
      "Character Development"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Kobilan Studios",
      "slogan": "Crafting Worlds. Designing Legends.",
      "logo": "https://kobilanstudios.com/images/logo.png"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="font-serif text-xl font-bold tracking-widest text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors">
              KOBILAN STUDIOS
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/games" className="text-sm font-medium hover:text-[var(--accent-gold)] transition-colors">Games</a>
              <a href="/about" className="text-sm font-medium hover:text-[var(--accent-gold)] transition-colors">About</a>
              <a href="/contact" className="text-sm font-medium hover:text-[var(--accent-gold)] transition-colors">Contact</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[var(--text-secondary)] text-sm">© {new Date().getFullYear()} Kobilan Studios. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
