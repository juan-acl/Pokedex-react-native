import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export const Logout = () => {
    const navigation = useNavigation()
    const navigate = () => {
        //Verificamos el nombre de la screen pero en el archivo de navegacion que corresponda a ese componente
        navigation.navigate('ScreenAccount')
    }

  return (
    <View style={styles.content} >
      <Text style={styles.text} >Inicia sesion</Text>
      <Button
        title='Ir a login'
        onPress={navigate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        marginBottom: 10
    },
    content: {
        marginVertical: 50,
        paddingHorizontal: 50
    }
})

export default Logout;