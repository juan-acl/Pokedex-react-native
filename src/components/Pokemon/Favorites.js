import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { addFavorite, getFavorites, isFavoritePokemon } from '../../helpers/Favorite'

export default function Favorites(props) {
    const [isFavorite, setisFavorite] = useState(false);
    const [reload, setReload] = useState(false);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    const onReload = () => {
        setReload(prev => !prev);
    }

    const checkFavorite = async () => {
        const favorites = await isFavoritePokemon(props.id);
        console.log('Checking', favorites)
        if (favorites !== null || favorites !== undefined) {
            setisFavorite(favorites);
        }
    }

    const removeFavorite = async () => {
        setisFavorite(false);
    }

    useEffect(() => {
        checkFavorite()
    }, [props.id, reload]);

    const addFavorites = async () => {
        const favorites = await getFavorites();
        onReload()
        console.log('GetFavorites', favorites)
        if (favorites !== null) {
            if (favorites?.includes(props.id)) {
                console.log('Already in favorites')
            } else {
                addFavorite(props.id)
            }
        } else {
            addFavorite(props.id)
        }
    }

    return (
        <View>
            <Icon name='heart' color="#fff" size={30} onPress={isFavorite ? removeFavorite : addFavorites} style={{ marginRight: 30 }} />
        </View>
    )
}