import { FC, useMemo } from "react";
import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import PetsIcon from "@mui/icons-material/Pets";
import IPokemon from "../models/IPokemonItem";

type IProps = { pokemon: IPokemon; onSelect: () => void; onClick: () => void };

const PokemonCard: FC<IProps> = ({ pokemon, onSelect, onClick }) => {
  const imageUrl = useMemo(() => {
    return `${import.meta.env.VITE_APP_IMAGE_BASE_URL}/${pokemon.id}.png`;
  }, [pokemon]);

  const onToggle = (event: any) => {
    event.stopPropagation();
    onSelect()
  }

  return (
    <Box onClick={onClick}>
      <Card sx={{ position: "relative", borderRadius: 2, boxShadow: 3 }}>
        <IconButton
          onClick={onToggle}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "white",
            boxShadow: 2,
            "&:hover": { backgroundColor: "grey.100" },
          }}
        >
          {pokemon.isFavorite ? <DeleteOutlineIcon /> : <AddIcon />}
        </IconButton>

        <CardMedia
          component="img"
          height="160"
          image={imageUrl}
          alt={pokemon.name}
          sx={{ objectFit: "contain", padding: 2 }}
        />

        <CardContent sx={{ textAlign: "center" }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" component="div" fontWeight="bold">
              {pokemon.name}
            </Typography>
            <PetsIcon color="primary" />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonCard;
