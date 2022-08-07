import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const NewScreen = () => {
    return (
        <WebView source={{ uri: 'https://ad-on.my' }} />
    )
}

export default NewScreen

const styles = StyleSheet.create({})