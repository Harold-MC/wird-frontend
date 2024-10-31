import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { FC } from "react";
import { grey, green, yellow, red } from "@mui/material/colors";
import IPokemon from "../../../models/IPokemon";

type IProps = { pokemon: IPokemon }

const CardDetails: FC<IProps> = ({ pokemon }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        width: "100%",
        borderRadius: 6,
        boxShadow: 10,
        padding: 3,
        background: `linear-gradient(135deg, ${grey[50]} 30%, ${green[50]} 100%)`,
        position: "relative",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            boxShadow: "0 0 20px rgba(0,0,0,0.15)",
            position: "absolute",
            top: { md: -80, xs: -55 },
            zIndex: 1,
          }}
        >
          <CardMedia
            component="img"
            image={pokemon.sprites.front_default}
            alt={pokemon.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      <CardContent sx={{ mt: 10 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textTransform="capitalize"
            color="text.primary"
          >
            {pokemon.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: green[500], fontWeight: "bold" }}
          >
            #{pokemon.id}
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={1} justifyContent="center" mb={3}>
          {pokemon.types.map((type) => (
            <Chip
              key={type.type.name}
              label={type.type.name}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: "0 10px",
                color: "#ffffff",
                backgroundColor:
                  type.type.name === "fire"
                    ? red[500]
                    : type.type.name === "water"
                    ? green[500]
                    : type.type.name === "electric"
                    ? yellow[700]
                    : type.type.name === "grass"
                    ? green[600]
                    : grey[700],
              }}
            />
          ))}
        </Stack>

        <Box
          mb={2}
          sx={{
            backgroundColor: "#e0f2f1",
            padding: 2,
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" mb={1} color="text.secondary">
            Estadísticas Base
          </Typography>
          <Stack spacing={1}>
            {pokemon.stats.map((stat) => (
              <Stack
                key={stat.stat.name}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  textTransform="capitalize"
                  fontWeight="medium"
                  color={grey[700]}
                >
                  {stat.stat.name}
                </Typography>
                <Box
                  sx={{
                    width: "60%",
                    height: 10,
                    backgroundColor: grey[300],
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${stat.base_stat}%`,
                      height: "100%",
                      backgroundColor:
                        stat.base_stat > 70
                          ? green[500]
                          : stat.base_stat > 40
                          ? yellow[700]
                          : red[400],
                    }}
                  />
                </Box>
                <Typography fontWeight="bold" color={grey[900]}>
                  {stat.base_stat}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
