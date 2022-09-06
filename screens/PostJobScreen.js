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
  Datepicker
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
import JobApplicants from "./JobApplicants";

library.add(
  fab,
  faFileMedical,
  faBookmark,
  faMagnifyingGlass,
  faSliders,
  faLocationDot,
  faDollarSign
);

const calendarIcon = () =>(
  <View>
    <FontAwesomeIcon icon={faCalendar} />
  </View>
)

const PostJobScreen = ({navigation}) => {


  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());

  return (
    <ScrollView
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
        title="Post Job"
        backbutton={1}
        navigation={navigation}
        />
        <View style={{width: "95%", backgroundColor: "transparent", alignSelf: "center", 
        marginTop: 10, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 10}}>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: "700", marginBottom: 5}}>Job Title</Text>
            <TextInput
             style={styles.input} 
            />
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: "700", marginBottom: 5}}>Job Description</Text>
            <TextInput
             style={[styles.input, {height: 100}]}
             multiline={true}
            />
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: "700", marginBottom: 5}}>Location</Text>
            <TextInput
             style={styles.input}
            />
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: "700", marginBottom: 5}}>Wage (From)</Text>
            <TextInput
             style={styles.input}
            />
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: "700", marginBottom: 5}}>Wage (To)</Text>
            <TextInput
             style={styles.input}
            />
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: "700", marginBottom: 5}}>Start Time</Text>
            <Datepicker
							disabled={false}
							style={{ paddingVertical: 10 }}
							status="basic"
							size="large"
							date={startdate}
							min={new Date()}
              accessoryRight={calendarIcon}
							onSelect={nextDate => setStartDate(nextDate)}
						/>
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: "700", marginBottom: 5}}>End Time</Text>
            <Datepicker
							disabled={false}
							style={{ paddingVertical: 10 }}
							status="basic"
							size="large"
							date={enddate}
							min={new Date()}
              accessoryRight={calendarIcon}
							onSelect={nextDate => setEndDate(nextDate)}
						/>
        </View>
        </View>
        <View style={{height: 100}}>

        </View>
    </ScrollView>
  )
}

export default PostJobScreen

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: "white",
        borderRadius: 8
    }
})