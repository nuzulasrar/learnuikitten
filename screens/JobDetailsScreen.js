import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback, TextInput, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, BottomNavigation, BottomNavigationTab, Layout, Text, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faBookmark, faMagnifyingGlass, faSliders, faMessage, faCalendar, faDollarSign, faUsers, faStopwatch, faArrowUpRightFromSquare)

const JobDetailsScreen = ({ navigation }) => {

    const [applicationStatus, setApplicationStatus] = useState(undefined);
    // const [applicationStatus, setApplicationStatus] = useState(3);

    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, marginBottom: 0 }} >
            <StatusBarScreen />
            <TopNav title="Job Details" backbutton={1} navigation={navigation} />
            <ScrollView>
                <View style={{ width: "100%", height: 170, backgroundColor: theme['color-primary-500'], justifyContent: "center", alignItems: "center" }}>
                    {/* <Image source={require("../assets/images/banner.jpg")} resizeMode="cover" style={{ width: "100%", height: 200 }} /> */}
                    <Image source={require("../assets/images/newlogo.png")} resizeMode="contain" style={{ width: 150, height: 200 }} />
                </View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 75, height: 75, borderRadius: 50, borderColor: theme['color-primary-500'], borderWidth: 1, backgroundColor: "white", marginTop: -35 }}>
                        <Image source={require("../assets/images/newlogo.png")} style={{ width: "100%", height: "100%" }} />
                    </View>
                </View>
                <View style={{ marginTop: 15, width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Text style={{ fontSize: 16 }}>Talent Book Casting</Text>
                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: 5, backgroundColor: "white", padding: 5, borderColor: "#CDCDCD", borderWidth: 1, borderRadius: 5 }}>
                        <FontAwesomeIcon icon={faMessage} size={10} style={{ marginTop: 2 }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>Chat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                    <Text style={{ fontSize: 32, fontWeight: "bold" }}>HAND MODEL</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>

                    <View style={{ backgroundColor: "white", width: "95%", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: "700", marginBottom: 16 }}>Details</Text>

                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <FontAwesomeIcon icon={faCalendar} size={18} color={"#ABABAB"} style={{ marginTop: 8 }} />
                            <View style={{ flexDirection: "column", marginLeft: 5 }}>
                                <Text style={{ color: "#ABABAB", fontSize: 13, fontWeight: "700" }}>Event</Text>
                                <Text style={{ fontSize: 14 }}>01 November 2022 (1 day)</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={18} color={"#ABABAB"} style={{ marginTop: 8 }} />
                            <View style={{ flexDirection: "column", marginLeft: 5 }}>
                                <Text style={{ color: "#ABABAB", fontSize: 13, fontWeight: "700" }}>Location</Text>
                                <Text style={{ fontSize: 14 }}>Petaling Jaya</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <FontAwesomeIcon icon={faDollarSign} size={18} color={"#ABABAB"} style={{ marginTop: 8 }} />
                            <View style={{ flexDirection: "column", marginLeft: 5 }}>
                                <Text style={{ color: "#ABABAB", fontSize: 13, fontWeight: "700" }}>Payment</Text>
                                <Text style={{ fontSize: 14 }}>RM 100/hour</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <FontAwesomeIcon icon={faUsers} size={18} color={"#ABABAB"} style={{ marginTop: 8 }} />
                            <View style={{ flexDirection: "column", marginLeft: 5 }}>
                                <Text style={{ color: "#ABABAB", fontSize: 13, fontWeight: "700" }}>Total Applicant</Text>
                                <Text style={{ fontSize: 14 }}>5</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <FontAwesomeIcon icon={faStopwatch} size={18} color={"#ABABAB"} style={{ marginTop: 8 }} />
                            <View style={{ flexDirection: "column", marginLeft: 5 }}>
                                <Text style={{ color: "#ABABAB", fontSize: 13, fontWeight: "700" }}>Status</Text>
                                <Text style={{ fontSize: 14 }}>{applicationStatus == undefined ? "Open" : applicationStatus == 1 ? "Accepted" : applicationStatus == 3 ? "Completed" : null}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, backgroundColor: "white", width: "95%", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: "700", marginBottom: 16 }}>Descriptions</Text>

                        <Text style={{ fontSize: 15 }}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat.  "
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                            {"\n"}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat.  "
                        </Text>
                    </View>
                    {applicationStatus == 3 ?
                        <>
                            <View style={{ marginTop: 10, width: "95%" }}>
                                <Text style={{ fontSize: 18, fontWeight: "700" }}>Leave a Review</Text>
                            </View>
                            <View style={{ justifyContent: "center", width: "95%", }}>
                                <View style={{ marginTop: 10, backgroundColor: "white", width: "100%", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ flexDirection: "row", width: "50%", justifyContent: "space-evenly", marginTop: 10 }}>
                                        <FontAwesomeIcon icon={faStar} size={25} color={"#CDCDCD"} />
                                        <FontAwesomeIcon icon={faStar} size={25} color={"#CDCDCD"} />
                                        <FontAwesomeIcon icon={faStar} size={25} color={"#CDCDCD"} />
                                        <FontAwesomeIcon icon={faStar} size={25} color={"#CDCDCD"} />
                                        <FontAwesomeIcon icon={faStar} size={25} color={"#CDCDCD"} />
                                    </View>
                                    <View style={{ justifyContent: "center", width: "95%", justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                                        <Input
                                            multiline={true}
                                            textStyle={{ minHeight: 64 }}
                                            placeholder='Your review...'
                                            style={{ width: "100%" }}
                                        />
                                    </View>
                                    <TouchableOpacity style={{ marginVertical: 16, backgroundColor: theme['color-primary-500'], paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>RATE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginTop: 10, width: "95%" }}>
                                <Text style={{ fontSize: 18, fontWeight: "700" }}>Review(s)</Text>
                            </View>
                            <View style={{ justifyContent: "flex-start", width: "95%", marginTop: 0 }}>
                                <View style={{ marginTop: 10, backgroundColor: "white", width: "100%", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row" }}>

                                    <View style={{ backgroundColor: "transparent", }}>
                                        <ImageBackground source={require("../assets/images/newlogo.png")} resizeMode="contain" style={{ width: 100 }}>
                                            <View style={{ height: 75 }}>

                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, fontWeight: "700", color: "#172B85", marginBottom: 2 }}>John Appleseed</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <Text style={{ marginLeft: 5 }} >(5.0)</Text>
                                        </View>
                                        <Text style={{ fontSize: 15 }}>I had a great time!</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: "flex-start", width: "95%", marginTop: 0 }}>
                                <View style={{ marginTop: 10, backgroundColor: "white", width: "100%", borderRadius: 5, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row" }}>

                                    <View style={{ backgroundColor: "transparent", }}>
                                        <ImageBackground source={require("../assets/images/newlogo.png")} resizeMode="contain" style={{ width: 100 }}>
                                            <View style={{ height: 75 }}>

                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, fontWeight: "700", color: "#172B85", marginBottom: 2 }}>John Appleseed</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <FontAwesomeIcon icon={faStar} color={theme['color-warning-500']} style={{ marginLeft: 5 }} />
                                            <Text style={{ marginLeft: 5 }} >(5.0)</Text>
                                        </View>
                                        <Text style={{ fontSize: 15 }}>I had a great time!</Text>
                                    </View>
                                </View>
                            </View>

                        </>
                        : null}
                </View>

                {applicationStatus == undefined ?
                    <View style={{ height: 50 }}>

                    </View>
                    : null}

                <View style={{ height: 75 }}>
                </View>
            </ScrollView >
            {applicationStatus == undefined ?
                <TouchableOpacity
                    onPress={() => setApplicationStatus(3)}
                    style={{ position: "absolute", bottom: 75, alignSelf: "center", flexDirection: "row", backgroundColor: theme['color-primary-500'], paddingHorizontal: 15, paddingVertical: 5, borderRadius: 5 }}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color={"white"} style={{ marginRight: 5, marginTop: 3 }} />
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>APPLY NOW</Text>
                </TouchableOpacity>
                : null}
        </View >
    )
}

export default JobDetailsScreen

const styles = StyleSheet.create({})