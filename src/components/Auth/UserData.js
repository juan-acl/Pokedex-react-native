import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { DetailUser } from '../../helpers/userDB'
import { useFocusEffect } from '@react-navigation/native'
import { getFavorites } from '../../helpers/Favorite'
import useAuth from '../../hooks'

export default function UserData() {
    const {  logout } = useAuth()
    const [countFav, setCountFav] = useState(0);
    const loaginCount = async () => {
        const response = await getFavorites();
        setCountFav(response.length || 0)
    }
    
    useFocusEffect(
        useCallback(() => {
        loaginCount()
        }, [])
    )

    // useEffect(() => {
    //     loaginCount()
    // }, []);

    return (
        <View style={styles.content} >
            <View style={styles.welcome}>
                <Text style={styles.title} >Bienvenido</Text>
                <Text style={styles.title} >{DetailUser.username} {DetailUser.username}</Text>
            </View>
            <View>
                <ItemMenu title='Nombre' texto={`${DetailUser.name} ${DetailUser.lastName}`} />
                <ItemMenu title='Nombre de usuario' texto={DetailUser.username} />
                <ItemMenu title='Correo' texto={DetailUser.email} />
                <ItemMenu title='Pokemons Favoritos' texto={countFav + ' pokemons'} />
            </View>
            <Button title='Log Out' onPress={logout} />
        </View>
    )
}

function ItemMenu(props) {
    const { title, texto } = props
    return (
        <View style={styles.itemMenu} >
            <Text style={styles.itemTitle} >
                {title + ": "}
            </Text>
            <Text>
                {texto}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemTitle: {
        fontWeight: 'bold',
        marginRight: 10,
        width: 150
    },
    itemMenu: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    dataContent: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    welcome: {
        marginBottom: 30
    },
    content: {
        marginHorizontal: 20,
        marginTop: 20,
    }
})