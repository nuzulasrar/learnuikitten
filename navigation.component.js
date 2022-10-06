import React, { useContext, useEffect, useState, createRef } from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Icon,
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Button,
  TopNavigation,
  TopNavigationAction,
  Input,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { default as theme } from "./custom-theme.json";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import GalleryCategoryScreen from "./screens/GalleryCategoryScreen";
import GalleryModelScreen from "./screens/GalleryModelScreen";
import JobBoardScreen from "./screens/JobBoardScreen";
import JobDetailsScreen from "./screens/JobDetailsScreen";
import NotificationScreen from "./screens/NotificationScreen";
import NewScreen from "./screens/NewScreen";
import HistoryScreen from "./screens/HistoryScreen";
import SavedJobScreen from "./screens/SavedJobScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewHistoryScreen from "./screens/ReviewHistoryScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import MembershipScreen from "./screens/MembershipScreen";
import PaymentScreen from "./screens/PaymentScreen";
import UploadPhotoPremiumScreen from "./screens/UploadPhotoPremiumScreen";
import UploadDetailsScreen from "./screens/UploadDetailsScreen";
import AddPhotosScreen from "./screens/AddPhotosScreen";
import AddVideoScreen from "./screens/AddVideoScreen";
import AddAudioScreen from "./screens/AddAudioScreen";
import AddCompCardScreen from "./screens/AddCompCardScreen";
import TermsAndConditionsScreen from "./screens/TermsAndConditionsScreen";
import JoinUsTalentScreen from "./screens/JoinUsTalentScreen";
import JoinUsClientScreen from "./screens/JoinUsClientScreen";
import JobApplicants from "./screens/JobApplicants";
import UploadProfileScreen from "./screens/UploadProfileScreen";
import PostJobScreen from "./screens/PostJobScreen";
import { CommonContext, CommonContextProvider } from "./context/CommonContext";
import ChatMessageScreen from "./screens/ChatMessageScreen";
import SubscriptionPlan from "./screens/SubscriptionPlan";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons/faFileLines";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from "react-native-picker-select";

library.add(
  fab,
  faPlus,
  faCircleCheck,
  faCircleArrowRight,
  faCheckCircle,
  faHome,
  faFileLines,
  faBookmark,
  faMessage,
  faUser
);

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const renderIcon1 = (props) => (
  <TouchableWithoutFeedback>
    <Icon
      {...props}
      name="email"
    />
  </TouchableWithoutFeedback>
);

const renderIcon2 = (props) => (
  <TouchableWithoutFeedback>
    <Icon
      {...props}
      name="lock"
    />
  </TouchableWithoutFeedback>
);

const homeIcon = (props) => (
  // <TouchableWithoutFeedback>
  <Icon
    {...props}
    name="home-outline"
  />
  //</TouchableWithoutFeedback>
);

const historyIcon = (props) => (
  //<TouchableWithoutFeedback>
  <Icon
    {...props}
    name="calendar-outline"
  />
  //</TouchableWithoutFeedback>
);

const savedIcon = (props) => (
  //<TouchableWithoutFeedback>
  <Icon
    {...props}
    name="bookmark-outline"
  />
  //</TouchableWithoutFeedback>
);

const chatIcon = (props) => (
  //<TouchableWithoutFeedback>
  <Icon
    {...props}
    name="message-circle-outline"
  />
  //</TouchableWithoutFeedback>
);

const profileIcon = (props) => (
  //<TouchableWithoutFeedback>
  <Icon
    {...props}
    name="person-outline"
  />
  //</TouchableWithoutFeedback>
);

