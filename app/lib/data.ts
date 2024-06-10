import { PokemonList } from "./defintions";

export async function getData(): Promise<PokemonList> {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data: PokemonList = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching from api:', error);
        throw new Error('Failed to fetch data');
    }
}