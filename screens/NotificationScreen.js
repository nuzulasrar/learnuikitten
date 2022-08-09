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

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Notification" backbutton={1} navigation={navigation} />
            <View style={{ width: "100%", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", width: "90%", backgroundColor: "transparent", borderBottomColor: "white", borderBottomWidth: 1, paddingBottom: 10, marginVertical: 5 }}>
                    <View style={{}}>
                        <ImageBackground source={require("../assets/images/newlogo.png")} resizeMode="contain" style={{ borderRadius: 50, borderWidth: 1, borderColor: theme['color-primary-300'], marginRight: 10 }}>
                            <View style={{ width: 70, height: 70 }}>

                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: "75%" }}>
                        <Text style={{ fontSize: 14, marginTop: 15, marginLeft: 0, textAlign: "justify" }}>Your application on Hand-Modeling job has been rejected. </Text>
                        <Text style={{ position: "absolute", bottom: 0, right: 0 }}>1 day ago.</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", width: "90%", backgroundColor: "transparent", borderBottomColor: "white", borderBottomWidth: 1, paddingBottom: 10, marginVertical: 5 }}>
                    <View style={{}}>
                        <ImageBackground source={require("../assets/images/newlogo.png")} resizeMode="contain" style={{ borderRadius: 50, borderWidth: 1, borderColor: theme['color-primary-300'], marginRight: 10 }}>
                            <View style={{ width: 70, height: 70 }}>

                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: "75%" }}>
                        <Text style={{ fontSize: 14, marginTop: 15, marginLeft: 0, textAlign: "justify" }}>Your application on Hand-Modeling job has been rejected. </Text>
                        <Text style={{ position: "absolute", bottom: 0, right: 0 }}>1 day ago.</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", width: "90%", backgroundColor: "transparent", borderBottomColor: "white", borderBottomWidth: 1, paddingBottom: 10, marginVertical: 5 }}>
                    <View style={{}}>
                        <ImageBackground source={require("../assets/images/newlogo.png")} resizeMode="contain" style={{ borderRadius: 50, borderWidth: 1, borderColor: theme['color-primary-300'], marginRight: 10 }}>
                            <View style={{ width: 70, height: 70 }}>

                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: "75%" }}>
                        <Text style={{ fontSize: 14, marginTop: 15, marginLeft: 0, textAlign: "justify" }}>Your application on Hand-Modeling job has been rejected. </Text>
                        <Text style={{ position: "absolute", bottom: 0, right: 0 }}>1 day ago.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({})