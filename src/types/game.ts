export interface GameMeta {
  slug: string;
  title: string;
  subtitle: string;
  genre: string;
  platforms: string[];
  setting: string;
  status: string;
  tagline: string;
  author: string;
  version: string;
  date: string;
  rating: string;
  thumbnail: string;
  hero: string;
  color: string;
  accentColor: string;
}

export interface Character {
  name: string;
  origin: string;
  yearOfTurn: string;
  motivation: string;
  coreConflict: string;
  personality: string;
  arc: string;
  portrait: string;
}

export interface SiteData {
  name: string;
  tagline: string;
  description: string;
  author: string;
  roles: string[];
  socialLinks: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}
