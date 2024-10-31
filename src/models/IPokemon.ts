interface IPokemon {
  id: number;
  name: string;
  height: number;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { front_default: string };
}


export interface IPokemonState {
    pokemon: IPokemon | null;
    loading: boolean;
    error: string | null;
  }

export default IPokemon;
