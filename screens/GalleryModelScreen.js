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
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

library.add(fab, faCirclePlus, faTrashCan, faLocationDot)

const GalleryModelScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white", width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Gallery" backbutton={1} backto="profile" navigation={navigation} />
            <ScrollView style={{ flex: 1, flexDirection: "column", backgroundColor: theme['color-primary-100'], marginTop: 0, width: "100%", marginBottom: 60 }}>

                {/* every row of images */}
                <View style={{ flexDirection: "row", backgroundColor: "transparent", height: 200 }}>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/1.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/2.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/3.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                {/* every row of images */}
                <View style={{ flexDirection: "row", backgroundColor: "transparent", height: 200 }}>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/4.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/5.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/6.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                {/* every row of images */}
                <View style={{ flexDirection: "row", backgroundColor: "transparent", height: 200 }}>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/7.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/8.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/9.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                {/* every row of images */}
                <View style={{ flexDirection: "row", backgroundColor: "transparent", height: 200 }}>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/10.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/11.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/12.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                {/* every row of images */}
                <View style={{ flexDirection: "row", backgroundColor: "transparent", height: 200 }}>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/13.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/14.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/15.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                {/* every row of images */}
                <View style={{ flexDirection: "row", backgroundColor: "transparent", height: 200 }}>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/16.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground source={require("../assets/images/model/17.jpg")} resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // source={require("../assets/images/model/17.jpg")}
                        style={{ flex: 1, marginHorizontal: 2.5, marginVertical: 5 }}>
                        <ImageBackground resizeMode="cover">
                            <View style={{ height: "100%" }}>
                                {/* <View style={{ position: "absolute", bottom: 0, backgroundColor: "rgba(217,217,217, 0.6)", width: "100%", padding: 2 }}>
                                    <Text style={{ fontSize: 13, color: "#545151" }}>Justin</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <FontAwesomeIcon icon={faLocationDot} size={8} solor={"#545151"} style={{ marginTop: 1, marginRight: 1 }} />
                                        <Text style={{ fontSize: 8, color: "#545151" }}>Selangor</Text>
                                    </View>
                                </View> */}
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default GalleryModelScreen

const styles = StyleSheet.create({})