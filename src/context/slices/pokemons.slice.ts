import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonList } from "../../network";
import IPokemonItem, { IPokemonItemState } from "../../models/IPokemonItem";

const initialState: IPokemonItemState = {
  list: [],
  searchText: "",
  loading: false,
  error: null,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<IPokemonItem>) {
      const favoriteList = state.list.filter((pokemon) => pokemon.isFavorite);

      const index = state.list.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      );

      const isFavorite = state.list[index].isFavorite;

      if (favoriteList.length === 6 && !isFavorite) return;

      state.list[index].isFavorite = !isFavorite;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPokemonList.fulfilled,
        (state, action: PayloadAction<IPokemonItem[]>) => {
          state.loading = false;
          state.list = action.payload;
        }
      )
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Error al cargar la lista de Pokémon";
      });
  },
});

export const { setSearchText, toggleFavorite } = pokemonSlice.actions;
export default pokemonSlice;
