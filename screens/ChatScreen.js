import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, BottomNavigation, BottomNavigationTab, Layout, Text, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';

const bookmarkIcon = () => (
    <Icon
        style={styles.icon1}
        fill={theme['color-warning-500']}
        name='bookmark'
    />
);

const starIcon = () => (
    <Icon
        style={styles.icon2}
        fill={theme['color-warning-500']}
        name='star'
    />
);

const pinIcon = () => (
    <Icon
        style={styles.icon3}
        fill="black"
        name='pin'
    />
);

const moneyIcon = () => (
    <Icon
        style={styles.icon3}
        fill="black"
        name='shopping-cart'
    />
);

const calendarIcon = () => (
    <Icon
        style={styles.icon3}
        fill="black"
        name='calendar'
    />
);

const ChatScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", paddingHorizontal: 10 }} >
            <View style={{ flex: 0, flexDirection: "column", backgroundColor: "white", marginTop: -20, width: "100%", padding: 5, borderRadius: 5 }}>
                <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, padding: 5, borderRadius: 5 }}>
                    <View style={{ width: "25%" }}>
                        <Image style={{ borderRadius: 100, width: 65, height: 65, borderColor: theme['color-primary-500'], borderWidth: 1 }}
                            source={require('../assets/images/newlogo.png')} />
                    </View>
                    <View style={{ width: "55%" }}>
                        <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Talent Book Casting</Text>
                        <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "300", marginTop: 8 }}>You are welcome!</Text>
                        <View style={{ flex: 1, flexDirection: "row", margin: 0 }}>
                        </View>
                    </View>
                    <View style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 12 }}>1 days ago</Text>


                        <View style={{
                            width: 25,
                            height: 25,
                            borderRadius: 20,
                            backgroundColor: theme['color-primary-500'],
                            justifyContent: 'center',
                            marginTop: 5
                        }}>
                            <Text style={{ fontSize: 14, textAlign: 'center', color: "white" }}>2</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    icon1: {
        width: 32,
        height: 32,
    },
    icon2: {
        width: 20,
        height: 20,
    },
    icon3: {
        width: 12,
        height: 12,
    },
});