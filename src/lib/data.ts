import fs from 'fs';
import path from 'path';
import { GameMeta, Character } from '@/types/game';

const dataDir = path.join(process.cwd(), 'src', 'data');

export function getAllGames(): GameMeta[] {
  const gamesDir = path.join(dataDir, 'games');
  const gameSlugs = fs.readdirSync(gamesDir);
  
  return gameSlugs.map((slug) => {
    const metaPath = path.join(gamesDir, slug, 'meta.json');
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    return meta as GameMeta;
  });
}

export function getGameBySlug(slug: string): GameMeta | null {
  try {
    const metaPath = path.join(dataDir, 'games', slug, 'meta.json');
    return JSON.parse(fs.readFileSync(metaPath, 'utf-8')) as GameMeta;
  } catch {
    return null;
  }
}

export function getGameGDD(slug: string): string | null {
  try {
    const gddPath = path.join(dataDir, 'games', slug, 'gdd.md');
    return fs.readFileSync(gddPath, 'utf-8');
  } catch {
    return null;
  }
}

export function getGameCharacters(slug: string): Character[] {
  try {
    const charsDir = path.join(dataDir, 'games', slug, 'characters');
    const files = fs.readdirSync(charsDir).filter(f => f.endsWith('.json'));
    return files.map(f => JSON.parse(fs.readFileSync(path.join(charsDir, f), 'utf-8')) as Character);
  } catch {
    return [];
  }
}
