import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, TopNavigation, TopNavigationAction, Input } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const hello = () => {
    alert("hello")
}

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <ScrollView contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                    style={{ borderRadius: 500, width: 200, height: 200, marginBottom: -10 }}
                    source={require('../assets/images/newlogo.png')}
                />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 80 }}>
                    <TouchableOpacity onPress={hello}>
                        <View style={{ width: 125, height: 125, backgroundColor: "white", margin: 20, justifyContent: "center", alignItems: "center" }}>
                            <Button
                                buttonStyle={{ width: 125, height: 60, backgroundColor: "transparent" }}
                                icon={{
                                    name: "camera-alt",
                                    size: 50,
                                    color: "black"
                                }}
                                onPress={hello}
                            />
                            <Text style={{ alignSelf: "center" }}>GALLERY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={hello}>
                        <View style={{ width: 125, height: 125, backgroundColor: "white", margin: 20, justifyContent: "center", alignItems: "center" }}>
                            <Button
                                buttonStyle={{ width: 125, height: 60, backgroundColor: "transparent" }}
                                icon={{
                                    name: "search",
                                    size: 50,
                                    color: "black"
                                }}
                                onPress={hello}
                            />
                            <Text style={{ alignSelf: "center" }}>JOBS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 50, height: 50, backgroundColor: "transparent", margin: 0, justifyContent: "center", alignItems: "center" }}>
                        <Button
                            buttonStyle={{ width: 60, height: 60, backgroundColor: "transparent" }}
                            icon={
                                < Icon
                                    name="instagram"
                                    size={30}
                                    color="black"
                                />
                            }
                            onPress={hello}
                        />
                    </View>
                    <View style={{ width: 50, height: 50, backgroundColor: "transparent", margin: 0, justifyContent: "center", alignItems: "center" }}>
                        <Button
                            buttonStyle={{ width: 60, height: 60, backgroundColor: "transparent" }}
                            icon={{
                                name: "facebook",
                                size: 30,
                                color: "black"
                            }}
                            onPress={hello}
                        />
                    </View>
                    <View style={{ width: 50, height: 50, backgroundColor: "transparent", margin: 0, justifyContent: "center", alignItems: "center" }}>
                        <Button
                            buttonStyle={{ width: 60, height: 60, backgroundColor: "transparent" }}
                            icon={
                                < Icon
                                    name="youtube-square"
                                    size={30}
                                    color="black"
                                />
                            }
                            onPress={hello}
                        />
                    </View>
                    <View style={{ width: 50, height: 50, backgroundColor: "transparent", margin: 0, justifyContent: "center", alignItems: "center" }}>
                        <Button
                            buttonStyle={{ width: 60, height: 60, backgroundColor: "transparent" }}
                            icon={< Icon
                                name="whatsapp"
                                size={30}
                                color="black"
                            />}
                            onPress={hello}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeScreen

const styles = StyleSheet.create({})