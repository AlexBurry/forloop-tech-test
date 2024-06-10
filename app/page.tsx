import { getData } from "@/app/lib/data";
import { PokemonList } from "@/app/lib/defintions";

export default async function Page() {
  const data: PokemonList = await getData();
  return (
    <main>
      <h1>Pokemon!</h1>
      <div>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
          </li>
        ))}
      </div>
    </main>
  );
}
