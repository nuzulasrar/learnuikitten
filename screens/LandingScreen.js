import React, { useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, BottomNavigation, BottomNavigationTab, Layout, Text, Button, TopNavigation, TopNavigationAction, Input } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';

const LandingScreen = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }} >
        <ImageBackground
            source={require('../assets/images/background-image.jpg')}
            resizeMode="cover"
            style={[styles.bgimage, { justifyContent: 'center', alignItems: 'center' }]}
        >
            {/* <Image
                style={[styles.stretch, { borderRadius: 500, width: 350, height: 350, marginBottom: 50 }]}
                source={require('./assets/images/newlook-logo.png')}
            />
            <Text
                style={{ fontWeight: "800", fontSize: 35, textAlign: "center" }}
            >
                It's Your Time {"\n"} to SHINE
            </Text>
            <Text style={{ textAlign: "center", margin: 20, marginBottom: 60 }}>
                Show us your talent. We'll make it shine. {"\n"} Because talent should never be hidden and making the most out of your talent.
            </Text> */}
            <Button
                appearance="filled"
                onPress={() => navigation.navigate("Login", { appear: true })}
                style={{ minWidth: "90%", borderBottomRightRadius: 0, borderTopRightRadius: 0, marginVertical: 10, marginTop: 350 }}>
                LOG IN
            </Button>
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                    <Button
                        appearance="outline"
                        status="info"
                        onPress={() => navigation.navigate("Join", { jointype: 1 })}
                        style={{ margin: 20, borderBottomRightRadius: 0, borderTopRightRadius: 0, width: "80%" }}>
                        JOIN AS TALENT
                    </Button>
                </View>
                <View style={{ width: "50%" }}>
                    <Button
                        appearance="outline"
                        status="info"
                        onPress={() => navigation.navigate("Help")}
                        style={{ margin: 20, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, width: "80%" }}
                    >
                        JOIN AS CLIENT
                    </Button>
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView >
);

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

export default LandingScreen;