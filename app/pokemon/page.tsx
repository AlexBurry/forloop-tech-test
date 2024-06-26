"use client"

import { getPokemonListData, getPokemonData } from "@/app/lib/data";
import { PokemonList, Pokemon } from "@/app/lib/defintions";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";

function capitiliseName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function Page() {
    const [selectedPokemon, setSelectedPokemon] = useState<string>("ditto")

    return (
        <section>
            <div className="flex-col justify-around ">
                <h1 className="flex justify-center font-bold text-4xl text-blue-600 p-10">Pokemon!</h1>
                <Suspense fallback={<Loading />}>
                    <PokemonListView setSelectedPokemon={setSelectedPokemon} />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <PokemonSingleView pokemon={selectedPokemon} />
                </Suspense>   
            </div>
        </section>
    )
}

function PokemonListView({setSelectedPokemon}: {setSelectedPokemon: (name: string) => void}) {
    const [data, setData] = useState<PokemonList | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getPokemonAPIData() {
        const response: PokemonList = await getPokemonListData(page);
        setData(response)
        }

        getPokemonAPIData();
    }, [page]);
    return (
        <div>     
            <div className="flex justify-center border-gray-200 bg-gray-100 p-10 mx-10">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 font-medium ">
                {data?.results.map((pokemon) => (
                    <li
                    className="py-4 px-6 border border-blue-400 bg-blue-200 min-w-96 cursor-pointer hover:bg-gray-400"
                    key={pokemon.name}
                    onClick={() => setSelectedPokemon(pokemon.name)}
                    >
                        {capitiliseName(pokemon.name)}
                    </li>
                ))}
            </ul> 
            </div>

            <div className="flex justify-around px-10 py-5">
                <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center disabled:opacity-50">
                    Previous Page
                </button>
                <button onClick={() => setPage(page + 1)} disabled={!data?.next} className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center disabled:opacity-50">
                    Next Page
                </button>
            </div>      
        </div>
    );
}

function PokemonSingleView({pokemon}: {pokemon: string}) {
    const [data, setData] = useState<Pokemon | null>(null);
    
    useEffect(() => {
        async function getPokemonAPIData() {
            const response: Pokemon = await getPokemonData(pokemon);
            setData(response)
        }

        getPokemonAPIData();
    }, [pokemon]);

    const imgURL = data?.sprites.front_default!;
    return(
        <div className="border-gray-200 bg-gray-100 p-10 mx-10">
            <h2 className="flex justify-center font-bold text-3xl text-blue-600">{capitiliseName(pokemon)}</h2>
            <div className="flex justify-center">
                <Image src={imgURL} alt={pokemon} width={200} height={200} />
            </div>
            <div className="flex justify-evenly px-20">
                <div className="py-4 px-6 border border-blue-400 bg-blue-200 min-w-48">
                    <h3 className="flex justify-center text-xl font-bold underline">Type</h3>
                    <ul>
                        {data?.types.map((type) => 
                            <li key={type.type.name}>
                                {type.slot}: {capitiliseName(type.type.name)}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="py-4 px-6 border border-blue-400 bg-blue-200 min-w-48">
                    <h3 className="flex justify-center text-xl font-bold underline">Stats</h3>
                    <ul>
                        {data?.stats.map((stat) =>
                            <li key={stat.stat.name}>
                                {capitiliseName(stat.stat.name)}: {stat.base_stat}
                            </li> 
                        )}
                    </ul>
                </div>
                <div className="py-4 px-6 border border-blue-400 bg-blue-200 min-w-48">
                    <h3 className="flex justify-center text-xl font-bold underline">Abilities</h3>
                    <ul>
                        {data?.abilities.map((ability) => 
                            <li key={ability.ability.name}>
                                {ability.slot}: {capitiliseName(ability.ability.name)}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}