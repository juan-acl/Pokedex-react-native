import AsyncStorage from '@react-native-async-storage/async-storage';
import { Favorite_Storage } from './url';

export async function addFavorite(id) {
    try {
        let favorites = await getFavorites();
        if (favorites === undefined || favorites === null) favorites = [];
        favorites.push(id);
        await AsyncStorage.setItem(Favorite_Storage, JSON.stringify(favorites));
    } catch (error) {
        console.log('Error saving data', error);
    }
}

export async function getFavorites() {
    try {
        const favorites = await AsyncStorage.getItem(Favorite_Storage);
        if (favorites !== null) {
            return JSON.parse(favorites) || [];
        }
    } catch (error) {
        console.log('Error retrieving data', error);
    }
}

export async function isFavoritePokemon(id) {
    try {
        const favorites = await getFavorites();
            return favorites?.includes(id);
    } catch (error) {
        console.log('Error retrieving data', error);
    }
}

export async function removeFavorite(id) {
    try {
        const favorites = await getFavorites();
        const newFavorites = favorites.filter((fav) => fav !== id);
        await AsyncStorage.setItem(Favorite_Storage, JSON.stringify(newFavorites));
    } catch (error) {
        console.log('Error saving data', error);
    }
} 
