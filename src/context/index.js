import React, { createContext, useState } from "react";
import { DetailUser } from "../helpers/userDB";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState({});

    const login = (username) => {
        setUsername(DetailUser);
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

