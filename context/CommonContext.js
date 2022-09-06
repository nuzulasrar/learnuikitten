import React, { useEffect, useState, createContext, useContext, createRef} from 'react';
import axios from 'axios';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback, Platform, Modal, Pressable } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, BottomNavigation, BottomNavigationTab, Layout, Text, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';
import Checkbox from 'expo-checkbox';
import RNPickerSelect from 'react-native-picker-select';
import {navigationRef} from '../navigation.component'

const CommonContext = createContext("")

const CommonContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accountType, setAccountType] = useState(0);
    const [bottomNavPosition, setBottomNavPosition] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);
    const [alertMessages, setAlertMessages] = useState("");
    const [okaction, setOkAction] = useState(0);

    const [doneRegister, setDoneRegister] = useState(false);

    /*
    okaction
    1- successfull registration, navigate to Upload image
    */

    const [genderlist, setGenderlist] = useState([]);
    const [countrylist, setCountryList] = useState([]);
    const [racelist, setRaceList] = useState([]);
    const [statelist, setStateList] = useState([]);

    const getgenderlist = () =>{
        axios.post('http://rubysb.com/talentbook/api.php', {
            req: 'a-getgenderlist',
          })
          .then(function (response) {
            setGenderlist(response.data.gender);
          })
          .catch(function (error) {
            alert(JSON.stringify(error));
          });
    }

    const getcountrylist = () =>{
        axios.post('http://rubysb.com/talentbook/api.php', {
            req: 'a-getcountrylist',
          })
          .then(function (response) {
            setCountryList(response.data.country);
            // console.log(response.data.country);
          })
          .catch(function (error) {
            alert(JSON.stringify(error));
          });
    }
    const getracelist = () =>{
        axios.post('http://rubysb.com/talentbook/api.php', {
            req: 'a-getracelist',
          })
          .then(function (response) {
            setRaceList(response.data.race);
            // console.log(response.data.country);
          })
          .catch(function (error) {
            alert(JSON.stringify(error));
          });
    }
    const getstatelist = () =>{
        axios.post('http://rubysb.com/talentbook/api.php', {
            req: 'a-getstatelist',
          })
          .then(function (response) {
            setStateList(response.data.state);
            // console.log(response.data.country);
          })
          .catch(function (error) {
            alert(JSON.stringify(error));
          });
    }

    const register = (data) =>{
      // alert(JSON.stringify(data.p1))
      
        axios.post('http://rubysb.com/talentbook/api.php', {
            req: 'a-register',
            p1: data.p1,
            p2: data.p2,
            p3: data.p3,
            p4: data.p4,
            p5: data.p5,
            p6: data.p6,
            p7: data.p7,
            p8: data.p8,
            p9: data.p9,
            p10: data.p10,
            p11: data.p11,
            p12: data.p12,
            p13: data.p13,
          })
          .then(function (response) {
            //alert(JSON.stringify(response.data));
            
            if(!response.data.status) // if resnpose.data.status == false
            {
              setModalVisible(!modalVisible)
              setAlertMessages(JSON.stringify(response.data.error));
            } else {
              setModalVisible(!modalVisible)
              setAlertMessages(JSON.stringify(response.data.success));
              setOkAction(1)
            }
          })
          .catch(function (error) {
            alert(JSON.stringify(error));
          });
    }

    const login = () =>{
        axios.post('http://rubysb.com/talentbook/api.php', {
            req: 'a-login',
          })
          .then(function (response) {
            alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            alert(JSON.stringify(error));
          });
    }

    const pressOK = (action) => {
        setModalVisible(!modalVisible)
        setAlertMessages("")
        if(action == 1)
        {
          setDoneRegister(true)
        }
    }

    function ModalWindow()
    {
      return (
        <View style={styles.centeredView}>
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image source={require("../assets/images/newlogo.png")} style={{ width: 80, height: 80, borderRadius: 20, alignSelf: "center", marginBottom: 15 }} />
                    <Text style={styles.modalText}>{alertMessages}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => pressOK(okaction)}>
                        <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        {/* <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
    </View>
      )
    }

    useEffect(() => {
        
    }, [])
    
    return (
        <CommonContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            accountType,
            setAccountType,
            bottomNavPosition,
            setBottomNavPosition,
            login,
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
            setDoneRegister
        }}>
            {children}
        </CommonContext.Provider>
    )
}

export { CommonContext, CommonContextProvider };

const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
  },
  modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  button: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 25,
      elevation: 2,
  },
  buttonOpen: {
      backgroundColor: '#F194FF',
  },
  buttonClose: {
      backgroundColor: theme['color-primary-500'],
      // backgroundColor: "black",
  },
  textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 17
  },
})