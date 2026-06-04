import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Card3D, CardBody, CardItem } from "@/components/ui/card-3d";
import { SparklesCore } from "@/components/ui/sparkles";
import { LampContainer } from "@/components/ui/lamp";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Kobilan Studios | Dark Fantasy Game Design & World Building",
  description: "Explore Kobilan Studios, a narrative-driven game design portfolio by Matthew Kobilan showcasing Game Design Documents, Story Bibles, and dark fantasy world building.",
  verification: {
    google: "wnwX0v0OGT7E25CuYA6r3_NjExggVU9PFITJXnpMp8U",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <SparklesCore className="w-full h-full z-0" />
        <Spotlight fill="#8B0000" className="absolute inset-0 z-10" />
        
        <div className="relative z-20 flex flex-col items-center text-center px-4">
          <Image src="/images/logo.png" alt="Kobilan Studios Logo" width={120} height={120} className="mb-6 opacity-90" priority />
          <TextGenerateEffect 
            words="KOBILAN STUDIOS" 
            className="text-5xl md:text-7xl font-serif text-[var(--text-primary)] tracking-widest drop-shadow-2xl"
          />
          <div className="mt-4 h-8">
            <TypewriterEffect 
              words={["Game Designer", "World Builder", "Story Architect", "Concept Designer"]} 
              className="text-xl md:text-2xl text-[var(--accent-gold)] font-serif"
            />
          </div>
          
          <Link href="/games" className="mt-12 px-8 py-3 rounded border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[var(--bg-primary)] transition-all font-serif tracking-widest">
            EXPLORE GAMES
          </Link>
        </div>
      </section>

      {/* FEATURED GAMES SECTION */}
      <section className="py-24 px-4 bg-[var(--bg-secondary)] relative overflow-hidden">
        <Meteors number={10} className="opacity-20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-[var(--text-primary)]">
            <span className="text-[var(--accent-blood)]">FEATURED</span> PROJECT
          </h2>
          
          <Card3D className="w-full">
            <CardBody className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl overflow-hidden group/card w-full p-4 md:p-8 flex flex-col md:flex-row gap-8 items-center">
              <CardItem translateZ={50} className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-[var(--accent-blood)]/30">
                <Image 
                  src="/images/games/new-amsterdam/hero.png" 
                  alt="New Amsterdam"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </CardItem>
              <CardItem translateZ={30} className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-3xl font-serif text-[var(--text-primary)] mb-2">New Amsterdam</h3>
                <p className="text-[var(--accent-gold)] text-sm uppercase tracking-widest mb-6">Open-World Action-RPG</p>
                <p className="text-[var(--text-secondary)] italic mb-8 border-l-2 border-[var(--accent-blood)] pl-4">
                  "You cannot leave. You cannot die. You can only watch — and feed."
                </p>
                <Link href="/games/new-amsterdam" className="inline-block mt-auto bg-[var(--accent-blood)]/10 hover:bg-[var(--accent-blood)]/20 text-[var(--text-primary)] border border-[var(--accent-blood)]/50 px-6 py-2 rounded text-center transition-colors">
                  View Game Design Document →
                </Link>
              </CardItem>
            </CardBody>
          </Card3D>
        </div>
      </section>

      {/* STUDIO INTRO SECTION */}
      <section className="py-12 bg-[var(--bg-primary)]">
        <LampContainer>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] mb-4">Crafting Worlds</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-center text-lg">
            We build immersive, narrative-driven experiences that blend historical authenticity with dark fantasy elements. Every world has a story. Every shadow hides a secret.
          </p>
        </LampContainer>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-4 bg-[var(--bg-secondary)]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif text-center mb-16 text-[var(--text-primary)]">DESIGN PILLARS</h2>
          <BentoGrid>
            <BentoGridItem 
              title="Narrative Design"
              description="Crafting deep lore, branching storylines, and compelling character arcs that evolve across centuries."
            />
            <BentoGridItem 
              title="World Building"
              description="Creating historically grounded yet darkly fantastical settings that feel alive and responsive."
            />
            <BentoGridItem 
              title="Systems Design"
              description="Building interconnected mechanics where every player choice carries weight and consequence."
            />
          </BentoGrid>
        </div>
      </section>
    </div>
  );
}
