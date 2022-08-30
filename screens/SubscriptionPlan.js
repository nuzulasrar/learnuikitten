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
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

const SubscriptionPlan = ({ navigation }) => {

    const [plantype, setPlantype] = useState(0)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Plan" backbutton={1} rightaccessory={0} navigation={navigation} />
            <ScrollView contentContainerStyle={{ flex: 0, flexDirection: "column", marginTop: 5, width: "100%", backgroundColor: theme['color-primary-100'], justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20, marginTop: 20 }}>
                    <View style={{ marginRight: 20 }}>
                        <Image source={require("../assets/images/profile/1.jpg")} style={{ width: 77, height: 71, borderRadius: 100 }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 14 }}>Angelina Jolie</Text>
                        <Text style={{ fontSize: 14 }}>angelina@gmail.com</Text>
                    </View>
                </View>
                <View style={{ fontSize: 18, flex: 0, width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, }}>Become a Member today!</Text>
                    <Text style={{ fontSize: 20, color: "black" }}>Choose your plan</Text>
                </View>
                <View style={{ flex: 1, padding: 20, marginVertical: 10, borderRadius: 5, backgroundColor: '#208BC7', width: "95%", marginBottom: 0, borderColor: theme['color-primary-500'], borderWidth: 1 }}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#e7f9fc', 'transparent']}
                        style={styles.background}>
                    </LinearGradient>

                    <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20, textAlign: "center" }}>Basic</Text>

                    <View style={{ paddingHorizontal: 40 }}>
                        <View style={{ flexDirection: "row", marginBottom: 10, justifyContent: "flex-start", alignItems: Platform.OS == "ios" ? "center" : "center" }}>
                            <View style={{ backgroundColor: theme['color-primary-500'], height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
                                <FontAwesomeIcon icon={faCheck} color={"white"} size={14} />
                            </View>
                            <Text style={{ marginLeft: 10, textAlign: "left", fontSize: 18 }}>Upload only 1 photo</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10, alignItems: Platform.OS == "ios" ? "center" : "center" }}>
                            <View style={{ backgroundColor: theme['color-primary-500'], height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
                                <FontAwesomeIcon icon={faCheck} color={"white"} size={14} />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>Limited Features</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ color: "white", marginTop: 2, textAlign: "center", fontSize: 32, fontWeight: "600" }}>FREE</Text>
                    </View>

                    <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => setPlantype(1)}
                            style={{ marginTop: 10, backgroundColor: plantype == 1 ? theme['color-primary-700'] : "white", width: 128, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                            <Text style={{ color: plantype == 1 ? "white" : theme['color-primary-500'], fontSize: 18, fontWeight: "bold" }}>SELECT</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flex: 1, padding: 20, marginVertical: 10, borderRadius: 5, backgroundColor: '#208BC7', width: "95%", marginBottom: 0, borderColor: theme['color-primary-500'], borderWidth: 1 }}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#e7f9fc', 'transparent']} ate
                        style={styles.background}>
                    </LinearGradient>

                    <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20, textAlign: "center" }}>Premium</Text>

                    <View style={{ paddingHorizontal: 40 }}>
                        <View style={{ flexDirection: "row", marginBottom: 10, justifyContent: "flex-start", alignItems: Platform.OS == "ios" ? "center" : "center" }}>
                            <View style={{ backgroundColor: theme['color-primary-500'], height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
                                <FontAwesomeIcon icon={faCheck} color={"white"} size={14} />
                            </View>
                            <Text style={{ marginLeft: 10, textAlign: "left", fontSize: 18 }}>Upload up to 15 photos</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10, alignItems: Platform.OS == "ios" ? "center" : "center" }}>
                            <View style={{ backgroundColor: theme['color-primary-500'], height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
                                <FontAwesomeIcon icon={faCheck} color={"white"} size={14} />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>Upload up to 6 videoes & audios</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10, alignItems: Platform.OS == "ios" ? "center" : "center" }}>
                            <View style={{ backgroundColor: theme['color-primary-500'], height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
                                <FontAwesomeIcon icon={faCheck} color={"white"} size={14} />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>Custom Comp Card</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 10, alignItems: Platform.OS == "ios" ? "center" : "center" }}>
                            <View style={{ backgroundColor: theme['color-primary-500'], height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>
                                <FontAwesomeIcon icon={faCheck} color={"white"} size={14} />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>Unlock all feature</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ color: "white", marginTop: 2, textAlign: "center" }}>RM</Text>
                        <Text style={{ color: "white", fontSize: 36, textAlign: "center" }}>XX</Text>
                        <Text style={{ color: "white", marginTop: 20, textAlign: "center" }}>/</Text>
                        <Text style={{ color: "white", marginTop: 20, textAlign: "center" }}>year</Text>
                    </View>

                    <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => setPlantype(2)}
                            style={{ marginTop: 10, backgroundColor: plantype == 2 ? theme['color-primary-700'] : "white", width: 128, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                            <Text style={{ color: plantype == 2 ? "white" : theme['color-primary-500'], fontSize: 18, fontWeight: "bold" }}>SELECT</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={{ color: "black", marginTop: 23, marginHorizontal: "2.5%", marginBottom: 15, fontSize: 14, alignSelf: "flex-start" }}>Available Payment Method</Text>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", alignSelf: "flex-start", marginLeft: "2.5%" }}>
                    {/* <View style={{ width: 35, height: 24, backgroundColor: "white" }}>

                    </View> */}
                    <Image source={require("../assets/images/visahuge.png")} style={{ width: 45, height: 33 }} />
                    <Image source={require("../assets/images/mastercardhuge.png")} style={{ width: 45, height: 33, marginLeft: 10 }} />
                    <Image source={require("../assets/images/fpxhuge.png")} style={{ width: 45, height: 33, marginLeft: 10 }} />
                    {/* <FontAwesomeIcon icon="fa-brands fa-cc-visa" size={40} color={"black"} />
                    <FontAwesomeIcon icon="fa-brands fa-cc-mastercard" size={40} color={"black"} style={{ marginLeft: 10 }} /> */}
                </View>
                <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("UploadPhotoPremium", { plantype: plantype })}
                        style={{ marginTop: 10, backgroundColor: theme['color-primary-500'], width: 128, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>NEXT</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100 }}>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default SubscriptionPlan

const styles = StyleSheet.create({

    icon1: {
        width: 32,
        height: 32,
    },
    icon2: {
        width: 16,
        height: 16,
    },
    icon3: {
        width: 12,
        height: 12,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        // shadowOffset: { width: -2, height: 4 },
        // shadowColor: '#171717',
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
        borderRadius: 5
    }

});