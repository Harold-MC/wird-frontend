import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <CatchingPokemonIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex App
          </Typography>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
};

export default PublicLayout;
