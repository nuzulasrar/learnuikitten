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
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faCirclePlus, faTrashCan)

const GalleryCategoryScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white", width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Gallery" backbutton={1} backto="profile" navigation={navigation} />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 25, marginTop: 10 }}>Show By:</Text>
            <ScrollView style={{ flex: 0, flexDirection: "column", backgroundColor: "transparent", marginTop: 0, width: "100%" }}>
                <View style={{ flex: 0, flexDirection: "column", backgroundColor: "transparent", marginTop: 0, width: "100%", padding: 5, borderRadius: 10 }}>
                    <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("GalleryModel")} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/1.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>ALL</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/4.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>FEMALE</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/5.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>MALE</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/12.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>TEENAGER FEMALE</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/11.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>TEENAGER MALE</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/6.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>SENIOR FEMALE</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/7.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>SENIOR MALE</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/8.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>KIDS BOY</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/category/9.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5, justifyContent: "center", alignItems: "center" }}
                            >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.3)", width: "100%" }}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>KIDS GIRL</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default GalleryCategoryScreen

const styles = StyleSheet.create({})