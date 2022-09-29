import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  createRef,
} from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
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
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

library.add(fab, faCirclePlus, faTrashCan, faPlay);

const AddVideoScreen = ({ navigation }) => {
  const { getData, getUserMedias } = useContext(CommonContext);

  const [userdata, setUserdata] = useState({});
  const [thisVideos, setThisVideos] = useState([]);
  const [formdata, setFormdata] = useState(null);

  const [showList, setShowList] = useState(true);

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [mainUri, setMainUri] = useState(null);
  const [vidNo, setVidNo] = useState(null);

  const checkUser = async () => {
    let userdata = await getData("user");
    let userphotos = await getUserMedias(userdata.id, userdata.skey, 2);

    setUserdata(userdata);
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

  const myRefs = useRef([]);

  myRefs.current = thisVideos.map(
    (element, i) => myRefs.current[i] ?? createRef()
  );

  const selectFrom = async (index) => {
    return Alert.alert(
      "Pick Video Source",
      "Which source you want to select the video?",
      [
        {
          text: "Photo Gallery",
          onPress: () => {
            pickFromGallery(index);
          },
        },
        {
          text: "File System",
          onPress: () => {
            pickFromDocument(index);
          },
        },
      ]
    );
  };

  const pickFromDocument = async (index) => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.getDocumentAsync({});
    } catch (err) {
      console.log(err);
    }
  };

  const pickFromGallery = async (index) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (result.cancelled) {
      return;
    }

    let localUri = result.uri;

    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();

    filename = userdata.id + "_" + filename;

    formData.append("media", { uri: localUri, name: filename, type });
    formData.append("req", "b-uploadmedia");
    formData.append("p1", userdata.id);
    formData.append("p2", userdata.skey);
    formData.append("p3", 2);
    formData.append("p4", index);

    // alert(JSON.stringify(formData));

    // setFormdata(formData);
    // myRefs.current[index].current.setNativeProps({
    //   source: [{ uri: result.uri }],
    // });

    try {
      setShowList(false);
      let uploadresult = await axios.post(
        "http://rubysb.com/talentbook/uploadfile.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(JSON.stringify(uploadresult.data));
      if (uploadresult.data) setShowList(true);
      if (
        uploadresult.data.status == 0 ||
        uploadresult.data.status == 1 ||
        uploadresult.data.status == 2 ||
        uploadresult.data.status == 4 ||
        uploadresult.data.status == 6
      ) {
        alert(uploadresult.data.error);
      } else if (
        uploadresult.data.status == 32 ||
        uploadresult.data.status == 52
      )
        console.log(uploadresult.data);
      else if (uploadresult.data.status == 31 || uploadresult.data.status == 51)
        alert(uploadresult.data.success);

      checkUser();
    } catch (error) {
      console.log(error);
    }
  };

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
          flexWrap: "wrap",
        }}
      >
        {listall.map((item, index) => {
          var srcc = "rubysb.com/talentbook/" + item.name;
          return (
            <>
              {Clearstring(JSON.stringify(item.name)) != "empty" ? (
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 40,
                      backgroundColor: theme["color-danger-500"],
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: "white" }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => selectFrom(index)}
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
                    <Text style={{ fontSize: 10, marginTop: 5 }}>
                      Add Video
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 40,
                      backgroundColor: "transparentr",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  ></TouchableOpacity>
                </View>
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
        {showList ? (
          <>
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
          </>
        ) : (
          <>
            <View
              style={{
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>
                Your file is being processed. Please wait..
              </Text>
            </View>
          </>
        )}

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
