"use client"

import { getData } from "@/app/lib/data";
import { PokemonList } from "@/app/lib/defintions";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState<PokemonList | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getPokemonAPIData() {
      const response: PokemonList = await getData(page);
      setData(response)
    }

    getPokemonAPIData();
  }, [page]);
  return (
    <main>
      <div className="flex-col justify-around ">
        <h1 className="flex justify-center font-bold text-4xl text-blue-600 p-10">Pokemon!</h1>
        <div className="flex justify-center border-gray-200 bg-gray-100 p-10 mx-10">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 font-medium ">
            {data?.results.map((pokemon) => (
              <li className="py-4 px-6 border border-blue-400 bg-blue-200 min-w-96" key={pokemon.name}>
                {pokemon.name}
              </li>
            ))}
          </ul> 
        </div>

        <div className="flex justify-around px-10 py-5">
          <button onClick={() => setPage(page - 1)} disabled={page ===1} className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center disabled:opacity-50">
            Previous Page
          </button>
          <button onClick={() => setPage(page + 1)} disabled={!data?.next} className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center disabled:opacity-50">
            Next Page
          </button>
        </div> 
      </div>
        
    </main>
  );
}
