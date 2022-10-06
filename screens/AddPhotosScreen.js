import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  createRef,
  useCallback,
  useMemo,
} from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
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
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import axios from "axios";
import { CommonContext } from "../context/CommonContext";
import * as ImagePicker from "expo-image-picker";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

library.add(fab, faCirclePlus, faTrashCan);

const AddPhotosScreen = ({ navigation }) => {
  const { getData, getUserMedias } = useContext(CommonContext);

  const [userdata, setUserdata] = useState({});
  const [thisPhotos, setThisPhotos] = useState([]);
  const [formdata, setFormdata] = useState(null);

  const [showList, setShowList] = useState(true);

  const [buttonPressed, setButtonPressed] = useState(0);

  const checkUser = async () => {
    let userdata = await getData("user");
    let userphotos = await getUserMedias(userdata.id, userdata.skey, 1);

    setUserdata(userdata);
    setThisPhotos(userphotos);
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    checkUser();
  }, [buttonPressed]);

  function Clearstring(str) {
    let newstr = String(str);
    if (newstr.charAt(0) == '"') newstr = newstr.slice(1);
    if (newstr.charAt(newstr.length - 1) == '"')
      newstr = newstr.slice(0, newstr.length - 1);
    return newstr;
  }

  const myRefs = useRef([]);

  myRefs.current = thisPhotos.map(
    (element, i) => myRefs.current[i] ?? createRef()
  );

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  const runFunction = (value) => {
    // value.focus();
    // alert(value);
    // console.log(myRefs.current[value].current);
    myRefs.current[value].current.setNativeProps({ text: "whatt" });
    // alert(JSON.stringify(value, getCircularReplacer));
  };

  const uploadHandler = async () => {
    await axios
      .post("http://rubysb.com/talentbook/uploadfile.php", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        // alert(JSON.stringify(res.data));
        if (res.data.status == 1) alert("Only jpg, jpeg, and png allowed.");
        else if (res.data.status == 2)
          alert("Picture size must not exceed 5 Megabytes.");
        else if (res.data.status == 3) {
          alert("Upload Successfull");
          navigation.navigate("SubscriptionPlan");
        } else if (res.data.status == 4)
          alert("Error. Please try again later.");
        else if (res.data.status == 5) alert("User not found!");
      })
      .catch((err) => {
        console.log(err.response);
      });
    // alert(JSON.stringify(formdata));
    // console.log(formdata);
  };

  const [gotnewphotos, setGotnewphotos] = useState(0);

  const pickImage = async (index) => {
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
    } else {
      setGotnewphotos(gotnewphotos + 1);
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
    formData.append("p3", 1);
    formData.append("p4", index);

    // setFormdata(formData);
    myRefs.current[index].current.setNativeProps({
      source: [{ uri: result.uri }],
    });

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
      if (uploadresult.data) {
        setShowList(true);
        checkUser();
      }
      if (
        uploadresult.data.status == 0 ||
        uploadresult.data.status == 1 ||
        uploadresult.data.status == 2 ||
        uploadresult.data.status == 4 ||
        uploadresult.data.status == 6
      ) {
        alert(uploadresult.data.error);
        console.log(uploadresult.data.status);
      } else if (
        uploadresult.data.status == 32 ||
        uploadresult.data.status == 52
      )
        console.log(uploadresult.data);
      else if (uploadresult.data.status == 31 || uploadresult.data.status == 51)
        alert(uploadresult.data.success);
    } catch (error) {
      setShowList(true);
      if (error == "AxiosError: Network Error") {
        alert("Network Error. Please Try Again!");
      }
      console.log("the error: " + error);
    }
  };

  const confirmDelete = (index) => {
    return Alert.alert(
      "Confirm Photo Deletion",
      "Are you sure you want to delete this photo?",
      [
        {
          text: "Yes",
          onPress: () => {
            deleteFile(index);
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  const deleteFile = async (index) => {
    let formData = new FormData();
    formData.append("req", "b-deletemedia");
    formData.append("p1", userdata.id);
    formData.append("p2", userdata.skey);
    formData.append("p3", 1);
    formData.append("p4", index);

    try {
      let deleteresult = await axios
        .post("http://rubysb.com/talentbook/uploadfile.php", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .catch(function (error) {
          console.log(error);
        });

      // alert(deleteresult.data);

      if (deleteresult?.data) checkUser();

      if (deleteresult.data.status == 1) {
        alert(deleteresult.data.success);
      } else if (
        deleteresult.data.status == 2 ||
        deleteresult.data.status == 3
      ) {
        alert(deleteresult.data.error);
      }
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
                <TouchableOpacity
                  key={index}
                  ref={myRefs.current[index]}
                  onPress={() => {
                    runFunction(index);
                  }}
                  style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    margin: 10,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: theme["color-primary-500"],
                    }}
                  >
                    <ImageBackground
                      source={{
                        uri: "http://rubysb.com/talentbook/" + item.name,
                      }}
                      resizeMode="cover"
                      style={{ width: "100%", height: "100%", borderRadius: 5 }}
                    >
                      {/* <Text>
                      {item.name} {srcc}
                    </Text> */}
                      <TouchableOpacity
                        onPress={() => {
                          confirmDelete(index);
                        }}
                        style={{
                          width: 30,
                          height: 30,
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
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  // onPress={() => {
                  //   runFunction(index);
                  // }}
                  key={index}
                  onPress={() => pickImage(index)}
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
                  <View
                    style={{
                      borderColor: theme["color-primary-500"],
                      borderWidth: 1,
                      borderStyle: "dotted",
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      ref={myRefs.current[index]}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 5,
                        // borderWidth: 1,
                        borderColor: theme["color-primary-200"],
                        // borderStyle: "line",
                      }}
                      source={require("../assets/images/addphoto.png")}
                      resizeMode="cover"
                    />
                  </View>
                  {/* <FontAwesomeIcon
                    icon={faCirclePlus}
                    color={theme["color-primary-200"]}
                    size={40}
                  />
                  <Text style={{ fontSize: 10, marginTop: 5 }}>Add Photo</Text> */}
                  {/* <TextInput
                    ref={myRefs.current[index]}
                    style={{ width: 100, height: 50, backgroundColor: "white" }}
                  /> */}
                </TouchableOpacity>
              )}
            </>
          );
        })}
      </View>
    );
  }

  const inputRef = useRef();

  const editText = useCallback(() => {
    inputRef.current.setNativeProps({ text: "Edited Text" });
  }, []);

  const imageRef = useRef();

  const editPic = useCallback(() => {
    imageRef.current.setNativeProps({
      source: [
        { uri: "http://rubysb.com/talentbook/upload/11531/photo/3.jpg" },
      ],
    });
  }, []);

  const textArray = [
    { id: 1, thetexta: "abc", thetextb: "123" },
    { id: 2, thetexta: "def", thetextb: "456" },
  ];

  const newImgRef = useRef([]);

  newImgRef.current = textArray.map(
    (element, i) => newImgRef.current[i] ?? createRef()
  );

  const testFunction = (val) => {
    // console.log(newImgRef.current[val].current);
    newImgRef.current[val].current.setNativeProps({ text: "Edited Text" });
  };

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
        title="Photos"
        backbutton={1}
        backto="profile"
        navigation={navigation}
      />
      <ScrollView
        style={{
          flex: 0,
          flexDirection: "column",
          backgroundColor: "transparent",
          marginTop: 0,
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 0,
            flexDirection: "column",
            backgroundColor: "transparent",
            marginTop: 0,
            width: "100%",
            padding: 5,
            borderRadius: 10,
          }}
        >
          {showList ? (
            <Selectlist list={thisPhotos} />
          ) : (
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
          )}

          {/* <TouchableOpacity
            onPress={() => {
              setButtonPressed(buttonPressed + 1);
            }}
            style={{
              backgroundColor: theme["color-primary-500"],
              width: 200,
              height: 40,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Refresh Photos</Text>
          </TouchableOpacity> */}

          {/* <Text>{JSON.stringify(formdata)}</Text> */}

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
              <Text style={{ fontSize: 10, marginTop: 5 }}>Add Photo</Text>
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
                source={require("../assets/images/gridimages/1.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/2.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/3.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/4.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/5.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/6.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/7.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/8.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/9.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/10.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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
                source={require("../assets/images/gridimages/11.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("delete");
                  }}
                  style={{
                    width: 30,
                    height: 30,
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

          {/* <TouchableOpacity onPress={editText}>
            <Text>sadasdasdsad</Text>
          </TouchableOpacity>
          <TextInput
            ref={inputRef}
            onChangeText={() => editText}
            style={{ width: 100, height: 50, backgroundColor: "white" }}
          />
          <TouchableOpacity onPress={editPic}>
            <Text>change pic</Text>
          </TouchableOpacity>
          <Image
            ref={imageRef}
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          /> */}
        </View>
        {/* {textArray.map((item, i) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => testFunction(i)}
                style={{ padding: 20 }}
              >
                <Text>{item.thetexta}</Text>
              </TouchableOpacity>
              <TextInput
                ref={newImgRef.current[i]}
                style={{ width: 100, height: 50, backgroundColor: "white" }}
              />
            </>
          );
        })} */}
      </ScrollView>
    </View>
  );
};

export default AddPhotosScreen;

const styles = StyleSheet.create({
  icon1: {
    width: 32,
    height: 32,
  },
  icon2: {
    width: 20,
    height: 20,
  },
  icon3: {
    width: 12,
    height: 12,
  },
});
