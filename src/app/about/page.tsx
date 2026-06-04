import { LampContainer } from "@/components/ui/lamp";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Matthew Kobilan | Game Designer",
  description: "Learn more about Matthew Kobilan, the founder of Kobilan Studios. Discover his game design philosophy, core skills in world building, narrative design, and systems architecture.",
};


const skills = [
  { quote: "Constructing deep, interconnected lore and setting foundations that feel centuries old.", name: "World Building", title: "Core Discipline" },
  { quote: "Designing branching narratives, compelling character arcs, and dialogue that matters.", name: "Narrative Design", title: "Core Discipline" },
  { quote: "Creating game loops, progression models, and balanced economies.", name: "Systems Design", title: "Core Discipline" },
  { quote: "Developing unique visual identities and detailed character bibles.", name: "Concept Design", title: "Core Discipline" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-16">
      <LampContainer>
        <h1 className="text-5xl md:text-7xl font-serif text-[var(--text-primary)] mb-4">Matthew Kobilan</h1>
        <p className="text-[var(--accent-gold)] text-xl font-serif tracking-widest uppercase mb-8">Game Designer & World Builder</p>
      </LampContainer>

      <section className="py-24 px-4 bg-[var(--bg-secondary)] relative z-10 -mt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none text-center mb-24">
            <p className="text-[var(--text-secondary)]">
              I am a game designer focused on creating immersive, narrative-driven experiences that blend historical authenticity with dark fantasy. I believe that worlds should feel lived-in, characters should carry the weight of their histories, and gameplay should emerge naturally from the environment.
            </p>
            <p className="text-[var(--text-secondary)]">
              My design philosophy is simple: history is not a backdrop; it is the gameplay.
            </p>
          </div>

          <h2 className="text-3xl font-serif text-center mb-16 text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">CORE SKILLS</h2>
          <BentoGrid>
            <BentoGridItem 
              title="Game Design Documents (GDD)"
              description="Structuring comprehensive, readable, and highly detailed design documents that align entire teams."
            />
            <BentoGridItem 
              title="Story Bibles"
              description="Architecting foundational lore, faction relationships, and historical timelines."
            />
            <BentoGridItem 
              title="Character Sheets"
              description="Defining character motivations, mechanical stats, visual design, and psychological arcs."
            />
          </BentoGrid>
        </div>
      </section>

      <section className="py-24 overflow-hidden bg-[var(--bg-primary)]">
        <h2 className="text-3xl font-serif text-center mb-16 text-[var(--text-primary)]">DESIGN FOCUS</h2>
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </section>
    </div>
  );
}
