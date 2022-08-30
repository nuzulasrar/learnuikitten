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

const searchIcon = () => (
  <TouchableOpacity>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </TouchableOpacity>
);

const JobBoardScreen = ({ navigation }) => {
  const { accountType, setAccountType } = useContext(CommonContext);

  const [section, setSection] = useState(1);
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
      {accountType == 1 ? (
        <View style={{ marginHorizontal: 15 }}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity
              style={{
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderRightWidth: 1,
                borderColor: theme["color-primary-100"],
                backgroundColor: "white",
                width: 38,
                height: 38,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
              }}
            >
              <FontAwesomeIcon
                icon={faSliders}
                size={20}
              />
            </TouchableOpacity>
            <Input
              accessoryRight={searchIcon}
              style={{
                flex: 8,
                backgroundColor: "white",
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderColor: theme["color-primary-100"],
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: Platform.OS == "android" ? "center" : "flex-end",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", marginRight: 10 }}>
              Urgent Hiring!
            </Text>
            {/* <Text>{accountType}</Text> */}
            <TouchableOpacity
              style={{
                marginTop: 4,
                backgroundColor: theme["color-danger-200"],
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                height: 20,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 10, fontWeight: "bold" }}
              >
                URGENT
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("JobDetails")}
              style={{
                backgroundColor: "white",
                width: 230,
                marginRight: 10,
                marginTop: 0,
                borderRadius: 5,
              }}
            >
              <View style={{ padding: 15, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, fontSize: 18, fontWeight: "bold" }}>
                    EMCEE / TV HOST
                  </Text>
                  <TouchableOpacity onPress={() => alert("")}>
                    <FontAwesomeIcon
                      icon={faBookmark}
                      color={"#DADADA"}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                </View>
                <View style={{ borderRadius: 5 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: Platform.OS == "ios" ? 10 : 20,
                      marginTop: 10,
                    }}
                  >
                    Talent Book Casting
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("JobDetails")}
              style={{
                backgroundColor: "white",
                width: 230,
                marginRight: 10,
                marginTop: 0,
                borderRadius: 5,
              }}
            >
              <View style={{ padding: 15, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, fontSize: 18, fontWeight: "bold" }}>
                    EMCEE / TV HOST
                  </Text>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    color={"#DADADA"}
                  />
                </View>

                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                </View>
                <View style={{ borderRadius: 5 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: Platform.OS == "ios" ? 10 : 20,
                      marginTop: 10,
                    }}
                  >
                    Talent Book Casting
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("JobDetails")}
              style={{
                backgroundColor: "white",
                width: 230,
                marginRight: 10,
                marginTop: 0,
                borderRadius: 5,
              }}
            >
              <View style={{ padding: 15, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, fontSize: 18, fontWeight: "bold" }}>
                    EMCEE / TV HOST
                  </Text>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    color={"#DADADA"}
                  />
                </View>

                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    size={12}
                    style={{ marginTop: 2, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
                </View>
                <View style={{ borderRadius: 5 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: Platform.OS == "ios" ? 10 : 20,
                      marginTop: 10,
                    }}
                  >
                    Talent Book Casting
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginRight: 10,
              marginTop: 20,
            }}
          >
            Posted Job
          </Text>

          <ScrollView
            horizontal={false}
            style={{ backgroundColor: "transparent" }}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("JobDetails")}
              style={{
                backgroundColor: "white",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Image
                    style={{ width: 75, height: 75 }}
                    source={require("../assets/images/newlogo.png")}
                  />
                </View>
                <View style={{ flex: 3, flexDirection: "column" }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}
                  >
                    HAND MODEL
                  </Text>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}
                  >
                    Talent Book Casting
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 0,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <Text>(5.0)</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                }}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  color={theme["color-warning-500"]}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("JobDetails")}
              style={{
                backgroundColor: "white",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Image
                    style={{ width: 75, height: 75 }}
                    source={require("../assets/images/newlogo.png")}
                  />
                </View>
                <View style={{ flex: 3, flexDirection: "column" }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}
                  >
                    HAND MODEL
                  </Text>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}
                  >
                    Talent Book Casting
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 0,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <Text>(5.0)</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                }}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  color={theme["color-warning-500"]}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("JobDetails")}
              style={{
                backgroundColor: "white",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Image
                    style={{ width: 75, height: 75 }}
                    source={require("../assets/images/newlogo.png")}
                  />
                </View>
                <View style={{ flex: 3, flexDirection: "column" }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}
                  >
                    HAND MODEL
                  </Text>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}
                  >
                    Talent Book Casting
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 0,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        marginLeft: 5,
                        color: theme["color-warning-500"],
                      }}
                    />
                    <Text>(5.0)</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                }}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  color={theme["color-warning-500"]}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>Petaling Jaya</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>RM 100/hour</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  size={12}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={{ fontSize: 12 }}>01 October 2022 (1 day)</Text>
              </View>
            </TouchableOpacity>
            <View style={{ height: 475 }}></View>
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            marginHorizontal: 15,
            alignSelf: "center",
            width: "100%",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme["color-primary-500"],
              width: 300,
              flexDirection: "row",
              borderRadius: 5,
              marginVertical: 20,
              alignSelf: "center",
            }}
            onPress={() => alert("hello")}
          >
            <FontAwesomeIcon
              icon={faFileMedical}
              size={30}
              style={{
                marginLeft: 0,
                color: "white",
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 36,
                color: "white",
                fontWeight: "bold",
                borderRadius: 5,
                paddingVertical: 10,
              }}
            >
              POST A JOB
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: theme["color-primary-500"],
              borderWidth: 1,
              width: "95%",
              alignSelf: "center",
            }}
          ></View>
          <View style={{ width: "95%", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                marginBottom: 15,
                marginTop: 20,
              }}
            >
              Posted Job
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "60%",
              marginBottom: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => setSection(1)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  section == 1 ? theme["color-primary-500"] : "transparent",
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 5,
                borderWidth: 1,
                borderColor:
                  section == 1 ? "transparent" : theme["color-primary-500"],
              }}
            >
              <Text
                style={{
                  color: section == 1 ? "white" : theme["color-primary-500"],
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                NORMAL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSection(2)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  section == 2 ? theme["color-primary-500"] : "transparent",
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 5,
                borderWidth: 1,
                borderColor:
                  section == 2 ? "transparent" : theme["color-primary-500"],
              }}
            >
              <Text
                style={{
                  color: section == 2 ? "white" : theme["color-primary-500"],
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                URGENT
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("JobApplicants");
              }}
              style={{
                backgroundColor: "white",
                width: "95%",
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 15,
                flexDirection: "row",
                marginTop: 0,
                marginBottom: 5,
                borderWidth: 1,
                borderColor: theme["color-primary-100"],
              }}
            >
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: theme["color-primary-200"],
                    fontWeight: "700",
                  }}
                >
                  Emcee / TV Host Adsadfsdfdsf
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Petaling Jaya
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    RM 100/hour
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    01 May 2022 (1 day)
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "700",
                    }}
                  >
                    Status:
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    On-going
                  </Text>
                </View>
                <View style={{ marginTop: 16 }}>
                  <Text
                    style={{
                      color: "#545151",
                      fontSize: 12,
                      fontWeight: "400",
                    }}
                  >
                    Posted date: 11 April 2022
                  </Text>
                </View>
              </View>

              <View style={{ width: "30%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: theme["color-primary-200"],
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Applicants
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      2
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Accepted
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      0
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Pending
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      2
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Rejected
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      4
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    KIV
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: "95%",
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 15,
                flexDirection: "row",
                marginVertical: 10,
                marginBottom: 5,
                borderWidth: 1,
                borderColor: theme["color-primary-100"],
              }}
            >
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: theme["color-primary-200"],
                    fontWeight: "700",
                  }}
                >
                  Emcee / TV Host Adsadfsdfdsf
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Petaling Jaya
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    RM 100/hour
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    01 May 2022 (1 day)
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "700",
                    }}
                  >
                    Status:
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    On-going
                  </Text>
                </View>
                <View style={{ marginTop: 16 }}>
                  <Text
                    style={{
                      color: "#545151",
                      fontSize: 12,
                      fontWeight: "400",
                    }}
                  >
                    Posted date: 11 April 2022
                  </Text>
                </View>
              </View>

              <View style={{ width: "30%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: theme["color-primary-200"],
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Applicants
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      2
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Accepted
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      0
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Pending
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      2
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Rejected
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      4
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    KIV
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: "95%",
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 15,
                flexDirection: "row",
                marginVertical: 10,
                marginBottom: 5,
                borderWidth: 1,
                borderColor: theme["color-primary-100"],
              }}
            >
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: theme["color-primary-200"],
                    fontWeight: "700",
                  }}
                >
                  Emcee / TV Host Adsadfsdfdsf
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Petaling Jaya
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    RM 100/hour
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size={14}
                    color={theme["color-primary-200"]}
                    style={{
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    01 May 2022 (1 day)
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "700",
                    }}
                  >
                    Status:
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    On-going
                  </Text>
                </View>
                <View style={{ marginTop: 16 }}>
                  <Text
                    style={{
                      color: "#545151",
                      fontSize: 12,
                      fontWeight: "400",
                    }}
                  >
                    Posted date: 11 April 2022
                  </Text>
                </View>
              </View>

              <View style={{ width: "30%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: theme["color-primary-200"],
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Applicants
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      2
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Accepted
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      0
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Pending
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      2
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    Rejected
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme["color-primary-200"],
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      4
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme["color-primary-200"],
                      fontWeight: "600",
                    }}
                  >
                    KIV
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 100 }}></View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default JobBoardScreen;

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