const renderCaption = () => {
  return (
    <View style={styles.captionContainer}>
      {AlertIcon(styles.captionIcon)}
      <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn, accountType, setAccountType, login } =
    useContext(CommonContext);

  useEffect(() => {
    setAccountType(1);
  }, []);

  const [values, setValues] = useState({
    email: "nuzul2@gmail.com",
    password: "abc123",
  });

  const onChangeText = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    // console.log(values);
    if (
      values.email == "" ||
      values.email == " " ||
      values.email == null ||
      values.password == "" ||
      values.password == " " ||
      values.password == null
    ) {
      alert("Please fill in all the details");
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(values.email) === false) {
        // setModalVisible(true)
        alert("Email format is incorrect. Please enter correct email format.");
        return false;
      } else {
        login(values);
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ImageBackground
        source={require("./assets/images/loginbg/1.jpg")}
        resizeMode="cover"
        style={[
          styles.bgimage,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <View style={{ flexDirection: "row", marginBottom: 230 }}>
          <View style={{ width: "30%" }}></View>

          <View style={{ width: "70%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 32,
                textAlign: "center",
                marginRight: 0,
                color: "white",
                textShadowColor: "black",
                textShadowOffset: { width: 0.5, height: 0.5 },
                textShadowRadius: 8,
              }}
            >
              It's Your Time {"\n"} to SHINE
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            padding: 10,
            backgroundColor: "rgba(237, 241, 240, 0.374)",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: theme["color-primary-400"],
              borderRadius: 5,
              width: "97%",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={{}}
              onValueChange={(value) => setAccountType(value)}
              items={[
                { label: "Professional Model / Talent", value: 1 },
                { label: "Client", value: 2 },
              ]}
            />
          </View>
          <Input
            value={values.email}
            onChangeText={(text) => onChangeText("email", text)}
            placeholder="Email"
            accessoryLeft={renderIcon1}
            secureTextEntry={false}
            style={[styles.input, { marginTop: 16 }]}
          />
          <Input
            value={values.password}
            onChangeText={(text) => onChangeText("password", text)}
            placeholder="Password"
            accessoryLeft={renderIcon2}
            secureTextEntry={true}
            style={styles.input}
          />
          {/* <Button
                        status="primary"
                        onPress={() => setIsLoggedIn(true)}
                        style={{ margin: 10, width: "95%" }}
                    >
                        SIGN IN
                    </Button> */}
          <TouchableOpacity
            // onPress={() => setIsLoggedIn(true)}
            onPress={() => handleSubmit()}
            style={{
              backgroundColor: theme["color-primary-500"],
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: "95%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 14, marginRight: 8 }}>
              Not registered yet?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text style={{ color: "maroon" }}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "white", fontSize: 14, marginVertical: 10 }}>
            Forgot Password
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const JoinScreen = ({ route, navigation }) => {
  const { jointype } = route.params;
  const { accountType, setAccountType } = useContext(CommonContext);

  useEffect(() => {
    {
      jointype == 1
        ? setAccountType(1)
        : jointype == 2
        ? setAccountType(2)
        : setAccountType(0);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme["color-primary-100"],
      }}
    >
      {jointype == 1 ? (
        <>
          <View style={{ marginTop: 400 }}></View>
          <ImageBackground
            source={require("./assets/images/talent2-bg.jpg")}
            resizeMode="cover"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 400,
            }}
          >
            <Text
              style={{
                marginTop: -280,
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              PROFESSIONAL{"\n"}MODEL / TALENT
            </Text>
          </ImageBackground>
          <LinearGradient
            colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)"]}
            style={[
              styles.bgimage,
              {
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 100,
                flex: 0,
              },
            ]}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "flex-start",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <View
                style={{
                  width: "95%",
                  marginTop: 10,
                  paddingVertical: 20,
                  backgroundColor: "transparent",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingHorizontal: 25,
                }}
              >
                <Text style={styles.shadowText}>
                  {"\u2022"} Direct job booking from client.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Get jobs notification.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Direct communication with client on jobs.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Accessible by client to view your profile instantly
                  with 100% exposure worldwide.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Direct negation on fees with client.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} No agency fees for every job you do.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Update photos and your own particulars any time.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} A permanent and booking platform to host your
                  profile and comp card.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Other model agent may find you here too.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Low joining annual fees as member.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("JoinTalent")}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  backgroundColor: theme["color-primary-500"],
                  borderColor: theme["color-primary-500"],
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  width: 130,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>JOIN</Text>
              </TouchableOpacity>
              <View style={{ height: 400 }}></View>
            </ScrollView>
          </LinearGradient>
        </>
      ) : (
        <>
          <View style={{ marginTop: 400 }}></View>
          <ImageBackground
            source={require("./assets/images/client-bg.jpg")}
            resizeMode="cover"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 400,
            }}
          >
            <Text
              style={{
                marginTop: -300,
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
                textShadowColor: "black",
                textShadowOffset: { width: 0.5, height: 0.5 },
                textShadowRadius: 6,
              }}
            >
              CLIENT
            </Text>
          </ImageBackground>
          <LinearGradient
            colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)"]}
            style={[
              styles.bgimage,
              {
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 100,
                flex: 0,
              },
            ]}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "flex-start",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <View
                style={{
                  width: "95%",
                  marginTop: 10,
                  paddingVertical: 20,
                  backgroundColor: "transparent",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingHorizontal: 25,
                }}
              >
                <Text style={styles.shadowText}>
                  {"\u2022"} A welcome gift of free 200 credits to post jobs.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Send message to invite the suitable talents for
                  casting.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Function of “select” and “download” talent profiles
                  for presentation.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Direct booking with your desired talent or model.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Direct communication with talent or model.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Pay direct to the talent.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Accessible to unlimited and clear and updated
                  talent cards and casting videos or listen to their VO files.
                </Text>
                <Text style={styles.shadowText}>
                  {"\u2022"} Search function by using keyword to shortlist
                  talents.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("JoinClient")}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  backgroundColor: theme["color-primary-500"],
                  borderColor: theme["color-primary-500"],
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  width: 130,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>JOIN</Text>
              </TouchableOpacity>
              <View style={{ height: 400 }}></View>
            </ScrollView>
          </LinearGradient>
        </>
      )}
    </View>
  );
};

