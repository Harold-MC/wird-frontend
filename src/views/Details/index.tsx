import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Stack, Button, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, red } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppDispatch, RootState } from "../../context";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../../context/slices/pokemons.slice";
import CardDetails from "./templates/CardDetails";
import { usePokemon } from "../../context/utils";

const PokemonDetail: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { pokemon, loading, error } = useSelector(
    (state: RootState) => state.pokemon
  );

  const pokemonItem = useSelector((state: RootState) =>
    state.pokemons.list.find((item) => item.name === pokemon?.name)
  );

  const inCombatList = useMemo(() => pokemonItem?.isFavorite, [pokemonItem]);

  const toggleCombatList = () => {
    dispatch(toggleFavorite(pokemonItem!));
  };

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!pokemon) return null;

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        p={2}
        alignItems="center"
      >
        <Box>
          <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}>
            Volver
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color={inCombatList ? "secondary" : "primary"}
            startIcon={inCombatList ? <RemoveIcon /> : <AddIcon />}
            onClick={toggleCombatList}
            fullWidth
            sx={{
              backgroundColor: inCombatList ? red[400] : green[600],
              fontWeight: "bold",
              paddingY: 1.5,
              "&:hover": {
                backgroundColor: inCombatList ? red[500] : green[700],
              },
            }}
          >
            {inCombatList ? "Eliminar de combate" : "Agregar a combate"}
          </Button>
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          minHeight: "100vh",
        }}
      >
        <CardDetails pokemon={pokemon} />
      </Box>
    </>
  );
};

const PokemonDetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  usePokemon(id!);

  return <PokemonDetail />;
};

export default PokemonDetailWrapper;
