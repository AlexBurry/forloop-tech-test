export interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

export interface Ability {
    ability: {
       name: string;
       url: string; 
    };
    is_hidden: boolean;
    slot: number;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface Pokemon {
    abilities: [Ability];
    stats: [Stat];
    types: [Type];
    sprites: {
        front_default: string;
    }
}