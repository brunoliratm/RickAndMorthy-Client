import { Character } from './character.model';

export interface Episode {
    id: number;
    name: string;
    releaseDate: string;
    episode: string;
    characters: Character[];
}