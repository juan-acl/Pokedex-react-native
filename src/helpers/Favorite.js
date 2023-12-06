import AsyncStorage from '@react-native-async-storage/async-storage';
import { Favorite_Storage } from './url';

export async function addFavorite(id) {
    try {
        const favorites = await getFavorites();
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
        if (favorites !== null) {
            return favorites?.includes(id);
        }
    } catch (error) {
        console.log('Error retrieving data', error);
    }
}