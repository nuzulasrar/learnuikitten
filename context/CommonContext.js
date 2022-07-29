import { StyleSheet, Text, View } from 'react-native';
import React, { useState, createContext } from 'react';

const CommonContext = createContext("")

const CommonContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <CommonContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
        }}>
            {children}
        </CommonContext.Provider>
    )
}

export { CommonContext, CommonContextProvider };