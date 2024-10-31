import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemons from "./slices/pokemons.slice";
import pokemonSlice from "./slices/pokemon.slice";

const rootReducer = combineReducers({
  pokemons: pokemons.reducer,
  pokemon: pokemonSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
