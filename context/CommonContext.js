import { StyleSheet, Text, View } from 'react-native';
import React, { useState, createContext } from 'react';

const CommonContext = createContext("")

const CommonContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bottomNavPosition, setBottomNavPosition] = useState(0);

    return (
        <CommonContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            bottomNavPosition,
            setBottomNavPosition
        }}>
            {children}
        </CommonContext.Provider>
    )
}

export { CommonContext, CommonContextProvider };