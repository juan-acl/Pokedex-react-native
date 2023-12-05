import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState('');

    const login = (username) => {
        setUsername(username);
    }

    const logout = () => {
        setUsername('');
    }

    return (
        <AuthContext.Provider
            value={{
                login: login,
                logout: logout,
                username: username
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

