import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, BottomNavigation, BottomNavigationTab, Layout, Text, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'expo-linear-gradient';

library.add(fab, faPlus, faCircleCheck, faCircleArrowRight)

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
        fill="#999"
        name='star'
    />
);

const starIcon2 = () => (
    <Icon
        style={styles.icon2}
        fill="#fff"
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


const MembershipScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", width: "100%", marginTop: 0 }} >
            <ScrollView contentContainerStyle={{ flex: 0, flexDirection: "column", marginTop: 0, width: "100%", backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 0, width: "100%", justifyContent: "flex-start", alignItems: "flex-start", marginTop: 0 }}>
                    <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Subscription</Text>
                </View>
                <View style={{ fontSize: 18, flex: 0, width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: theme['color-primary-500'] }}>PREMIUM</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>{"\n"}Valid up to 31 December 2022{"\n"}</Text>
                    <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, width: 30, height: 1 }}>

                    </View>
                </View>
                <View style={{ flex: 1, padding: 20, marginVertical: 10, borderRadius: 5, backgroundColor: '#208BC7', width: "95%", marginBottom: 0, borderColor: theme['color-primary-500'], borderWidth: 1 }}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#e7f9fc', 'transparent']}
                        style={styles.background}>

                    </LinearGradient>
                    <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20, textAlign: "center" }}>Premium</Text>

                    <View style={{ paddingHorizontal: 50 }}>
                        <View style={{ flexDirection: "row", marginBottom: 10, justifyContent: "flex-start", alignItems: "flex-start" }}>
                            <FontAwesomeIcon icon={faCircleCheck} color={theme['color-primary-500']} size={24} />
                            <Text style={{ marginLeft: 10, textAlign: "left" }}>Upload up to 15 photos</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <FontAwesomeIcon icon={faCircleCheck} color={theme['color-primary-500']} size={24} />
                            <Text style={{ marginLeft: 10 }}>Upload up to 6 videos & audios</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <FontAwesomeIcon icon={faCircleCheck} color={theme['color-primary-500']} size={24} />
                            <Text style={{ marginLeft: 10 }}>Custom Comp Card</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <FontAwesomeIcon icon={faCircleCheck} color={theme['color-primary-500']} size={24} />
                            <Text style={{ marginLeft: 10 }}>Unlock all feature</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ color: "white", marginTop: 2, textAlign: "center" }}>RM</Text>
                        <Text style={{ color: "white", fontSize: 32, textAlign: "center" }}>XX</Text>
                        <Text style={{ color: "white", marginTop: 20, textAlign: "center" }}>/</Text>
                        <Text style={{ color: "white", marginTop: 20, textAlign: "center" }}>year</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: "black", marginTop: 10, marginBottom: 15, fontSize: 18 }}>Renew your membership:</Text>
                </View>

                <View style={{ flex: 1, padding: 20, marginVertical: 10, borderRadius: 5, backgroundColor: '#E3F8FE', width: "95%", borderColor: theme['color-primary-500'], borderWidth: 1 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 10, height: 10, marginTop: -7, backgroundColor: theme['color-primary-500'], borderRadius: 50 }}></View>
                        <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 10, marginTop: -15, textAlign: "center", color: theme['color-primary-500'] }}>1 year membership</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "75%", paddingLeft: 20 }}>
                            <Text style={{ color: "black", marginTop: 2, textAlign: "left" }}>Special prices are only available until 31 December 2022</Text>
                        </View>
                        <View style={{ width: "25%" }}>
                            <Text style={{ color: "black", marginTop: 2, textAlign: "right", position: "absolute", bottom: 0, right: 0, fontSize: 18, fontWeight: "bold" }}>RMXX</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, padding: 20, marginVertical: 10, borderRadius: 5, backgroundColor: theme['color-primary-500'], width: "95%", borderColor: theme['color-primary-500'], borderWidth: 1 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: -15, textAlign: "center", color: "white" }}>Renew Now</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "75%" }}>
                            <Text style={{ color: "white", marginTop: 2, textAlign: "left" }}>12 months membership (RMXX)</Text>
                        </View>
                        <View style={{ width: "25%" }}>
                            <FontAwesomeIcon icon={faCircleArrowRight} color={"white"} size={20} style={{ position: "absolute", right: 0 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default MembershipScreen

const styles = StyleSheet.create({
    icon1: {
        width: 32,
        height: 32,
    },
    icon2: {
        width: 16,
        height: 16,
    },
    icon3: {
        width: 12,
        height: 12,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
        borderRadius: 5
    }
});