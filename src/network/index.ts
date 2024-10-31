import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "./http";
import IPokemonItem from "../models/IPokemonItem";
import IPokemon from "../models/IPokemon";

const getIdFromUrl = (url: string): number => {
  const parts = url.split("/");
  return +parts[parts.length - 2];
};

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchPokemonList",
  async () => {
    const response = await httpClient.get<{ results: IPokemonItem[] }>(
      "/api/v2/pokemon",
      {
        params: { limit: 151 },
      }
    );

    const results = response.data.results;

    const mapResults = results?.map(
      (pokemon) =>
        ({ ...pokemon, id: getIdFromUrl(pokemon.url) } as IPokemonItem)
    );

    return mapResults;
  }
);

export const fetchPokemonDetail = createAsyncThunk(
  "pokemonDetail/fetchPokemonDetail",
  async (id: string) => {
    const response = await httpClient.get<IPokemon>(`/api/v2/pokemon/${id}`, {
      params: { limit: 151 },
    });

    const data = await response.data;
    return data;
  }
);
