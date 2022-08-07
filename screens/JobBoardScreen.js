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
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faBookmark, faMagnifyingGlass, faSliders)

const searchIcon = () => (
    <TouchableOpacity>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
    </TouchableOpacity>
);

const JobBoardScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, marginBottom: 0 }} >
            <StatusBarScreen />
            <TopNav title="Job" backbutton={0} rightaccessory={2} navigation={navigation} />
            <View style={{ marginHorizontal: 15 }}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <TouchableOpacity style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderRightWidth: 1, borderColor: theme['color-primary-100'], backgroundColor: "white", width: 38, height: 38, justifyContent: "center", alignItems: "center", marginTop: 1 }}>
                        <FontAwesomeIcon icon={faSliders} size={20} />
                    </TouchableOpacity>
                    <Input
                        accessoryRight={searchIcon}
                        style={{ flex: 8, backgroundColor: "white", borderTopRightRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderColor: theme['color-primary-100'] }}
                    />
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginRight: 10 }}>Urgent Hiring!</Text>
                    <TouchableOpacity style={{ marginTop: 4, backgroundColor: theme['color-danger-200'], borderRadius: 10, justifyContent: "center", alignItems: "center", height: 20, paddingHorizontal: 10 }}>
                        <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>URGENT</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                    <View style={{ backgroundColor: "transparent", borderRadius: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "white", width: 230, margin: 10, marginTop: 0, padding: 10, borderRadius: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 9, fontSize: 18, fontWeight: "bold" }}>EMCEE / TV HOST</Text>
                                <FontAwesomeIcon icon={faBookmark} color={"#DADADA"} />
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Talent Book Casting</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "transparent", borderRadius: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "white", width: 230, marginRight: 5, marginTop: 0, padding: 10, borderRadius: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 9, fontSize: 18, fontWeight: "bold" }}>EMCEE / TV HOST</Text>
                                <FontAwesomeIcon icon={faBookmark} color={"#DADADA"} />
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Talent Book Casting</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "transparent", borderRadius: 5 }}>
                        <TouchableOpacity style={{ backgroundColor: "white", width: 230, margin: 10, marginTop: 0, padding: 10, borderRadius: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 9, fontSize: 18, fontWeight: "bold" }}>EMCEE / TV HOST</Text>
                                <FontAwesomeIcon icon={faBookmark} color={"#DADADA"} />
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Talent Book Casting</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <Text style={{ fontSize: 20, fontWeight: "bold", marginRight: 10, marginTop: 10 }}>Posted Job</Text>

                <ScrollView horizontal={false} style={{ backgroundColor: "transparent" }} showsVerticalScrollIndicator={false}>
                    <View style={{ backgroundColor: "white", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Image style={{ width: 75, height: 75 }} source={require("../assets/images/newlogo.png")} />
                            </View>
                            <View style={{ flex: 3, flexDirection: "column" }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}>HAND MODEL</Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}>Talent Book Casting</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 0, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <Text>(5.0)</Text>
                                </View>
                            </View>

                        </View>
                        <TouchableOpacity style={{ position: "absolute", top: 0, right: 0, justifyContent: "center", alignItems: "center", height: 30, width: 30 }}>
                            <FontAwesomeIcon icon={faBookmark} color={theme['color-warning-500']} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Image style={{ width: 75, height: 75 }} source={require("../assets/images/newlogo.png")} />
                            </View>
                            <View style={{ flex: 3, flexDirection: "column" }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}>HAND MODEL</Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}>Talent Book Casting</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 0, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <Text>(5.0)</Text>
                                </View>
                            </View>

                        </View>
                        <TouchableOpacity style={{ position: "absolute", top: 0, right: 0, justifyContent: "center", alignItems: "center", height: 30, width: 30 }}>
                            <FontAwesomeIcon icon={faBookmark} color={theme['color-warning-500']} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Image style={{ width: 75, height: 75 }} source={require("../assets/images/newlogo.png")} />
                            </View>
                            <View style={{ flex: 3, flexDirection: "column" }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}>HAND MODEL</Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}>Talent Book Casting</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 0, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: 5, color: theme['color-warning-500'] }} />
                                    <Text>(5.0)</Text>
                                </View>
                            </View>

                        </View>
                        <TouchableOpacity style={{ position: "absolute", top: 0, right: 0, justifyContent: "center", alignItems: "center", height: 30, width: 30 }}>
                            <FontAwesomeIcon icon={faBookmark} color={theme['color-warning-500']} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <FontAwesomeIcon icon={faLocationDot} size={12} style={{ marginTop: 2, marginRight: 5 }} />
                            <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                        </View>
                    </View>
                    <View style={{ height: 435 }}>

                    </View>
                </ScrollView>
            </View>
        </View >
    )
}

export default JobBoardScreen

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
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    input: {
        height: 44
    }
});
