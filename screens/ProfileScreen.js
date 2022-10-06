import React, { useState, useContext, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
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
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import { CommonContext } from "../context/CommonContext";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_PROFILE } from "../redux/actions";

library.add(fab, faPlus, faTrashCan, faStar);

const bookmarkIcon = () => (
  <Icon
    style={styles.icon1}
    fill={theme["color-warning-500"]}
    name="bookmark"
  />
);

const starIcon = () => (
  <Icon
    style={styles.icon2}
    fill="#999"
    name="star"
  />
);

const starIcon2 = () => (
  <Icon
    style={styles.icon2}
    fill="#fff"
    name="star"
  />
);

const pinIcon = () => (
  <Icon
    style={styles.icon3}
    fill="black"
    name="pin"
  />
);

const moneyIcon = () => (
  <Icon
    style={styles.icon3}
    fill="black"
    name="shopping-cart"
  />
);

const calendarIcon = () => (
  <Icon
    style={styles.icon3}
    fill="black"
    name="calendar"
  />
);

const ProfileScreen = ({ navigation }) => {
  const { getData, getgenderlist2, getracelist2, getstatelist2 } =
    useContext(CommonContext);

  const [thisUser, setThisUser] = useState({});
  const [stringGender, setStringGender] = useState("");
  const [stringRace, setStringRace] = useState("");
  const [stringState, setStringState] = useState("");

  const checkUser = async () => {
    let userdata = await getData("user");
    setThisUser(userdata);

    let genderlist = await getgenderlist2();
    setStringGender(genderlist.gender[userdata.gender].label);

    let racelist = await getracelist2();
    setStringRace(racelist.race[userdata.race].label);

    let statelist = await getstatelist2();
    setStringState(statelist.state[userdata.state].label);
  };

  useEffect(() => {
    checkUser();
  }, []);

  function Capitalize(str) {
    return (
      String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase()
    );
  }
  function Clearstring(str) {
    let newstr = String(str);
    if (newstr.charAt(0) == '"') newstr = newstr.slice(1);
    if (newstr.charAt(newstr.length - 1) == '"')
      newstr = newstr.slice(0, newstr.length - 1);
    return newstr;
  }

  return (
    <View
      style={{
        flex: 0,
        backgroundColor: "#E8F2F6",
        width: "100%",
        marginTop: -50,
        marginBottom: 0,
      }}
    >
      <StatusBarScreen />
      <TopNav
        title="Profile"
        backbutton={0}
        rightaccessory={2}
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={{
          marginTop: -20,
          backgroundColor: "#E8F2F6",
          marginBottom: 0,
        }}
      >
        <View
          style={{
            flex: 0,
            flexDirection: "column",
            backgroundColor: "white",
            marginTop: 125,
            width: "100%",
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 0,
              flexDirection: "column",
              width: "100%",
              marginVertical: 1,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  borderRadius: 100,
                  width: 150,
                  height: 150,
                  borderColor: "white",
                  borderWidth: 6,
                  marginTop: -80,
                }}
                source={{
                  uri:
                    "http://rubysb.com/talentbook/upload/" +
                    thisUser.id +
                    "/" +
                    thisUser.profilepic,
                }}
              />

              <Button
                size="tiny"
                appearance="filled"
                status="control"
                style={{
                  width: 70,
                  paddingHorizontal: 0,
                  display: "flex",
                  flex: 1,
                  alignSelf: "center",
                  marginTop: -10,
                  marginBottom: 20,
                  borderColor: "black",
                  borderEndWidth: 1,
                }}
              >
                CHANGE
              </Button>
              <Text
                style={{
                  color: theme["color-primary-200"],
                  fontSize: 24,
                  fontWeight: "700",
                }}
              >
                {/* {JSON.stringify(thisUser)} */}
                {Capitalize(thisUser.fname)} {Capitalize(thisUser.lname)}
              </Text>
              <View style={{ flexDirection: "row", marginVertical: 8 }}>
                <FontAwesomeIcon
                  icon={faStar}
                  size={16}
                  color={"#DADADA"}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={16}
                  color={"#DADADA"}
                  style={{ marginLeft: 5 }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={16}
                  color={"#DADADA"}
                  style={{ marginLeft: 5 }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={16}
                  color={"#DADADA"}
                  style={{ marginLeft: 5 }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size={16}
                  color={"#DADADA"}
                  style={{ marginLeft: 5 }}
                />
                <Text style={{ marginTop: 0, marginLeft: 5 }}>(0.0)</Text>
              </View>
              <Text style={{ marginTop: -15 }}>
                {"\n"}Singing, Hand-Modelling, Piano
              </Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Photos")}
                  style={{
                    width: "23%",
                    flexDirection: "column",
                    backgroundColor: theme["color-primary-100"],
                    padding: 10,
                    borderRadius: 5,
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{thisUser.membership_status ? "12" : "1"}</Text>
                  <Text
                    style={{ fontSize: 12, color: theme["color-primary-200"] }}
                  >
                    Photos
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Videos")}
                  style={{
                    width: "23%",
                    flexDirection: "column",
                    backgroundColor: theme["color-primary-100"],
                    padding: 10,
                    borderRadius: 5,
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{thisUser.membership_status ? "6" : "0"}</Text>
                  <Text
                    style={{ fontSize: 12, color: theme["color-primary-200"] }}
                  >
                    Videos
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Audios")}
                  style={{
                    width: "23%",
                    flexDirection: "column",
                    backgroundColor: theme["color-primary-100"],
                    padding: 10,
                    borderRadius: 5,
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{thisUser.membership_status ? "6" : "0"}</Text>
                  <Text
                    style={{ fontSize: 12, color: theme["color-primary-200"] }}
                  >
                    Audios
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comp Card")}
                  style={{
                    width: "23%",
                    flexDirection: "column",
                    backgroundColor: theme["color-primary-100"],
                    padding: 10,
                    borderRadius: 5,
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{thisUser.membership_status ? "3" : "1"}</Text>
                  <Text
                    style={{ fontSize: 12, color: theme["color-primary-200"] }}
                  >
                    Comp Card
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  marginVertical: 5,
                  fontWeight: "700",
                  marginVertical: 16,
                }}
              >
                Membership plan: Expired on {thisUser?.subscription_end}
              </Text>
              <Button
                status="danger"
                accessoryLeft={starIcon2}
                style={{
                  backgroundColor: theme["color-danger-100"],
                  borderColor: theme["color-danger-100"],
                }}
                onPress={() => navigation.navigate("Membership")}
              >
                UPGRADE
              </Button>
            </View>
            <View
              style={{
                flexDirection: "column",
                borderColor: theme["color-primary-500"],
                borderWidth: 3,
                borderRadius: 5,
                padding: 10,
                marginTop: 30,
              }}
            >
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Gender</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {Clearstring(JSON.stringify(stringGender))}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Age</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {thisUser?.age}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Race</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {Clearstring(JSON.stringify(stringRace))}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Nationality</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  Malaysian
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>State</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {Clearstring(JSON.stringify(stringState))}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Height (cm)</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {thisUser?.height}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Weight (kg)</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {thisUser?.weight}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Shoulder (cm)</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {thisUser?.shoulder}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Pant Length (cm)</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {thisUser?.pant_length}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Clothing Size</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {thisUser?.clothing_size}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Shoe Size (Euro)</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  {thisUser?.shoe_size}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text style={{ width: "40%" }}>Skill</Text>
                <Text style={{ width: "60%", fontWeight: "700" }}>
                  Singing, Hand Modelling, Piano
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
                style={{
                  backgroundColor: theme["color-primary-500"],
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  width: 152,
                  height: 33,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  EDIT PROFILE
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  color: theme["color-primary-200"],
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                Social Media
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 5,
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  color={theme["color-primary-200"]}
                />
                <Text style={{ marginLeft: 5 }}> {thisUser?.twitter} </Text>
                {/* <FontAwesomeIcon
                  icon={faTrashCan}
                  color={theme["color-primary-500"]}
                  style={{ marginLeft: 5 }}
                /> */}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 5,
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  color={theme["color-primary-200"]}
                />
                <Text style={{ marginLeft: 5 }}> {thisUser?.instagram} </Text>
                {/* <FontAwesomeIcon
                  icon={faTrashCan}
                  color={theme["color-primary-500"]}
                  style={{ marginLeft: 5 }}
                /> */}
              </View>
            </View>
            <View
              style={{ flexDirection: "row", padding: 10, marginBottom: 200 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 5,
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  color={theme["color-primary-200"]}
                />
                <Text style={{ marginLeft: 5 }}> {thisUser?.facebook} </Text>
                {/* <FontAwesomeIcon
                  icon={faTrashCan}
                  color={theme["color-primary-500"]}
                  style={{ marginLeft: 5 }}
                /> */}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 5,
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "youtube"]}
                  color={theme["color-primary-200"]}
                />
                <Text style={{ marginLeft: 5 }}> {thisUser?.youtube} </Text>
                {/* <FontAwesomeIcon
                  icon={faTrashCan}
                  color={theme["color-primary-500"]}
                  style={{ marginLeft: 5 }}
                /> */}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

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
});