const RegisterScreen = ({ navigation }) => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E8F2F6",
    }}
  >
    <ScrollView
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Image
        style={[
          styles.stretch,
          { borderRadius: 500, width: 200, height: 200, marginBottom: 0 },
        ]}
        source={require("./assets/images/newlogo.png")}
      />
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={{ width: "0%" }}></View>
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 35,
              textAlign: "center",
              marginRight: 0,
              color: "black",
            }}
          >
            Let's Get Started
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "90%",
          padding: 10,
          backgroundColor: "rgba(237, 241, 240, 0.374)",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          value={""}
          label="First Name"
          placeholder="First Name"
          accessoryLeft={renderIcon1}
          secureTextEntry={false}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Input
          value={""}
          label="Last Name"
          placeholder="Last Name"
          accessoryLeft={renderIcon2}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          status="primary"
          onPress={() => navigation.navigate("Login")}
          style={{ margin: 10, width: "95%" }}
        >
          SUBMIT
        </Button>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Screen
        name="GalleryCategory"
        component={GalleryCategoryScreen}
      />
      <Screen
        name="GalleryModel"
        component={GalleryModelScreen}
      />
      <Screen
        name="JobBoard"
        component={JobBoardScreen}
      />
      <Screen
        name="JobDetails"
        component={JobDetailsScreen}
      />
      <Screen
        name="JobApplicants"
        component={JobApplicants}
      />
      <Screen
        name="Notification"
        component={NotificationScreen}
      />
      <Screen
        name="PostJob"
        component={PostJobScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const HistoryStack = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ApplicationHistory"
        component={HistoryScreen}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
);
const SavedJobStack = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SavedJob"
        component={SavedJobScreen}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Screen
        name="Photos"
        component={AddPhotosScreen}
      />
      <Screen
        name="Videos"
        component={AddVideoScreen}
      />
      <Screen
        name="Audios"
        component={AddAudioScreen}
      />
      <Screen
        name="Comp Card"
        component={AddCompCardScreen}
      />
      <Screen
        name="EditProfile"
        component={EditProfileScreen}
      />
      <Screen
        name="Settings"
        component={SettingsScreen}
      />
      <Screen
        name="ReviewHistory"
        component={ReviewHistoryScreen}
      />
      <Screen
        name="Membership"
        component={MembershipScreen}
      />
      <Screen
        name="ContactUs"
        component={ContactUsScreen}
      />
      <Screen
        name="Terms"
        component={TermsAndConditionsScreen}
      />
      <Screen
        name="Payment"
        component={PaymentScreen}
      />
      <Screen
        name="UploadPhotoPremium"
        component={UploadPhotoPremiumScreen}
      />
      <Screen
        name="UploadDetails"
        component={UploadDetailsScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
      />
      <Screen
        name="ChatMessage"
        component={ChatMessageScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => {
  const { isLoggedIn, setIsLoggedIn, bottomNavPosition, setBottomNavPosition } =
    useContext(CommonContext);
  return (
    <>
      {isLoggedIn ? (
        <BottomNavigation
          appearance="noIndicator"
          style={{
            position: "absolute",
            bottom: bottomNavPosition,
            backgroundColor: theme["color-primary-500"],
          }}
          selectedIndex={state.index}
          onSelect={(index) => navigation.navigate(state.routeNames[index])}
          tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "white",
            keyboardHidesTabBar: true,
            style: {
              paddingTop: 10,
              //backgroundColor: theme["color-primary-500"],
              // height: Platform.OS === "ios" ? 79 : 60 + inset.bottom,
              // paddingBottom: Platform.OS === "ios" ? inset.bottom : 10,
            },
          }}
        >
          <BottomNavigationTab
            title={(evaProps) => (
              <Text style={{ color: "white", fontSize: 12 }}>Home</Text>
            )}
            icon={(evaProps) => (
              <FontAwesomeIcon
                icon={faHome}
                color={"white"}
                size={20}
                style={{ marginBottom: 5 }}
              />
            )}
          />
          <BottomNavigationTab
            title={(evaProps) => (
              <Text style={{ color: "white", fontSize: 12 }}>History</Text>
            )}
            icon={(evaProps) => (
              <FontAwesomeIcon
                icon={faFileLines}
                color={"white"}
                size={20}
                style={{ marginBottom: 5 }}
              />
            )}
          />
          <BottomNavigationTab
            title={(evaProps) => (
              <Text style={{ color: "white", fontSize: 12 }}>Saved</Text>
            )}
            icon={(evaProps) => (
              <FontAwesomeIcon
                icon={faBookmark}
                color={"white"}
                size={20}
                style={{ marginBottom: 5 }}
              />
            )}
          />
          <BottomNavigationTab
            title={(evaProps) => (
              <Text style={{ color: "white", fontSize: 12 }}>Chat</Text>
            )}
            icon={(evaProps) => (
              <FontAwesomeIcon
                icon={faMessage}
                color={"white"}
                size={20}
                style={{ marginBottom: 5 }}
              />
            )}
          />
          <BottomNavigationTab
            title={(evaProps) => (
              <Text style={{ color: "white", fontSize: 12 }}>Profile</Text>
            )}
            icon={(evaProps) => (
              <FontAwesomeIcon
                icon={faUser}
                color={"white"}
                size={20}
                style={{ marginBottom: 5 }}
              />
            )}
          />
        </BottomNavigation>
      ) : (
        <></>
      )}
    </>
  );
};

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{
      tabBarActiveBackgroundColor: "#000",
    }}
  >
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Screen
        name="HomeStack"
        options={{ headerShown: false }}
        component={HomeStack}
      />
      <Screen
        name="HistoryStack"
        component={HistoryStack}
      />
      <Screen
        name="SavedJobStack"
        component={SavedJobStack}
      />
      <Screen
        name="Chat"
        component={ChatStack}
      />
      <Screen
        name="ProfileStack"
        component={ProfileStack}
      />
    </Stack.Group>
  </Navigator>
);

