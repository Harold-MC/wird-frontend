import { useNavigate } from "react-router-dom";
import IPokemonItem from "../../../models/IPokemonItem";
import { toggleFavorite } from "../../../context/slices/pokemons.slice";
import { useDispatch } from "react-redux";

const usePokemonCardActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNavigateToDetails = (pokemon: IPokemonItem) => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleToggleFavoritePokemon = (pokemon: IPokemonItem) => {
    dispatch(toggleFavorite(pokemon));
  };

  return { onNavigateToDetails, handleToggleFavoritePokemon };
};

export default usePokemonCardActions;
