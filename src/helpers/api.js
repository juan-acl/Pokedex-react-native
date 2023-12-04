import { API_URL } from "./url";

export const getPokemons = async (nextUrl) => {
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await fetch(nextUrl || url);
    const result = await response.json();
    // console.log(JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    console.log("Hubo un error getPokemons", error);
  } finally {
  }
};

export const DetailPokemons = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
  } finally {
  }
};

export const getPokemonById = async (id) => {
  try {
    const url = `${API_URL}/pokemon/${id}`;
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
};
