import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback, Platform } from 'react-native';
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
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';
import Checkbox from 'expo-checkbox';
import RNPickerSelect from 'react-native-picker-select';

library.add(fab, faStar, faCamera)

const UploadProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, marginBottom: 0 }} >
            <StatusBarScreen />
            <TopNav title="Upload Profile Picture" backbutton={1} navigation={navigation} />
            <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], alignItems: "center", marginTop: 40 }}>
                <TouchableOpacity style={{ backgroundColor: "white", width: 260, height: 260, borderRadius: 400, justifyContent: "center", alignContent: "center" }}>
                    <FontAwesomeIcon icon={faCamera} size={44} style={{ alignSelf: "center", color: "#ABABAB" }} />
                </TouchableOpacity>
                <View style={{ marginVertical: 20, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SubscriptionPlan")}
                        style={{ marginTop: 10, marginBottom: 15, backgroundColor: theme['color-primary-500'], width: 181, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>UPLOAD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("SubscriptionPlan")}
                        style={{ marginTop: 10, backgroundColor: "transparent", borderColor: theme['color-primary-500'], borderWidth: 1, width: 181, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                        <Text style={{ color: theme['color-primary-500'], fontSize: 18, fontWeight: "bold" }}>SKIP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default UploadProfileScreen

const styles = StyleSheet.create({})