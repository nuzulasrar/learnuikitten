import React, { useState, useContext, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
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
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import Checkbox from "expo-checkbox";
import RNPickerSelect from "react-native-picker-select";
import { CommonContext, CommonContextProvider } from "../context/CommonContext";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

library.add(fab, faStar, faCamera);

const UploadProfileScreen = ({ navigation, route }) => {
  const { accounttype } = route.params;
  const {
    isLoggedIn,
    setIsLoggedIn,
    getData,
    modalVisible,
    setModalVisible,
    alertMessages,
    setAlertMessages,
    ModalWindow,
    pressOK,
    finishRegistrationFlow,
  } = useContext(CommonContext);

  const [image, setImage] = useState(null);
  const [formdata, setFormdata] = useState(null);
  const [userdata, setUserdata] = useState({});

  const data = new FormData();

  const checkUser = async () => {
    let userdata = await getData("user");
    let userskills = await getData("skills");

    setUserdata(userdata);

    // alert(JSON.stringify(userdata.fname))
  };

  useEffect(() => {
    checkUser();
  }, []);

  const pickImage = async () => {
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
    setImage(localUri);
    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();

    filename = userdata.id + "_" + filename;

    formData.append("photo", { uri: localUri, name: filename, type });
    formData.append("req", "b-uploadprofilepic");
    formData.append("p1", userdata.id);
    formData.append("p2", userdata.skey);

    setFormdata(formData);

    // alert(JSON.stringify(thisUser.lname));
  };

  const uploadHandler = async () => {
    await axios
      .post("http://rubysb.com/talentbook/api.php", {
        req: "b-uploadprofilepic",
        p1: userdata.id,
        p2: userdata.skey,
      })
      .then((res) => {
        // alert(JSON.stringify(res.data));
        if (res.data.validated == true) {
          uploadHandler2();
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const uploadHandler2 = async () => {
    await axios
      .post("http://rubysb.com/talentbook/uploadfile.php", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        alert(JSON.stringify(res.data));
        if (res.data.status == 1) alert("Only jpg, jpeg, and png allowed.");
        else if (res.data.status == 2)
          alert("Picture size must not exceed 3 Megabytes.");
        else if (res.data.status == 3) {
          alert("Upload Successfull");
          navigation.navigate("SubscriptionPlan");
        } else if (res.data.status == 4)
          alert("Error. Please try again later.");
      })
      .catch((err) => {
        console.log(err.response);
      });
    // alert(JSON.stringify(formdata));
    // console.log(formdata);
  };

  useEffect(() => {
    // if (!finishRegistrationFlow) {
    //   navigation.addListener("beforeRemove", (e) => {
    //     e.preventDefault();
    //     setModalVisible(!modalVisible);
    //     setAlertMessages(
    //       `Going back to previous screens is disabled temporarily. ${"\n\n"} Please finish the whole registration process first. Thank you!`
    //     );
    //     return;
    //   });
    // } else {
    //   return;
    // }

    if (!finishRegistrationFlow) {
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
        setModalVisible(!modalVisible);
        // setAlertMessages(
        //   `Going back to previous screens is disabled temporarily. ${"\n\n"} Please finish the whole registration process first. Thank you!`
        // );
        setAlertMessages(JSON.stringify(finishRegistrationFlow));
        return;
      });
    } else {
      // alert("trueeee");
    }
  }, [navigation]);

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
        title="Upload Profile Picture"
        backbutton={0}
        navigation={navigation}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: theme["color-primary-100"],
          alignItems: "center",
          marginTop: 40,
        }}
      >
        {image ? (
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              width: 260,
              height: 260,
              borderRadius: 400,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 260, height: 260, borderRadius: 400 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              backgroundColor: "white",
              width: 260,
              height: 260,
              borderRadius: 400,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCamera}
              size={44}
              style={{ alignSelf: "center", color: "#ABABAB" }}
            />
          </TouchableOpacity>
        )}
        <View
          style={{
            marginVertical: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              uploadHandler();
            }}
            style={{
              marginTop: 10,
              marginBottom: 15,
              backgroundColor: theme["color-primary-500"],
              width: 181,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              paddingVertical: 7,
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              UPLOAD
            </Text>
          </TouchableOpacity>
          {/* <Text>{accounttype}</Text> */}
          <TouchableOpacity
            onPress={() => {
              accounttype == 1
                ? navigation.navigate("SubscriptionPlan")
                : setIsLoggedIn(true);
            }}
            style={{
              marginTop: 10,
              backgroundColor: "transparent",
              borderColor: theme["color-primary-500"],
              borderWidth: 1,
              width: 181,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              paddingVertical: 7,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                color: theme["color-primary-500"],
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              SKIP
            </Text>
          </TouchableOpacity>
          {/* <Text>{JSON.stringify(userdata)}</Text> */}
        </View>
        <ModalWindow />
      </View>
    </View>
  );
};

export default UploadProfileScreen;

const styles = StyleSheet.create({});
