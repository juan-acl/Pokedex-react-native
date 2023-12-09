import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { addFavorite, isFavoritePokemon, removeFavorite } from '../../helpers/Favorite'
import useAuth from '../../context'

export default function Favorites(props) {

    const [isFavorite, setisFavorite] = useState(false);
    const [reload, setReload] = useState(false);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    const onReload = () => {
        setReload(prev => !prev);
    }

    const checkFavorite = async () => {
        const favorites = await isFavoritePokemon(props.id);
            setisFavorite(favorites);
    }

    const removeFav = async () => {
        await removeFavorite(props.id);
        setisFavorite(false);
    }

    useEffect(() => {
        checkFavorite()
    }, [props.id, reload, isFavorite]);

    const addFavorites = async () => {
        await addFavorite(props.id)
        onReload()
    }

    return (
        <View>
            <Icon name='heart' color="#fff" size={30} onPress={isFavorite ? removeFav : addFavorites} style={{ marginRight: 30 }} />
        </View>
    )
}