// const navigationRef = createRef();

export const AppNavigator = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(CommonContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <NavigationContainer
    // ref={navigationRef}
    >
      {isLoggedIn ? (
        // Screens for logged in users
        <TabNavigator />
      ) : (
        // Auth screens
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="Join"
              component={JoinScreen}
            />
            <Stack.Screen
              name="JoinTalent"
              component={JoinUsTalentScreen}
            />
            <Stack.Screen
              name="JoinClient"
              component={JoinUsClientScreen}
            />
            <Stack.Screen
              name="UploadProfile"
              component={UploadProfileScreen}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name="SubscriptionPlan"
              component={SubscriptionPlan}
            />
            <Screen
              name="UploadPhotoPremium"
              component={UploadPhotoPremiumScreen}
            />
            <Screen
              name="UploadDetails"
              component={UploadDetailsScreen}
            />
          </Stack.Group>
        </Stack.Navigator>
      )}
      {/* Common modal screens */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Help" component={UsersScreen} />
                    <Stack.Screen name="Invite" component={OrdersScreen} />
                </Stack.Group> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  bgimage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  shadowText: {
    fontSize: 17,
    marginBottom: 15,
    color: "black",
    textAlign: "left",
    // textShadowColor: 'black',
    // textShadowOffset: { width: 0.5, height: 0.5 },
    // textShadowRadius: 6,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 4,
    margin: 2,
    color: "black",
    backgroundColor: "white",
    paddingRight: 30, // to ensure the text is never behind the icon
    height: 40,
  },
  inputAndroid: {
    fontSize: 10,
    padding: 0,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 50,
    color: "rgba(50,50,50,1)",
    fontWeight: "800",
    // backgroundColor: "white",
    height: 40,
    marginTop: -5,
    marginBottom: 7,
  },
});
