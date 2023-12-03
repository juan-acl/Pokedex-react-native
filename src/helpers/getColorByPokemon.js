import { POKEMON_TYPE_COLORS } from "./url";

export const getColorByPokemon = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];
