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
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons/faStarOfLife'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faShareNodes, faStarOfLife)

const AddCompCardScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Comp Card" backbutton={1} backto="profile" navigation={navigation} />
            <ScrollView style={{ marginTop: 5, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 5, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15 }}>Comp Card 1 </Text>
                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: 15, backgroundColor: theme['color-primary-500'], borderRadius: 5, paddingHorizontal: 8, paddingTop: 2, paddingBottom: 2 }}>
                        <FontAwesomeIcon icon={faShareNodes} color={"white"} />
                        <Text style={{ fontSize: 13, color: "white" }}> SHARE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0,
                    flexDirection: "column",
                    backgroundColor: "white",
                    marginTop: 0,
                    width: "100%",
                    padding: 5,
                    borderRadius: 5,
                    borderColor: theme['color-primary-300'],
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>PREVIEW</Text>
                    <Image source={require("../assets/images/gridimages/1.jpg")} style={{ width: 187, height: 215, marginVertical: 10, borderColor: "black", borderWidth: 1 }} />
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>ANGELINA</Text>
                    <View style={{ borderBottomColor: "black", borderBottomWidth: 1, height: 1, width: "50%" }}></View>
                    <Text style={{ fontSize: 12 }}>WWW.NEWLOOKCASTING.COM</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 5, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15 }}>Comp Card 2 </Text>
                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: 15, backgroundColor: theme['color-primary-500'], borderRadius: 5, paddingHorizontal: 8, paddingTop: 2, paddingBottom: 2 }}>
                        <FontAwesomeIcon icon={faShareNodes} color={"white"} />
                        <Text style={{ fontSize: 13, color: "white" }}> SHARE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0,
                    flexDirection: "column",
                    backgroundColor: "white",
                    marginTop: 0,
                    width: "100%",
                    padding: 5,
                    borderRadius: 5,
                    borderColor: theme['color-primary-300'],
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "transparent",
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                }}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>PREVIEW</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/images/profile/1.jpg")} style={{ width: 115, height: 138, marginVertical: 10, marginHorizontal: 10, borderColor: "black", borderWidth: 0 }} />
                        <Image source={require("../assets/images/profile/2.jpg")} style={{ width: 115, height: 138, marginVertical: 10, marginHorizontal: 10, borderColor: "black", borderWidth: 0 }} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/images/profile/1.jpg")} style={{ width: 115, height: 138, marginVertical: 10, marginHorizontal: 10, borderColor: "black", borderWidth: 0 }} />
                        <Image source={require("../assets/images/profile/2.jpg")} style={{ width: 115, height: 138, marginVertical: 10, marginHorizontal: 10, borderColor: "black", borderWidth: 0 }} />
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginHorizontal: 50 }}>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>ANGELINA</Text>
                            <Text style={{ fontSize: 14, fontWeight: "700" }}>Y. O. B : 1985</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <Image source={require("../assets/images/newlogo.png")} style={{ width: 39, height: 39 }} />
                        </View>
                    </View>
                </View>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                }}>
                    <Text style={{ color: "white", fontSize: 12, marginTop: 5, marginBottom: 5 }}>INFO@TALENTBOOK.COM / +60123456789</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 5, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15 }}>Comp Card 3 </Text>
                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: 15, backgroundColor: theme['color-primary-500'], borderRadius: 5, paddingHorizontal: 8, paddingTop: 2, paddingBottom: 2 }}>
                        <FontAwesomeIcon icon={faShareNodes} color={"white"} />
                        <Text style={{ fontSize: 13, color: "white" }}> SHARE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0,
                    flexDirection: "column",
                    backgroundColor: "white",
                    marginTop: 0,
                    marginBottom: 15,
                    width: "100%",
                    padding: 5,
                    borderRadius: 5,
                    borderColor: theme['color-primary-300'],
                    borderWidth: 1,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}>
                    <Button size="small" style={{ marginTop: 5 }}>Upload File</Button>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}>
                        <FontAwesomeIcon icon={faStarOfLife} size={10} color={"red"} style={{ marginTop: 2 }} />
                        <Text style={{ fontSize: 10, fontWeight: "100" }}> Supported file types (.pdf, .jpg)</Text>
                    </View>
                </View>
                <View style={{ height: 60 }}>

                </View>
            </ScrollView>
        </View >
    )
}

export default AddCompCardScreen

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