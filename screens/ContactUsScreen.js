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
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab);

const ContactUsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, marginBottom: 0 }} >
            <StatusBarScreen />
            <TopNav title="Contact Us" backbutton={1} rightaccessory={0} navigation={navigation} />
            <ScrollView contentContainerStyle={{ marginBottom: 0 }}>
                <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ marginVertical: 5, fontSize: 16, fontWeight: "bold" }}>CONTACT CUSTOMER SUPPORT</Text>
                    <Text style={{ marginVertical: 5, fontSize: 14 }}>Got problem or have something to ask? Contact us!</Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                    <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.instagram.com/newlookcasting/')}
                            style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: Platform.OS == "android" ? "center" : "center", marginVertical: 8 }}>
                            <FontAwesomeIcon icon="fa-brands fa-square-instagram" color={theme['color-primary-500']} size={32} />
                            <Text style={{ fontSize: 14, marginLeft: 10 }}>@newlookcasting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.facebook.com/ModelTalentCasting/')}
                            style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: Platform.OS == "android" ? "center" : "center", marginVertical: 8 }}>
                            <FontAwesomeIcon icon="fa-brands fa-facebook" color={theme['color-primary-500']} size={32} />
                            <Text style={{ fontSize: 14, marginLeft: 10 }}>New Look Casting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.youtube.com/channel/UCECqK16z41SYvkMEh2TaBOA')}
                            style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: Platform.OS == "android" ? "center" : "center", marginVertical: 8 }}>
                            <FontAwesomeIcon icon="fa-brands fa-youtube" color={theme['color-primary-500']} size={32} />
                            <Text style={{ fontSize: 14, marginLeft: 10 }}>New Look Casting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=+60133692328')}
                            style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: Platform.OS == "android" ? "center" : "center", marginVertical: 8 }}>
                            <FontAwesomeIcon icon="fa-brands fa-square-whatsapp" color={theme['color-primary-500']} size={32} />
                            <Text style={{ fontSize: 14, marginLeft: 10 }}>+60133692328</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>FAQ</Text>
                    <View style={{ backgroundColor: "white", padding: 10, width: "95%", paddingBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: theme['color-primary-100'], borderBottomWidth: 1, paddingVertical: 10 }}>
                            <Text>Q: Membership Plan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomColor: theme['color-primary-100'], borderBottomWidth: 1, paddingVertical: 10 }}>
                            <Text>Q: Applying Job Process</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomColor: theme['color-primary-100'], borderBottomWidth: 1, paddingVertical: 10 }}>
                            <Text>Q: Job Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default ContactUsScreen

const styles = StyleSheet.create({})