import { StyleSheet, Text, View } from 'react-native';
import React, { useState, createContext } from 'react';

const CommonContext = createContext("")

const CommonContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accountType, setAccountType] = useState(0);
    const [bottomNavPosition, setBottomNavPosition] = useState(0);

    return (
        <CommonContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            accountType,
            setAccountType,
            bottomNavPosition,
            setBottomNavPosition
        }}>
            {children}
        </CommonContext.Provider>
    )
}

export { CommonContext, CommonContextProvider };