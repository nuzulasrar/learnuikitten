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
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faPlus, faTrashCan, faChevronRight)

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, }} >
            <StatusBarScreen />
            <TopNav title="Settings" backbutton={1} navigation={navigation} />
            <View style={{ marginTop: 30, paddingHorizontal: 30, backgroundColor: "transparent" }}>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18, borderBottomColor: "white", borderBottomWidth: 1, paddingBottom: 10 }}>
                    <View style={{ flex: 0 }}>
                        <Text style={{ fontSize: 14 }}>Review History</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <FontAwesomeIcon icon={faChevronRight} size={14} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18, borderBottomColor: "white", borderBottomWidth: 1, paddingBottom: 10 }}>
                    <View style={{ flex: 0 }}>
                        <Text style={{ fontSize: 14 }}>Upgrade Membership</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <FontAwesomeIcon icon={faChevronRight} size={14} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18, borderBottomColor: "white", borderBottomWidth: 1, paddingBottom: 10 }}>
                    <View style={{ flex: 0 }}>
                        <Text style={{ fontSize: 14 }}>Contact Customer Service</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <FontAwesomeIcon icon={faChevronRight} size={14} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18, borderBottomColor: "white", borderBottomWidth: 1, paddingBottom: 10 }}>
                    <View style={{ flex: 0 }}>
                        <Text style={{ fontSize: 14 }}>Terms and Conditions</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <FontAwesomeIcon icon={faChevronRight} size={14} />
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 100, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: theme['color-danger-100'], justifyContent: "center", alignItems: "center", paddingVertical: 5, paddingHorizontal: 15, width: 128, height: 33 }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>LOG OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})