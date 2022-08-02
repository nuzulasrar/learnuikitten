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
import { faHeadphones } from '@fortawesome/free-solid-svg-icons/faHeadphones'

library.add(fab, faCirclePlus, faTrashCan, faHeadphones)

const AddAudioScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", paddingHorizontal: 10 }} >
            <View style={{ flex: 0, flexDirection: "column", backgroundColor: "transparent", marginTop: -20, width: "100%", padding: 5, borderRadius: 10 }}>

                <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { alert("add audio") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                        <FontAwesomeIcon icon={faCirclePlus} color={theme['color-primary-200']} size={40} />
                        <Text style={{ fontSize: 10, marginTop: 5 }}>Add Audio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { alert("press audio") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                        <TouchableOpacity onPress={() => { alert("play audio") }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faHeadphones} color={theme['color-primary-500']} size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 25, height: 25, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { alert("press audio") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                        <TouchableOpacity onPress={() => { alert("play audio") }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faHeadphones} color={theme['color-primary-500']} size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 25, height: 25, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0, flexDirection: "row", width: "100%", marginVertical: 1, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { alert("press audio") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                        <TouchableOpacity onPress={() => { alert("play audio") }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faHeadphones} color={theme['color-primary-500']} size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 25, height: 25, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { alert("press audio") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                        <TouchableOpacity onPress={() => { alert("play audio") }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faHeadphones} color={theme['color-primary-500']} size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 25, height: 25, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { alert("press audio") }} style={{ backgroundColor: "white", width: 100, height: 100, borderRadius: 5, margin: 10, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 1, borderStyle: "dotted" }}>
                        <TouchableOpacity onPress={() => { alert("play audio") }} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faHeadphones} color={theme['color-primary-500']} size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert("delete") }} style={{ width: 25, height: 25, backgroundColor: theme['color-primary-500'], borderRadius: 50, position: "absolute", right: 5, bottom: 5, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faTrashCan} color={"white"} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddAudioScreen

const styles = StyleSheet.create({})