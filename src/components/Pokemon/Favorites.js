import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorites(props) {

    const addFavorites = () => { console.log('Props', props.id) }

    return (
        <View>
            <Icon name='heart' color="#fff" size={30} onPress={addFavorites} style={{ marginRight: 30 }} />
        </View>
    )
}