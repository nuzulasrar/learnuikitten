import React, { useState, useContext, useEffect } from "react";
import {
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
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Input,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { default as theme } from "../custom-theme.json";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import { CommonContext } from "../context/CommonContext";
import * as WebBrowser from "expo-web-browser";

library.add(fab, faBell);

const HomeScreen = ({ navigation }) => {
  const { accountType, setAccountType, getData } = useContext(CommonContext);

  const [thisUser, setThisUser] = useState({});
  const [firstLogin, setFirstLogin] = useState(0);

  const checkUser = async () => {
    let userdata = await getData("user");
    // let removedata = await removeData("user");
    setThisUser(userdata);
    // alert(removedata);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <ImageBackground
        source={require("../assets/images/bg-home.jpg")}
        resizeMode="cover"
        blurRadius={3}
        style={[
          styles.bgimage,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={{
              width: 20,
              height: 20,
              backgroundColor: "transparent",
              margin: 20,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 20,
              right: 0,
            }}
          >
            <FontAwesomeIcon
              icon={faBell}
              color={"white"}
              size={30}
            />
          </TouchableOpacity>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ marginBottom: 150 }}></View>

            <Image
              style={{ width: 200, height: 200, marginBottom: 50 }}
              source={require("../assets/images/newlogo.png")}
            />
            {/* <Text>{JSON.stringify(thisUser)}</Text> */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("GalleryCategory");
                }}
                style={{ borderRadius: 20 }}
              >
                <View
                  style={{
                    width: 120,
                    height: 120,
                    backgroundColor: "white",
                    margin: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: theme["color-primary-500"],
                    borderWidth: 4,
                    borderRadius: 20,
                  }}
                >
                  <Button
                    buttonStyle={{
                      width: 120,
                      height: 60,
                      backgroundColor: "transparent",
                    }}
                    icon={{
                      name: "camera-alt",
                      size: 50,
                      color: theme["color-primary-500"],
                    }}
                    onPress={() => {
                      navigation.navigate("GalleryCategory");
                    }}
                  />
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>
                    GALLERY
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("JobBoard");
                }}
                style={{ borderRadius: 20 }}
              >
                <View
                  style={{
                    width: 120,
                    height: 120,
                    backgroundColor: "white",
                    margin: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: theme["color-primary-500"],
                    borderWidth: 4,
                    borderRadius: 20,
                  }}
                >
                  <Button
                    buttonStyle={{
                      width: 120,
                      height: 60,
                      backgroundColor: "transparent",
                    }}
                    icon={{
                      name: accountType == 1 ? "search" : "assignment",
                      size: 50,
                      color: theme["color-primary-500"],
                    }}
                    onPress={() => {
                      navigation.navigate("JobBoard");
                    }}
                  />
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>
                    JOBS
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <Text>{JSON.stringify(thisUser.id)}</Text> */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "transparent",
                  margin: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://www.instagram.com/newlookcasting/"
                    )
                  }
                  buttonStyle={{
                    width: 60,
                    height: 60,
                    backgroundColor: "transparent",
                  }}
                  icon={
                    <Icon
                      name="instagram"
                      size={32}
                      color={"white"}
                    />
                  }
                />
              </View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "transparent",
                  margin: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  buttonStyle={{
                    width: 60,
                    height: 60,
                    backgroundColor: "transparent",
                  }}
                  icon={
                    <Icon
                      name="facebook"
                      size={32}
                      color={"white"}
                    />
                  }
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://www.facebook.com/ModelTalentCasting/"
                    )
                  }
                />
              </View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "transparent",
                  margin: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  buttonStyle={{
                    width: 60,
                    height: 60,
                    backgroundColor: "transparent",
                  }}
                  icon={
                    <Icon
                      name="youtube"
                      size={32}
                      color={"white"}
                    />
                  }
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://www.youtube.com/playlist?list=PLyASiD-pvBA5NomUBYqoFzO9O-yg6kQE4"
                    )
                  }
                />
              </View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "transparent",
                  margin: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  buttonStyle={{
                    width: 60,
                    height: 60,
                    backgroundColor: "transparent",
                  }}
                  icon={
                    <Icon
                      name="whatsapp"
                      size={32}
                      color={"white"}
                    />
                  }
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://api.whatsapp.com/send?phone=+60133692328"
                    )
                  }
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    margin: 5,
  },
  bgimage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
});
