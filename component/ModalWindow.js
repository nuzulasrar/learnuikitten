import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback, Platform, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
import { CommonContext } from '../context/CommonContext';

const ModalWindow = () => {

    const {
        modalVisible, 
        setModalVisible, 
        alertMessages, 
        setAlertMessages
    } = useContext(CommonContext)

    const pressOK = () => {
        setModalVisible(!modalVisible)
        setAlertMessages("")
    }

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
                        onPress={() => pressOK()}>
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

export default ModalWindow

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