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

const SavedJobScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", paddingHorizontal: 10 }} >
            <View style={{ flex: 0, flexDirection: "column", backgroundColor: "white", marginTop: -20, width: "100%", padding: 5, borderRadius: 10 }}>
                <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, padding: 5, borderRadius: 5 }}>
                    <View style={{ width: "30%" }}>
                        <Image style={{ borderRadius: 0, width: 100, height: 100, borderColor: theme['color-primary-500'], borderWidth: 1 }}
                            source={require('../assets/images/newlogo.png')} />
                    </View>
                    <View style={{ width: "40%" }}>
                        <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
                        <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "700" }}>Talent Book Casting</Text>
                        <View style={{ flex: 1, flexDirection: "row", margin: 0 }}>
                            <Button
                                size="tiny"
                                appearance="ghost"
                                accessoryRight={starIcon}
                                style={{ marginLeft: 0 }}
                            />
                            <Button
                                size="tiny"
                                appearance="ghost"
                                accessoryRight={starIcon}
                                style={{ marginLeft: -10 }}
                            />
                            <Button
                                size="tiny"
                                appearance="ghost"
                                accessoryRight={starIcon}
                                style={{ marginLeft: -10 }}
                            />
                            <Button
                                size="tiny"
                                appearance="ghost"
                                accessoryRight={starIcon}
                                style={{ marginLeft: -10 }}
                            />
                            <Button
                                size="tiny"
                                appearance="ghost"
                                accessoryRight={starIcon}
                                style={{ marginLeft: -10 }}
                            />
                            <Text style={{ marginTop: 17 }}>(5.0)</Text>
                        </View>
                    </View>
                    <View style={{ width: "30%" }}>
                        <Button
                            size="tiny"
                            status="warning"
                            appearance="ghost"
                            accessoryRight={bookmarkIcon}
                            style={{ position: "absolute", top: 0, right: 0 }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", marginBottom: -5 }}>
                        <Button
                            size="tiny"
                            status="basic"
                            appearance="ghost"
                            accessoryRight={pinIcon}
                            style={{}}
                        />
                        <Text style={{ fontSize: 12, marginLeft: 5, marginTop: 3 }}>
                            Petaling Jaya
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: -5 }}>
                        <Button
                            size="tiny"
                            status="basic"
                            appearance="ghost"
                            accessoryRight={moneyIcon}
                            style={{}}
                        />
                        <Text style={{ fontSize: 12, marginLeft: 5, marginTop: 3 }}>
                            RM 100/hour
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: -5 }}>
                        <Button
                            size="tiny"
                            status="basic"
                            appearance="ghost"
                            accessoryRight={calendarIcon}
                            style={{}}
                        />
                        <Text style={{ fontSize: 12, marginLeft: 5, marginTop: 3 }}>
                            01 Nomvember 2021 (1day)
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SavedJobScreen

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