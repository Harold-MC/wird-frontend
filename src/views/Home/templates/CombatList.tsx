import { FC } from "react";
import { Typography, Grid2 } from "@mui/material";
import PokemonCard from "../../../components/Card";
import { RootState } from "../../../context";
import { useSelector } from "react-redux";
import usePokemonCardActions from "../hooks/usePokemonCardActions";

const CombatListView: FC = () => {
  const combatList = useSelector((state: RootState) =>
    state.pokemons.list.filter((p) => p.isFavorite)
  );

  const { handleToggleFavoritePokemon, onNavigateToDetails } =
    usePokemonCardActions();

  return (
    <>
      <Typography variant="h6" sx={{ padding: 2, textAlign: "center" }}>
        Listo para el combate
      </Typography>

      <Grid2 container spacing={2}>
        {combatList.length === 0 ? (
          <Typography>La lista está vacía</Typography>
        ) : (
          combatList.map((pokemon) => (
            <Grid2 size={12} key={pokemon.name}>
              <PokemonCard
                pokemon={pokemon}
                onSelect={() => handleToggleFavoritePokemon(pokemon)}
                onClick={() => onNavigateToDetails(pokemon)}
              />
            </Grid2>
          ))
        )}
      </Grid2>
    </>
  );
};

export default CombatListView;
