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
          <p className="text-[var(--text-secondary)]">Interested in collaborating or reviewing my portfolio? Send a message.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Your Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Your Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none"
              placeholder="What kind of game are we building?"
            ></textarea>
          </div>
          
          <button 
            type="button" 
            className="w-full py-4 bg-[var(--accent-blood)]/10 hover:bg-[var(--accent-blood)] text-[var(--text-primary)] border border-[var(--accent-blood)] rounded uppercase tracking-widest font-serif transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center border-t border-[var(--border-subtle)] pt-8">
          <p className="text-[var(--text-secondary)] mb-4">Or reach out directly at:</p>
          <a href="mailto:contact@kobilanstudios.com" className="text-[var(--accent-gold)] hover:text-[var(--text-primary)] text-lg tracking-wider transition-colors">
            contact@kobilanstudios.com
          </a>
        </div>
      </div>
    </div>
  );
}
