import React, { useState, useEffect, useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  Platform,
  Modal,
  Pressable,
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
import StatusBarScreen from "../component/StatusBarScreen";
import TopNav from "../component/TopNav";
import Checkbox from "expo-checkbox";
import RNPickerSelect from "react-native-picker-select";
import { CommonContext } from "../context/CommonContext";

library.add(fab, faStar);

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
  <TouchableWithoutFeedback>
    <Icon
      {...props}
      name="home-outline"
    />
  </TouchableWithoutFeedback>
);

const historyIcon = (props) => (
  <TouchableWithoutFeedback>
    <Icon
      {...props}
      name="calendar-outline"
    />
  </TouchableWithoutFeedback>
);

const savedIcon = (props) => (
  <TouchableWithoutFeedback>
    <Icon
      {...props}
      name="bookmark-outline"
    />
  </TouchableWithoutFeedback>
);

const chatIcon = (props) => (
  <TouchableWithoutFeedback>
    <Icon
      {...props}
      name="message-circle-outline"
    />
  </TouchableWithoutFeedback>
);

const profileIcon = (props) => (
  <TouchableWithoutFeedback>
    <Icon
      {...props}
      name="person-outline"
    />
  </TouchableWithoutFeedback>
);

const JoinUsTalentScreen = ({ navigation }) => {
  const {
    genderlist,
    getgenderlist,
    countrylist,
    getcountrylist,
    racelist,
    getracelist,
    statelist,
    getstatelist,
    register,
    modalVisible,
    setModalVisible,
    alertMessages,
    setAlertMessages,
    ModalWindow,
    doneRegister,
    disableSubmit,
  } = useContext(CommonContext);

  useEffect(() => {
    if (doneRegister) navigation.navigate("UploadProfile", { accounttype: 1 });
  }, [doneRegister]);

  const [agreementcheck, setAgreementCheck] = useState(false);
  const [agecheck, setAgeCheck] = useState(false);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    nationality: 0,
    race: 0,
    state: 0,
    country: 0,
    password: '',
    password2: '',
    termsC: false,
    ageC: false,
  })

  // const [values, setValues] = useState({
  //   firstName: "ahmad",
  //   lastName: "nuzul",
  //   displayName: "display",
  //   email: "nuzul@gmail.com",
  //   phone: "01121484808",
  //   gender: 5,
  //   age: "18",
  //   nationality: 2,
  //   race: 2,
  //   state: 2,
  //   country: 2,
  //   password: "abc123",
  //   password2: "abc123",
  //   termsC: true,
  //   ageC: true,
  // });

  const textHandler = (name, value) => {
    if (name == "phone" || name == "age") {
      let numberonly = value.replace(/[^0-9]/g, "");
      setValues({ ...values, [name]: numberonly });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (
      values.firstName == "" ||
      values.firstName == " " ||
      values.firstName == null ||
      values.lastName == "" ||
      values.lastName == " " ||
      values.lastName == null ||
      values.displayName == "" ||
      values.displayName == " " ||
      values.displayName == null ||
      values.email == "" ||
      values.email == " " ||
      values.email == null ||
      values.phone == "" ||
      values.phone == " " ||
      values.phone == null ||
      values.gender == "" ||
      values.gender == " " ||
      values.gender == null ||
      values.age == "" ||
      values.age == " " ||
      values.age == null ||
      values.nationality < 1 ||
      values.race < 1 ||
      values.state < 1 ||
      values.country < 1 ||
      values.password == "" ||
      values.password == " " ||
      values.password == null ||
      values.password2 == "" ||
      values.password2 == " " ||
      values.password2 == null ||
      values.termsC == false ||
      values.ageC == false
    ) {
      // alert("Please fill in all the details: \n\n"+JSON.stringify(values));
      alert("Please fill in all the details!");
    } else {
      if (values.password != values.password2) {
        // setModalVisible(true)
        alert("Please make sure both passwords are matched.");
      } else {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(values.email) === false) {
          // setModalVisible(true)
          alert(
            "Email format is incorrect. Please enter correct email format."
          );
          return false;
        } else {
          if (values.password.length < 4) {
            alert(
              "Please make sure password length are more than 4 characters."
            );
          } else {
            let data = {
              p1: values.firstName,
              p2: values.lastName,
              p3: values.displayName,
              p4: values.email,
              p5: values.phone,
              p6: values.gender,
              p7: values.age,
              p8: values.nationality,
              p9: values.race,
              p10: values.state,
              p11: values.country,
              p12: values.password,
              p13: 1,
            };
            register(data);
          }
        }
      }
    }
  };

  const pressOK = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    getgenderlist();
    getcountrylist();
    getracelist();
    getstatelist();
  }, []);

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
        title="Join Us"
        backbutton={1}
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={[
            styles.stretch,
            { width: 150, height: 150, marginVertical: 20 },
          ]}
          source={require("../assets/images/newlogo.png")}
        />
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ width: "0%" }}></View>
          <View style={{ width: "100%" }}>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 32,
                textAlign: "center",
                marginRight: 0,
                color: "black",
              }}
            >
              Let's Get Started
            </Text>
            <ModalWindow />
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
            value={values.firstName}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>First Name</Text>
            )}
            placeholder="First Name"
            secureTextEntry={false}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("firstName", text)}
          />
          <Input
            value={values.lastName}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>Last Name</Text>
            )}
            placeholder="Last Name"
            secureTextEntry={false}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("lastName", text)}
          />
          <Input
            value={values.displayName}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>Display Name</Text>
            )}
            placeholder="Display Name"
            secureTextEntry={false}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("displayName", text)}
          />
          <Input
            value={values.email}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>Email</Text>
            )}
            placeholder="Email"
            secureTextEntry={false}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("email", text)}
          />
          <Input
            value={values.phone}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>Phone Number</Text>
            )}
            placeholder="Phone Number"
            secureTextEntry={false}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("phone", text)}
            maxLength={13}
          />
          <View
            style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}
          >
            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
              Gender
            </Text>
            <View style={{ backgroundColor: "white", borderRadius: 5 }}>
              <RNPickerSelect
                value={values.gender}
                style={pickerSelectStyles}
                placeholder={{}}
                onValueChange={(value) => textHandler("gender", value)}
                items={genderlist}
              />
            </View>
          </View>

          <Input
            value={values.age}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>Age</Text>
            )}
            placeholder="Age"
            secureTextEntry={false}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("age", text)}
          // maxLength={2}
          />
          <View
            style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}
          >
            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
              Nationality
            </Text>
            <View style={{ backgroundColor: "white", borderRadius: 5 }}>
              <RNPickerSelect
                value={values.nationality}
                style={pickerSelectStyles}
                placeholder={{}}
                onValueChange={(value) => textHandler("nationality", value)}
                items={countrylist}
              />
            </View>
          </View>
          <View
            style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}
          >
            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
              Race/Ethnicity
            </Text>
            <View style={{ backgroundColor: "white", borderRadius: 5 }}>
              <RNPickerSelect
                value={values.race}
                style={pickerSelectStyles}
                placeholder={{}}
                onValueChange={(value) => textHandler("race", value)}
                items={racelist}
              />
              {/* <Text>{JSON.stringify(racelist)}</Text> */}
            </View>
          </View>
          <View
            style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}
          >
            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
              State
            </Text>
            <View style={{ backgroundColor: "white", borderRadius: 5 }}>
              <RNPickerSelect
                value={values.state}
                style={pickerSelectStyles}
                placeholder={{}}
                items={statelist}
                onValueChange={(value) => textHandler("state", value)}
              />
            </View>
          </View>
          <View
            style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}
          >
            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>
              Country
            </Text>
            <View style={{ backgroundColor: "white", borderRadius: 5 }}>
              <RNPickerSelect
                value={values.country}
                style={pickerSelectStyles}
                placeholder={{}}
                onValueChange={(value) => textHandler("country", value)}
                items={countrylist}
              />
            </View>
          </View>
          <Input
            value={values.password}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>Password</Text>
            )}
            placeholder="Password"
            secureTextEntry={true}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("password", text)}
          />
          <Input
            value={values.password2}
            label={() => (
              <Text style={{ color: "black", fontSize: 14 }}>
                Confirm Password
              </Text>
            )}
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={(text) => textHandler("password2", text)}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
              marginBottom: 0,
            }}
          >
            <Checkbox
              style={{ margin: 8, width: 15, height: 15 }}
              value={values.termsC}
              onValueChange={() => textHandler("termsC", !values.termsC)}
              color={agreementcheck ? theme["color-primary-500"] : undefined}
            />
            <Text style={{ fontSize: 13 }}>I agree to Terms and Condition</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
              marginBottom: 5,
            }}
          >
            <Checkbox
              style={{ margin: 8, width: 15, height: 15 }}
              value={values.ageC}
              onValueChange={() => textHandler("ageC", !values.ageC)}
              color={agecheck ? theme["color-primary-500"] : undefined}
            />
            <Text style={{ fontSize: 13 }}>I am over 18 years old</Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              // onPress={() => navigation.navigate("UploadProfile", { accounttype: 1 })}
              onPress={() => handleSubmit()}
              disabled={disableSubmit}
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
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ModalWindow />
      </ScrollView>
    </View>
  );
};

export default JoinUsTalentScreen;

const styles = StyleSheet.create({
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
