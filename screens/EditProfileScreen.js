import React, {
  useState,
  useEffect,
  createRef,
  useCallback,
  useContext,
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
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
// import Checkbox from 'expo-checkbox';
import RNPickerSelect from "react-native-picker-select";
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import { CheckBox } from "@ui-kitten/components";
import { CommonContext } from "../context/CommonContext";

const EditProfileScreen = ({ navigation }) => {
  const {
    genderlist,
    getgenderlist,
    countrylist,
    getcountrylist,
    racelist,
    getracelist,
    statelist,
    getstatelist,
    getData,
    user,
    memberSkills,
    updateprofile,
    ModalWindow,
  } = useContext(CommonContext);

  const [thissection, setThisSection] = useState(1);

  // const [isChecked, setChecked] = useState(false);

  // const posts = [
  //   { id: 1, title: "Commercial Shooting", isChecked: false },
  //   { id: 2, title: "Drama Acting", isChecked: false },
  //   { id: 3, title: "Performing Art", isChecked: false },
  //   { id: 4, title: "Cat Walk", isChecked: false },
  //   { id: 5, title: "Singing", isChecked: false },
  //   { id: 6, title: "Dancing", isChecked: false },
  //   { id: 7, title: "Piano", isChecked: false },
  //   { id: 8, title: "Presentation", isChecked: true },
  //   { id: 9, title: "Yoga", isChecked: false },
  //   { id: 10, title: "Martial Art", isChecked: false },
  //   { id: 11, title: "Live Streaming", isChecked: false },
  //   { id: 12, title: "Voice Over", isChecked: false },
  // ];

  const [products, setProducts] = useState(memberSkills);
  const [selected, setSelected] = useState([]);
  const [stringarray, setStringArray] = useState("");
  const [ok1, setOk1] = useState(false);

  // useEffect(() => {
  //   alert(JSON.stringify(memberSkills));
  // }, []);

  useEffect(() => {
    let stringarray2 = stringarray;
    Object.keys(selected).map((item) => {
      // setStringArray((stringarray2 += item.id));
      //console.log(item.id);
    });
    setStringArray(JSON.stringify(selected));
  }, [selected]);

  useEffect(() => {
    // someStr.replace(/['"]+/g, '')
  }, [ok1]);

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  useEffect(() => {
    let stringarray2 = stringarray;
    stringarray2 = stringarray2.replace(/['"]+/g, "");
    stringarray2 = stringarray2.replace(/\[|\]/g, "");
    setStringArray(stringarray2);
    changeSkills(stringarray2);
  }, [stringarray]);

  const changeSkills = (value) => {
    texthandler("skills", value);
  };

  useEffect(() => {
    setSelected(
      products.filter((product) => product.isChecked).map((result) => result.id)
    );
  }, [products]);

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    displayname: "",
    gender: 0,
    age: 0,
    race: 0,
    nationality: 0,
    address: "",
    state: 0,
    country: 0,
    height: 0.0,
    weight: 0.0,
    shoulder: 0.0,
    pant_length: 0.0,
    clothing_size: 0,
    shoe_size: 0.0,
    skills: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: "",
    phone: "",
    email: "",
  });

  const texthandler = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    // alert(values.skills);
    let userdata = await getData("user");
    // console.log(userdata.id);
    // console.log(userdata.skey);
    updateprofile(userdata.id, userdata.skey, values);
  };

  const checkUser = async () => {
    let userdata = await getData("user");
    let userskills = await getData("skills");

    setRealValues(userdata, userskills);
    console.log("arghh", userskills);

    setProducts(userskills);
  };

  const setRealValues = (value, value2) => {
    console.log(value);
    setValues({
      fname: value.fname,
      lname: value.lname,
      displayname: value.displayname,
      gender: Number(value.gender),
      age: value.age,
      race: Number(value.race),
      nationality: Number(value.nationality),
      address: value.address,
      state: Number(value.state),
      country: Number(value.country),
      height: value.height,
      weight: value.weight,
      shoulder: value.shoulder,
      pant_length: value.pant_length,
      clothing_size: value.clothing_size,
      shoe_size: value.shoe_size,
      skills: value.skills_string,
      twitter: value.twitter,
      instagram: value.instagram,
      facebook: value.facebook,
      youtube: value.youtube,
      phone: value.phone,
      email: value.email,
    });
  };

  useEffect(() => {
    getgenderlist();
    getcountrylist();
    getracelist();
    getstatelist();
    checkUser();
    // checkNum()
  }, []);

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
        title="Edit Profile"
        backbutton={1}
        navigation={navigation}
      />
      <View
        style={{
          width: "100%",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "70%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => setThisSection(1)}
            style={{
              backgroundColor:
                thissection == 1 ? theme["color-primary-500"] : "transparent",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 5,
              borderColor: theme["color-primary-500"],
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                color: thissection == 1 ? "white" : theme["color-primary-500"],
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              DETAILS
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
                        onPress={() => setThisSection(2)}
                        style={{
                            backgroundColor: thissection == 2 ? theme['color-primary-500'] : "transparent",
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            borderRadius: 5,
                            borderColor: theme['color-primary-500'],
                            borderWidth: 1
                        }}
                    >
                        <Text style={{ color: thissection == 2 ? "white" : theme['color-primary-500'], fontSize: 16, fontWeight: "bold" }}>CONTACT</Text>
                    </TouchableOpacity> */}
        </View>
        {thissection == 1 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 0, marginTop: 16, width: "90%" }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  First Name
                </Text>
                <Input
                  value={values.fname}
                  placeholder="Height"
                  width="100%"
                  style={[styles.input, { marginRight: 10 }]}
                  onChangeText={(text) => texthandler("height", text)}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Last Name
                </Text>
                <Input
                  value={values.lname}
                  placeholder="Weight"
                  width="100%"
                  style={styles.input}
                  onChangeText={(text) => texthandler("weight", text)}
                />
              </View>
            </View>

            <Text
              style={{
                fontSize: 14,
                marginLeft: 2,
                marginBottom: 2,
                marginTop: 16,
              }}
            >
              Display Name
            </Text>
            <Input
              value={values.displayname}
              placeholder="Age"
              width="70%"
              style={styles.input}
              onChangeText={(text) => texthandler("age", text)}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 2,
                marginBottom: 2,
                marginTop: 16,
              }}
            >
              Gender
            </Text>
            <View style={{ backgroundColor: "white", borderRadius: 5 }}>
              <RNPickerSelect
                value={values.gender}
                style={pickerSelectStyles}
                placeholder={{}}
                // onValueChange={(value) => console.log(value)}
                onValueChange={(text) => texthandler("gender", text)}
                items={genderlist}
              />
            </View>

            <Text
              style={{
                fontSize: 14,
                marginLeft: 2,
                marginBottom: 2,
                marginTop: 16,
              }}
            >
              Age
            </Text>
            <Input
              value={values.age}
              placeholder="Age"
              width="70%"
              style={styles.input}
              onChangeText={(text) => texthandler("age", text)}
            />

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Race
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                >
                  <RNPickerSelect
                    value={values.race}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    // onValueChange={(value) => console.log(typeof value)}
                    items={racelist}
                    onValueChange={(text) => texthandler("race", text)}
                  />
                </View>
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Nationality
                </Text>
                <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                  <RNPickerSelect
                    value={values.nationality}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    // onValueChange={(value) => console.log(value)}
                    items={countrylist}
                    onValueChange={(text) => texthandler("nationality", text)}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 2,
                marginBottom: 2,
                marginTop: 16,
              }}
            >
              Address
            </Text>
            <Input
              value={values.address}
              placeholder="Address"
              width="70%"
              style={styles.input}
              onChangeText={(text) => texthandler("address", text)}
            />
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  State
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                >
                  <RNPickerSelect
                    value={values.state}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    // onValueChange={(value) => console.log(value)}
                    items={statelist}
                    onValueChange={(text) => texthandler("state", text)}
                  />
                </View>
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Country
                </Text>
                <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                  <RNPickerSelect
                    value={values.country}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    // onValueChange={(value) => console.log(value)}
                    items={countrylist}
                    onValueChange={(text) => texthandler("country", text)}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Height (cm)
                </Text>
                <Input
                  value={values.height}
                  placeholder="Height"
                  width="100%"
                  style={[styles.input, { marginRight: 10 }]}
                  onChangeText={(text) => texthandler("height", text)}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Weight (kg)
                </Text>
                <Input
                  value={values.weight}
                  placeholder="Weight"
                  width="100%"
                  style={styles.input}
                  onChangeText={(text) => texthandler("weight", text)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Shoulder (cm)
                </Text>
                <Input
                  value={values.shoulder}
                  placeholder="Shoulder"
                  width="100%"
                  style={[styles.input, { marginRight: 10 }]}
                  onChangeText={(text) => texthandler("shoulder", text)}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Pant Length (cm)
                </Text>
                <Input
                  value={values.pant_length}
                  placeholder="Pant Length"
                  width="100%"
                  style={styles.input}
                  onChangeText={(text) => texthandler("pant_length", text)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
                  Clothing Size
                </Text>
                <Input
                  value={values.clothing_size}
                  placeholder="Clothing Size"
                  width="100%"
                  style={[styles.input, { marginRight: 10 }]}
                  onChangeText={(text) => texthandler("clothing_size", text)}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
                  Shoe Size (Euro)
                </Text>
                <Input
                  value={values.shoe_size}
                  placeholder="Shoe Size"
                  width="100%"
                  style={styles.input}
                  onChangeText={(text) => texthandler("shoe_size", text)}
                />
              </View>
            </View>
            <View>
              <Text>{JSON.stringify(selected)}</Text>
            </View>
            <Text style={{ marginTop: 16 }}>Skill {stringarray}</Text>
            {/* <Text style={{ marginTop: 16 }}>Skill</Text> */}
            <View
              style={{
                width: "80%",
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "transparent",
                  marginTop: 10,
                  flexWrap: "wrap",
                }}
              >
                {products.map((post) => (
                  <View
                    key={post.id}
                    style={{
                      width: "50%",
                      maxWidth: "50%",
                      height: 70,
                      flexDirection: "row",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <View style={{ flex: 1, backgroundColor: "transparent" }}>
                      <CheckBox
                        style={{ width: 20, height: 20, borderRadius: 5 }}
                        checked={post.isChecked}
                        onChange={() => {
                          handleChange(post.id);
                        }}
                      />
                    </View>
                    <View style={{ flex: 4, backgroundColor: "transparent" }}>
                      <Text
                        style={{ fontSize: 14, marginLeft: 5, flexShrink: 1 }}
                      >
                        {post.title}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <Text style={{ marginTop: 20, fontWeight: "bold" }}>
              Social Media Links
            </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Twitter
                </Text>
                <Input
                  value={values.twitter}
                  placeholder="Twitter"
                  width="100%"
                  style={[styles.input, { marginRight: 10 }]}
                  onChangeText={(text) => texthandler("twitter", text)}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Instagram
                </Text>
                <Input
                  value={values.instagram}
                  placeholder="Instagram"
                  width="100%"
                  style={styles.input}
                  onChangeText={(text) => texthandler("instagram", text)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Facebook
                </Text>
                <Input
                  value={values.facebook}
                  placeholder="Facebook"
                  width="100%"
                  style={[styles.input, { marginRight: 10 }]}
                  onChangeText={(text) => texthandler("facebook", text)}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Youtube
                </Text>
                <Input
                  value={values.youtube}
                  placeholder="Youtube"
                  width="100%"
                  style={styles.input}
                  onChangeText={(text) => texthandler("youtube", text)}
                />
              </View>
            </View>

            <Text style={{ marginTop: 40, fontWeight: "bold" }}>Contact</Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                marginTop: 16,
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Phone
                </Text>
                <Input
                  value={values.phone}
                  placeholder="Phone"
                  width="100%"
                  style={[styles.input, { marginRight: 10 }]}
                  onChangeText={(text) => texthandler("phone", text)}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginBottom: 2,
                    marginTop: 0,
                  }}
                >
                  Email
                </Text>
                <Input
                  disabled={true}
                  value={values.email}
                  placeholder="Email"
                  width="100%"
                  style={styles.input}
                  onChangeText={(text) => texthandler("email", text)}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={{
                  marginTop: 10,
                  backgroundColor: theme["color-primary-500"],
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 0,
                  paddingVertical: 7,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  UPDATE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 450 }}></View>
          </ScrollView>
        ) : (
          <View style={{ flex: 0, marginTop: 20, width: "90%" }}>
            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
              Phone Number
            </Text>
            <Input
              placeholder="Phone Number"
              width="70%"
              style={[styles.input, { marginRight: 10 }]}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 2,
                marginBottom: 2,
                marginTop: 16,
              }}
            >
              Email
            </Text>
            <Input
              placeholder="Email"
              width="70%"
              style={[styles.input, { marginRight: 10 }]}
            />
            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  backgroundColor: theme["color-primary-500"],
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 0,
                  paddingVertical: 7,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  UPDATE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <ModalWindow />
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: "white",
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
    color: "black",
    // backgroundColor: "white",
    height: 40,
    marginTop: -5,
    marginBottom: 7,
  },
});
