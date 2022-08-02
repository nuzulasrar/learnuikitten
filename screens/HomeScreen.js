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
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white", width: "100%" }} >
            <ImageBackground
                source={require('../assets/images/bg-home.jpg')}
                resizeMode="cover"
                blurRadius={3}
                style={[styles.bgimage, { justifyContent: 'center', alignItems: 'center' }]}
            >
                <View style={{ width: 20, height: 20, backgroundColor: "transparent", margin: 20, justifyContent: "center", alignItems: "center", position: "absolute", top: 0, right: 0 }}>
                    <Button
                        buttonStyle={{ width: 60, height: 60, backgroundColor: "transparent" }}
                        icon={
                            < Icon
                                name="bell"
                                size={30}
                                color="white"
                            />
                        }
                        onPress={hello}
                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={{ marginBottom: 210 }}></View>

                    <Image
                        style={{ borderRadius: 500, width: 200, height: 200, marginBottom: -10 }}
                        source={require('../assets/images/newlogo.png')}
                    />
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
                        <TouchableOpacity onPress={hello}>
                            <View style={{ width: 120, height: 120, backgroundColor: "white", margin: 20, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 4 }}>
                                <Button
                                    buttonStyle={{ width: 120, height: 60, backgroundColor: "transparent" }}
                                    icon={{
                                        name: "camera-alt",
                                        size: 50,
                                        color: theme['color-primary-500']
                                    }}
                                    onPress={hello}
                                />
                                <Text style={{ alignSelf: "center", fontSize: 20 }}>GALLERY</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={hello}>
                            <View style={{ width: 120, height: 120, backgroundColor: "white", margin: 20, justifyContent: "center", alignItems: "center", borderColor: theme['color-primary-500'], borderWidth: 4 }}>
                                <Button
                                    buttonStyle={{ width: 120, height: 60, backgroundColor: "transparent" }}
                                    icon={{
                                        name: "search",
                                        size: 50,
                                        color: theme['color-primary-500']
                                    }}
                                    onPress={hello}
                                />
                                <Text style={{ alignSelf: "center", fontSize: 20 }}>JOBS</Text>
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
                                        size={32}
                                        color={theme['color-primary-500']}
                                    />
                                }
                                onPress={hello}
                            />
                        </View>
                        <View style={{ width: 50, height: 50, backgroundColor: "transparent", margin: 0, justifyContent: "center", alignItems: "center" }}>
                            <Button
                                buttonStyle={{ width: 60, height: 60, backgroundColor: "transparent" }}
                                icon={< Icon
                                    name="facebook"
                                    size={32}
                                    color={theme['color-primary-500']}
                                />}
                                onPress={hello}
                            />
                        </View>
                        <View style={{ width: 50, height: 50, backgroundColor: "transparent", margin: 0, justifyContent: "center", alignItems: "center" }}>
                            <Button
                                buttonStyle={{ width: 60, height: 60, backgroundColor: "transparent" }}
                                icon={
                                    < Icon
                                        name="youtube"
                                        size={32}
                                        color={theme['color-primary-500']}
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
                                    size={32}
                                    color={theme['color-primary-500']}
                                />}
                                onPress={hello}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        margin: 5,
    },
    bgimage: {
        flex: 1,
        width: "100%",
        justifyContent: "center"
    },
});