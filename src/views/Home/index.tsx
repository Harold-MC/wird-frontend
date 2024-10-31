import React, { useMemo, useState } from "react";
import {
  TextField,
  Typography,
  Grid2,
  Box,
  Stack,
  IconButton,
  Drawer,
} from "@mui/material";
import PokemonCard from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CombatListView from "./templates/CombatList";
import { AppDispatch, RootState } from "../../context";
import {
  setSearchText,
} from "../../context/slices/pokemons.slice";
import usePokemonCardActions from "./hooks/usePokemonCardActions";


const Home: React.FC = () => {
  const [showCombatList, setShowCombatList] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { handleToggleFavoritePokemon, onNavigateToDetails } =
    usePokemonCardActions();

  const { list: pokemonList, searchText } = useSelector(
    (state: RootState) => state.pokemons
  );

  const filteredPokemonList = useMemo(() => {
    if (!searchText) return pokemonList;
    return pokemonList.filter((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [pokemonList, searchText]);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        overflow: "hidden",
        width: { lg: "80%" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: 2,
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "#fff",
            paddingBottom: 2,
          }}
        >
          <Stack spacing={2} direction="row">
            <TextField
              label="Buscar Pokémon"
              variant="outlined"
              fullWidth
              value={searchText}
              onChange={handleSearchChange}
            />
            <IconButton
              sx={{ display: { md: "none", xs: "block" } }}
              onClick={() => setShowCombatList(true)}
            >
              <FormatListBulletedIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{ flex: 1, overflowY: "auto", padding: 2 }}>
          {filteredPokemonList.length === 0 && (
            <Typography>No se encontraron pokemones</Typography>
          )}

          <Grid2 container spacing={2}>
            {filteredPokemonList.map((pokemon) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={pokemon.name}>
                <PokemonCard
                  pokemon={pokemon}
                  onSelect={() => handleToggleFavoritePokemon(pokemon)}
                  onClick={() => onNavigateToDetails(pokemon)}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      <Box
        sx={{
          width: 300,
          display: { xs: "none", md: "block" },
          maxWidth: 400,
          backgroundColor: "#f5f5f5",
          height: "90%",
          position: "fixed",
          right: 0,
          overflowY: "auto",
          padding: 2,
          borderLeft: "1px solid #ddd",
        }}
      >
        <CombatListView />
      </Box>

      <Drawer
        anchor="bottom"
        open={showCombatList}
        onClose={() => setShowCombatList(false)}
      >
        <Stack padding={2}>
          <CombatListView />
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Home;
