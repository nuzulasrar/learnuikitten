import React, { useState, useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  Touchable,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Icon,
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Input,
  Button,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { default as theme } from "../custom-theme.json";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faFileMedical } from "@fortawesome/free-solid-svg-icons/faFileMedical";
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import { CommonContext } from "../context/CommonContext";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const JobApplicants = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme["color-primary-100"],
        width: "100%",
        marginTop: -50,
        marginBottom: 0,
      }}
    >
      <StatusBarScreen />
      <TopNav
        title="Job"
        backbutton={1}
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{width: "100%", alignItems: "center"}}>
        <TouchableOpacity style={{backgroundColor: "white", width: "95%", marginTop: 10, padding: 10, borderRadius: 5}}>
            <Text style={{color: theme["color-primary-200"], fontSize: 24, fontWeight: "bold", marginBottom: 5}}>
                Emcee/TV Host
            </Text>
            <View style={{marginBottom: 5}}>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 5}}>
                    <FontAwesomeIcon icon={faLocationDot} color={theme["color-primary-200"]} 
                    style={{marginRight: 5}}
                    />
                    <Text style={{color: theme["color-primary-200"], fontSize: 16}}>Petaling Jaya</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 5}}>
                    <FontAwesomeIcon icon={faDollarSign} color={theme["color-primary-200"]} 
                    style={{marginRight: 5}}
                    />
                    <Text style={{color: theme["color-primary-200"], fontSize: 16}}>RM 100 / hour</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 5}}>
                    <FontAwesomeIcon icon={faBriefcase} color={theme["color-primary-200"]} 
                    style={{marginRight: 5}}
                    />
                    <Text style={{color: theme["color-primary-200"], fontSize: 16}}>01 May 2022 (1 day)</Text>
                </View>
            </View>
            <View style={{marginBottom: 5}}>
                <Text style={{color: theme["color-primary-200"], fontSize: 14, fontWeight: "bold"}}>
                    Status:
                </Text>
                <Text style={{color: theme["color-primary-200"], fontSize: 14, fontWeight: "normal"}}>On-going</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end"}}>
                <Text style={{fontSize: 12}}>Posted date: 11 April 2022</Text>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>TOTAL APPLICANT: 50</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "white", width: "95%", marginTop: 10, paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5,
        marginBottom: 20
        }}>
            <Text style={{fontWeight: "bold", fontSize: 20, marginBottom: 10}}>Job Description</Text>
            <Text style={{fontSize: 15, textAlign: "justify"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sem ac nisl semper hendrerit ultrices ac odio. Mauris in placerat nulla. Praesent non lorem aliquet, dapibus erat elementum, congue odio. Duis ut augue et purus gravida pellentesque non volutpat orci. Mauris et sodales erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat tellus dui, id tempus mi ullamcorper convallis. Suspendisse et ullamcorper erat, mollis interdum libero. Quisque eget arcu eu urna luctus ultrices eget quis nisi.
                {/* {"\n"}
                {"\n"} */}
            {/* Duis non tempor magna. Etiam pulvinar velit et lectus ultrices maximus. Donec finibus lacus blandit risus porttitor scelerisque. Nam mattis metus enim, ut bibendum mi cursus eget. Vivamus vel porta metus. Quisque eget interdum est. Proin id vestibulum ipsum. Duis condimentum massa vel orci elementum molestie ac vel quam. Sed nisi odio, laoreet a gravida et, lobortis quis ipsum. Cras a dictum mauris. Suspendisse mauris erat, mattis iaculis euismod et, vulputate nec ligula. Duis facilisis sapien quis ipsum porttitor tempus. Proin et dictum urna. Nullam interdum nunc purus, sit amet tempor sem egestas ac. */}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
            backgroundColor: theme["color-primary-500"],
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            paddingHorizontal: 15,
            paddingVertical: 10
        }}
        >
            <Text style={{color: "white", fontSize: 20}}>View Applicants</Text>
        </TouchableOpacity>
        <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  )
}

export default JobApplicants

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
      fontWeight: "600",
      marginBottom: 13,
    },
    card: {
      backgroundColor: "white",
      borderRadius: 8,
      paddingVertical: 45,
      paddingHorizontal: 25,
      width: "100%",
      marginVertical: 10,
    },
    shadowProp: {
      shadowOffset: { width: -2, height: 4 },
      shadowColor: "#171717",
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    input: {
      height: 44,
    },
  });