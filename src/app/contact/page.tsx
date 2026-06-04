import { SparklesCore } from "@/components/ui/sparkles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Matthew Kobilan | Game Designer",
  description: "Get in touch with Matthew Kobilan of Kobilan Studios. Reach out for collaboration, project reviews, or narrative design roles.",
};


export default function ContactPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center py-20 px-4">
      <SparklesCore className="w-full h-full z-0 fixed inset-0 opacity-40" />
      
      <div className="relative z-10 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-8 md:p-12 rounded-xl max-w-xl w-full shadow-2xl backdrop-blur-sm">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-[var(--text-primary)] mb-2">
            <span className="text-[var(--accent-blood)]">SUMMON</span> ME
          </h1>
          <p className="text-[var(--text-secondary)]">Interested in collaborating or reviewing my portfolio?</p>
        </div>

        <div className="text-center py-8">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--accent-blood)]/10 border border-[var(--accent-blood)]/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="text-[var(--text-secondary)] text-sm uppercase tracking-widest mb-4">Reach out directly</p>
            <a 
              href="mailto:matthew.kobilan@gmail.com" 
              className="text-[var(--accent-gold)] hover:text-[var(--accent-gold-light)] text-lg md:text-xl tracking-wider transition-colors font-serif"
            >
              matthew.kobilan@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--border-subtle)] pt-8 text-center">
          <p className="text-[var(--text-secondary)] text-sm italic">
            Whether you have a project in mind, want to discuss game design, or simply want to connect — I&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
}
