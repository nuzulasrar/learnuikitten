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

const SavedJobScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Saved Job" backbutton={0} navigation={navigation} />
            <View style={{ flex: 0, flexDirection: "column", backgroundColor: theme['color-primary-100'], marginTop: 5, width: "100%", paddingVertical: 10, paddingHorizontal: 5, alignItems: "center", borderRadius: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("JobDetails")}
                    style={{ flex: 0, flexDirection: "column", backgroundColor: "white", marginTop: 0, width: "98%", paddingVertical: 10, paddingHorizontal: 5, borderRadius: 10 }}>
                    <TouchableOpacity style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, padding: 5, borderRadius: 5 }}>
                        <View style={{ width: "30%", height: 80 }}>
                            <Image style={{ borderRadius: 0, width: 80, height: 80, borderColor: theme['color-primary-500'], borderWidth: 1 }}
                                source={require('../assets/images/newlogo.png')} />
                        </View>
                        <View style={{ width: "60%" }}>
                            <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
                            <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}> </Text>
                            <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "700" }}>Talent Book Casting</Text>
                            <View style={{ flexDirection: "row", marginBottom: 0 }}>
                                {/* <Button
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
                            /> */}
                                <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={15} style={{ marginLeft: 0 }} />
                                <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={15} style={{ marginLeft: 5 }} />
                                <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={15} style={{ marginLeft: 5 }} />
                                <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={15} style={{ marginLeft: 5 }} />
                                <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} size={15} style={{ marginLeft: 5 }} />
                                <Text style={{ fontSize: 15, marginTop: -3 }}>(5.0)</Text>
                            </View>
                        </View>
                        <View style={{ width: "10%" }}>
                            <Button
                                size="tiny"
                                status="warning"
                                appearance="ghost"
                                accessoryRight={bookmarkIcon}
                                style={{ position: "absolute", top: 0, right: 0 }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginBottom: -5 }}>
                            <Button
                                size="tiny"
                                status="basic"
                                appearance="ghost"
                                accessoryRight={pinIcon}
                                style={{}}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 5, marginTop: 3 }}>
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
                            <Text style={{ fontSize: 14, marginLeft: 5, marginTop: 3 }}>
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
                            <Text style={{ fontSize: 14, marginLeft: 5, marginTop: 3 }}>
                                01 Nomvember 2021 (1day)
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SavedJobScreen

const styles = StyleSheet.create({
    icon1: {
        width: 32,
        height: 32,
    },
    icon2: {
        width: 14,
        height: 14,
    },
    icon3: {
        width: 12,
        height: 12,
    },
});