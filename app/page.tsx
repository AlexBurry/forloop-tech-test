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
  });
  return (
    <main>
      <h1>Pokemon!</h1>
      <div>
        {data?.results.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
          </li>
        ))}
      </div>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page ===1}>Previous Page</button>
      </div>
      <div>
      <button onClick={() => setPage(page + 1)} disabled={!data?.next}>Next Page</button>
      </div>     
    </main>
  );
}
