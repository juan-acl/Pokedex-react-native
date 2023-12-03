import { API_URL } from "./url";

export const getPokemons = async () => {
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Hubo un error getPokemons", error);
  } finally {
  }
};
