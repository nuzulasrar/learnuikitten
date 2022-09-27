import React, { useState, useEffect, useContext, useRef } from "react";
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
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import { CommonContext } from "../context/CommonContext";
import { Video, AVPlaybackStatus } from "expo-av";
import * as ImagePicker from "expo-image-picker";

library.add(fab, faCirclePlus, faTrashCan, faPlay);

const AddVideoScreen = ({ navigation }) => {
  const { getData, getUserMedias } = useContext(CommonContext);

  const [thisVideos, setThisVideos] = useState([]);

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [mainUri, setMainUri] = useState(
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  );
  const [vidNo, setVidNo] = useState(null);

  const checkUser = async () => {
    let userdata = await getData("user");
    let userphotos = await getUserMedias(userdata.id, userdata.skey, 2);

    setThisVideos(userphotos);
  };

  useEffect(() => {
    checkUser();
  }, []);

  function Clearstring(str) {
    let newstr = String(str);
    if (newstr.charAt(0) == '"') newstr = newstr.slice(1);
    if (newstr.charAt(newstr.length - 1) == '"')
      newstr = newstr.slice(0, newstr.length - 1);
    return newstr;
  }

  function Selectlist(props) {
    // console.log(JSON.stringify(senaraipangkat2));
    const listall = props.list;
    return (
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          width: 400,
          marginVertical: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          flexWrap: 1,
        }}
      >
        {listall.map((item, index) => {
          var srcc = "rubysb.com/talentbook/" + item.name;
          return (
            <>
              {Clearstring(JSON.stringify(item.name)) != "empty" ? (
                <TouchableOpacity
                  onPress={() => {
                    setMainUri(item.name);
                    setVidNo(item.media_order);
                  }}
                  style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    margin: 10,
                  }}
                >
                  <Video
                    style={styles.video1}
                    source={{
                      uri: "http://rubysb.com/talentbook/" + item.name,
                    }}
                    useNativeControls={false}
                    resizeMode="cover"
                  ></Video>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    alert("add picture");
                  }}
                  style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: theme["color-primary-500"],
                    borderWidth: 1,
                    borderStyle: "dotted",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    color={theme["color-primary-200"]}
                    size={40}
                  />
                  <Text style={{ fontSize: 10, marginTop: 5 }}>Add Video</Text>
                </TouchableOpacity>
              )}
            </>
          );
        })}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme["color-primary-100"],
        width: "100%",
        marginTop: -50,
      }}
    >
      <StatusBarScreen />
      <TopNav
        title="Videos"
        backbutton={1}
        backto="profile"
        navigation={navigation}
      />
      <View
        style={{
          flex: 0,
          flexDirection: "column",
          backgroundColor: "transparent",
          marginTop: 0,
          width: "100%",
          borderRadius: 10,
        }}
      >
        <Selectlist list={thisVideos} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {vidNo == null ? null : "Video"} {vidNo}
          </Text>
        </View>
        <Video
          ref={video}
          style={styles.video2}
          source={{
            uri: "http://rubysb.com/talentbook/" + mainUri,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />

        {/* <View
          style={{
            flex: 0,
            flexDirection: "row",
            width: "100%",
            marginVertical: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              alert("add video");
            }}
            style={{
              backgroundColor: "white",
              width: 100,
              height: 100,
              borderRadius: 5,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
              borderColor: theme["color-primary-500"],
              borderWidth: 1,
              borderStyle: "dotted",
            }}
          >
            <FontAwesomeIcon
              icon={faCirclePlus}
              color={theme["color-primary-200"]}
              size={40}
            />
            <Text style={{ fontSize: 10, marginTop: 5 }}>Add Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("press picture");
            }}
            style={{
              backgroundColor: "white",
              width: 100,
              height: 100,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <ImageBackground
              source={require("../assets/images/gridimages/vid2.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  alert("play video");
                }}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  color={"rgba(255, 255, 255, 0.7)"}
                  size={40}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("delete");
                }}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: theme["color-primary-500"],
                  borderRadius: 50,
                  position: "absolute",
                  right: 5,
                  bottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: theme["color-primary-500"],
                  borderWidth: 1,
                  borderStyle: "dotted",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  color={"white"}
                />
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("press picture");
            }}
            style={{
              backgroundColor: "white",
              width: 100,
              height: 100,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <ImageBackground
              source={require("../assets/images/gridimages/vid3.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  alert("play video");
                }}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  color={"rgba(255, 255, 255, 0.7)"}
                  size={40}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("delete");
                }}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: theme["color-primary-500"],
                  borderRadius: 50,
                  position: "absolute",
                  right: 5,
                  bottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: theme["color-primary-500"],
                  borderWidth: 1,
                  borderStyle: "dotted",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  color={"white"}
                />
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            width: "100%",
            marginVertical: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              alert("press picture");
            }}
            style={{
              backgroundColor: "white",
              width: 100,
              height: 100,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <ImageBackground
              source={require("../assets/images/gridimages/vid4.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  alert("play video");
                }}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  color={"rgba(255, 255, 255, 0.7)"}
                  size={40}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("delete");
                }}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: theme["color-primary-500"],
                  borderRadius: 50,
                  position: "absolute",
                  right: 5,
                  bottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: theme["color-primary-500"],
                  borderWidth: 1,
                  borderStyle: "dotted",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  color={"white"}
                />
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("press picture");
            }}
            style={{
              backgroundColor: "white",
              width: 100,
              height: 100,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <ImageBackground
              source={require("../assets/images/gridimages/vid5.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  alert("play video");
                }}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  color={"rgba(255, 255, 255, 0.7)"}
                  size={40}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("delete");
                }}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: theme["color-primary-500"],
                  borderRadius: 50,
                  position: "absolute",
                  right: 5,
                  bottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: theme["color-primary-500"],
                  borderWidth: 1,
                  borderStyle: "dotted",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  color={"white"}
                />
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("press picture");
            }}
            style={{
              backgroundColor: "white",
              width: 100,
              height: 100,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <ImageBackground
              source={require("../assets/images/gridimages/vid6.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  alert("play video");
                }}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  color={"rgba(255, 255, 255, 0.7)"}
                  size={40}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("delete");
                }}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: theme["color-primary-500"],
                  borderRadius: 50,
                  position: "absolute",
                  right: 5,
                  bottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: theme["color-primary-500"],
                  borderWidth: 1,
                  borderStyle: "dotted",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  color={"white"}
                />
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default AddVideoScreen;

const styles = StyleSheet.create({
  video1: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  video2: {
    alignSelf: "center",
    width: 340,
    height: 192,
  },
});
