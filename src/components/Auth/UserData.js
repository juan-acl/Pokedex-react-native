import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import useAuth from '../../hooks'

export default function UserData() {
    const { username, logout } = useAuth()
    console.log('Username', username)
    return (
        <View style={styles.content} >
            <View style={styles.welcome}>
                <Text style={styles.title} >Bienvenido</Text>
                <Text style={styles.title} >{username.name} {username.lastName}</Text>
            </View>
            <View>
                <ItemMenu title='Nombre' texto={`${username.name} ${username.lastName}`} />
                <ItemMenu title='Nombre de usuario' texto={username.username} />
                <ItemMenu title='Correo' texto={username.email} />
                <ItemMenu title='Pokemons Favoritos' texto={username.totalFavorites} />
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