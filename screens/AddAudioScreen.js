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
import { faHeadphones } from "@fortawesome/free-solid-svg-icons/faHeadphones";
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import { CommonContext } from "../context/CommonContext";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

library.add(fab, faCirclePlus, faTrashCan, faHeadphones);

const AddAudioScreen = ({ navigation }) => {
  const { getData, getUserMedias } = useContext(CommonContext);

  const [userdata, setUserdata] = useState({});
  const [thisAudios, setThisAudios] = useState([]);
  const [formdata, setFormdata] = useState(null);

  const [showList, setShowList] = useState(true);

  const checkUser = async () => {
    let userdata = await getData("user");
    let userphotos = await getUserMedias(userdata.id, userdata.skey, 3);

    setUserdata(userdata);
    setThisAudios(userphotos);
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
                    onPress={() => confirmDelete(index)}
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
        title="Audios"
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
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Selectlist list={thisAudios} />
      </View>
    </View>
  );
};

export default AddAudioScreen;

const styles = StyleSheet.create({});
