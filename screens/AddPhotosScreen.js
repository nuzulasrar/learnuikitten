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

const AddPhotosScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Photos" backbutton={1} backto="profile" navigation={navigation} />
            <ScrollView style={{ flex: 0, flexDirection: "column", backgroundColor: "transparent", marginTop: 0, width: "100%" }}>
                <View style={{ flex: 0, flexDirection: "column", backgroundColor: "transparent", marginTop: 0, width: "100%", padding: 5, borderRadius: 10 }}>
                    <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { alert("add picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                            <FontAwesomeIcon icon={faCirclePlus} color={theme['color-primary-200']} size={40} />
                            <Text style={{ fontSize: 10, marginTop: 5 }}>Add Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/1.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/2.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/3.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/4.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/5.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/6.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/7.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/8.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/9.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/10.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("press picture") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10 }}>
                            <ImageBackground
                                source={require('../assets/images/gridimages/11.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 5 }}
                            >
                                <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 30, height: 30, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                                    <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default AddPhotosScreen

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