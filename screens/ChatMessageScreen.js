import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
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
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare'
import { CommonContext, CommonContextProvider } from '../context/CommonContext';
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faPlus, faShare)

const ChatMessageScreen = ({ navigation }) => {

    const { bottomNavPosition, setBottomNavPosition } = useContext(CommonContext);

    useEffect(() => {
        //alert(Platform.OS ? "android" : Platform.OS == "ios" ?  : 1);
    }, []);

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    }, [navigation]);

    const [bottomFlexValue, setBottomFlexValue] = useState(60);

    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", (event) => {
            if (Platform.OS == "ios") setBottomFlexValue(event.endCoordinates.height)
            if (Platform.OS == "android") setBottomNavPosition(-100)
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", (event) => {
            if (Platform.OS == "android") setBottomNavPosition(0)
            setBottomFlexValue(60);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const renderIcon1 = (props) => (
        <TouchableOpacity onPress={() => { alert("hello") }}>
            <FontAwesomeIcon
                icon={faPlus}
                color={theme['color-primary-500']}
                style={{ marginLeft: 5 }}
            />
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, }} >
            <StatusBarScreen />
            <TopNav title="Talent Book Casting" backbutton={1} navigation={navigation} />
            <ScrollView style={{ flex: 11, marginBottom: 110 }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                    <Image source={require("../assets/images/newlogo.png")} style={{ width: 72, height: 72, borderColor: theme['color-primary-300'], borderWidth: 1, borderRadius: 50 }} />
                    <Text style={{ fontSize: 16, marginTop: 10 }}>Talent Book Casting</Text>
                    <Text style={{ fontSize: 32, fontWeight: "bold", marginTop: 10 }}>HAND MODEL</Text>
                    <View style={{ height: 1, width: "100%", borderBottomColor: "black", borderBottomWidth: 1, marginTop: 10 }}></View>
                </View>

                {/* talent message */}
                <View style={{ flex: 0, width: "100%", justifyContent: "center", alignItems: "flex-start", marginTop: 0, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{
                        flex: 9
                        , justifyContent: "flex-end", alignItems: "flex-end", padding: 10
                    }}>
                        <View style={{ maxWidth: "100%", justifyContent: "center", alignItems: "flex-start", padding: 15, backgroundColor: theme['color-primary-500'] }}>
                            <Text style={{ textAlign: "left" }}>Hye, I want to ask on the Hand Model Job that you had posted. May I know the exact time of it?</Text>
                        </View>
                    </View>
                </View>

                {/* agency message */}
                <View style={{ flex: 0, width: "100%", justifyContent: "center", alignItems: "flex-start", marginTop: 0, flexDirection: "row" }}>

                    <View style={{ flex: 9, justifyContent: "flex-start", alignItems: "flex-start", padding: 10, flexDirection: "row" }}>
                        <View>
                            <Image source={require("../assets/images/newlogo.png")} style={{ width: 50, height: 50, borderRadius: 50, borderColor: theme['color-primary-300'], borderWidth: 1 }} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: "center", alignItems: "flex-start", padding: 15, backgroundColor: theme['color-primary-300'] }}>
                            <Text style={{ textAlign: "left" }}>Hye, it will  be on 6pm to 9pm.</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                </View>

                {/* talent message */}
                <View style={{ flex: 0, width: "100%", justifyContent: "center", alignItems: "flex-start", marginTop: 0, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ flex: 9, justifyContent: "flex-end", alignItems: "flex-end", padding: 10 }}>
                        <View style={{ maxWidth: "100%", justifyContent: "center", alignItems: "flex-start", padding: 15, backgroundColor: theme['color-primary-500'] }}>
                            <Text style={{ textAlign: "left" }}>Oh I see. Thank you for the information!</Text>
                        </View>
                    </View>
                </View>

                {/* agency message */}
                <View style={{ flex: 0, width: "100%", justifyContent: "center", alignItems: "flex-start", marginTop: 0, flexDirection: "row" }}>

                    <View style={{ flex: 9, justifyContent: "flex-start", alignItems: "flex-start", padding: 10, flexDirection: "row" }}>
                        <View>
                            <Image source={require("../assets/images/newlogo.png")} style={{ width: 50, height: 50, borderRadius: 50, borderColor: theme['color-primary-300'], borderWidth: 1 }} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: "center", alignItems: "flex-start", padding: 15, backgroundColor: theme['color-primary-300'] }}>
                            <Text style={{ textAlign: "left" }}>Sure.</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                </View>

                {/* agency message */}
                <View style={{ flex: 0, width: "100%", justifyContent: "center", alignItems: "flex-start", marginTop: 0, flexDirection: "row" }}>

                    <View style={{ flex: 9, justifyContent: "flex-start", alignItems: "flex-start", padding: 10, flexDirection: "row" }}>
                        <View>
                            <Image source={require("../assets/images/newlogo.png")} style={{ width: 50, height: 50, borderRadius: 50, borderColor: theme['color-primary-300'], borderWidth: 1 }} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: "center", alignItems: "flex-start", padding: 15, backgroundColor: theme['color-primary-300'] }}>
                            <Text style={{ textAlign: "left" }}>You are welcome!</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                </View>
                {/* agency message */}
                <View style={{ flex: 0, width: "100%", justifyContent: "center", alignItems: "flex-start", marginTop: 0, flexDirection: "row" }}>

                    <View style={{ flex: 9, justifyContent: "flex-start", alignItems: "flex-start", padding: 10, flexDirection: "row" }}>
                        <View>
                            <Image source={require("../assets/images/newlogo.png")} style={{ width: 50, height: 50, borderRadius: 50, borderColor: theme['color-primary-300'], borderWidth: 1 }} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: "center", alignItems: "flex-start", padding: 15, backgroundColor: theme['color-primary-300'] }}>
                            <Text style={{ textAlign: "left" }}>You are welcome!</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                </View>
                {/* agency message */}
                <View style={{ flex: 0, width: "100%", justifyContent: "center", alignItems: "flex-start", marginTop: 0, flexDirection: "row" }}>

                    <View style={{ flex: 9, justifyContent: "flex-start", alignItems: "flex-start", padding: 10, flexDirection: "row" }}>
                        <View>
                            <Image source={require("../assets/images/newlogo.png")} style={{ width: 50, height: 50, borderRadius: 50, borderColor: theme['color-primary-300'], borderWidth: 1 }} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: "center", alignItems: "flex-start", padding: 15, backgroundColor: theme['color-primary-300'] }}>
                            <Text style={{ textAlign: "left" }}>You are welcome!</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                </View>
            </ScrollView>
            <View style={{ flex: 1, flexDirection: "row", position: "absolute", bottom: bottomFlexValue }}>
                <Input
                    value={""}
                    placeholder='Type Something...'
                    // accessoryRight={renderIcon1}
                    secureTextEntry={false}
                    style={[styles.input, { flex: 9 }]}
                />
                <TouchableOpacity
                    onPress={() => { alert("message sent") }}
                    style={{ backgroundColor: theme['color-primary-500'], width: 40, height: 40, borderRadius: 50, justifyContent: "center", alignItems: "center", marginTop: 5, marginRight: 5 }}
                >
                    <FontAwesomeIcon
                        icon={faShare}
                        size={20}
                        color={"white"}
                        style={{}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatMessageScreen

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
    input: {
        margin: 5,
        marginLeft: 10
    },
});