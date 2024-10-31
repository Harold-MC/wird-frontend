import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from ".";
import { fetchPokemonDetail, fetchPokemonList } from "../network";

export const useInitPokemonList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);
};

export const usePokemon = (id: string) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [dispatch]);
};

