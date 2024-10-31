import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonDetail } from "../../network";
import IPokemon, { IPokemonState } from "../../models/IPokemon";

const initialState: IPokemonState = {
  pokemon: null,
  loading: false,
  error: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPokemonDetail.fulfilled,
        (state, action: PayloadAction<IPokemon>) => {
          state.loading = false;
          state.pokemon = action.payload;
        }
      )
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default pokemonSlice;
