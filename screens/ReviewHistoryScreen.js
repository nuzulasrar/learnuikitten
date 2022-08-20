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
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faStar)

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

const ReviewHistoryScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, }} >
            <StatusBarScreen />
            <TopNav title="Review History" backbutton={1} navigation={navigation} />
            <View style={{ flex: 0, flexDirection: "column", backgroundColor: theme['color-primary-100'], marginTop: 5, width: "100%", paddingVertical: 10, paddingHorizontal: 5, alignItems: "center", borderRadius: 0 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("JobDetails")}
                    style={{ flex: 0, flexDirection: "column", backgroundColor: "white", marginTop: 0, width: "98%", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10 }}
                >
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>BRAND AMBASSADOR</Text>
                    <Text style={{ fontSize: 14, fontWeight: "700", marginBottom: 5 }}>Talent Book Casting</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: 125, marginBottom: 5 }}>
                        <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={18} />
                        <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={18} />
                        <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={18} />
                        <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={18} />
                        <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={18} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 9 }}>
                            <Text style={{ fontSize: 13, marginRight: 5 }}>"I had a great time!"</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => { alert("delete") }}
                                style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}

export default ReviewHistoryScreen

const styles = StyleSheet.create({})