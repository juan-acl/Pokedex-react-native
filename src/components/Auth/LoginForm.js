import React, { useState, } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Keyboard } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { User } from "../../helpers/userDB"
import useAuth from "../../hooks"

export default function LoginForm() {
    const { login } = useAuth()
    const [error, setError] = useState('');
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required!'),
            password: Yup.string().required('Password is required!'),
        }),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (form) => {
            const { username, password } = form
            if (username !== User.username || password !== User.password) {
                setError('Username or password invalid!')
            } else {
                login(username)
                setError('')
            }
        }
    })

    const hanldeChangeUsername = (e) => {
        formik.setFieldValue('username', e)
    }

    const hanldeChangePassword = (e) => {
        formik.setFieldValue('password', e)
    }

    return (
        <View>
            <Text style={styles.title} >PokeLogIn</Text>
            <TextInput
                placeholder='Username'
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={hanldeChangeUsername}
            />
            <TextInput
                placeholder='Password'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={hanldeChangePassword}
            />
            <Button title='Log In' onPress={formik.handleSubmit} />
            <Text style={styles.error} >{formik.errors.username}</Text>
            <Text style={styles.error} >{formik.errors.password}</Text>
            <Text style={styles.error} >{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: '#ff0000',
        textAlign: 'center',
        marginTop: 10
    },
    input: {
        height: 50,
        color: '#000000',
        marginBottom: 25,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000000'

    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    }
})