import { Pokemon, PokemonList } from "./defintions";

export async function getPokemonListData(page: number = 1): Promise<PokemonList> {
    try {
        const limit = 20;
        const offset = (page - 1) * limit;
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit);
        const data: PokemonList = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching from api:', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getPokemonData(name: string = "ditto"): Promise<Pokemon> {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
        const data: Pokemon = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching from api:', error);
        throw new Error('Failed to fetch data');
    }
}