import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback, Platform } from 'react-native';
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

library.add(fab, faStar)

const renderIcon1 = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='email' />
    </TouchableWithoutFeedback>);

const renderIcon2 = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='lock' />
    </TouchableWithoutFeedback>
);

const homeIcon = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='home-outline' />
    </TouchableWithoutFeedback>
);

const historyIcon = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='calendar-outline' />
    </TouchableWithoutFeedback>
);

const savedIcon = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='bookmark-outline' />
    </TouchableWithoutFeedback>
);

const chatIcon = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='message-circle-outline' />
    </TouchableWithoutFeedback>
);

const profileIcon = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='person-outline' />
    </TouchableWithoutFeedback>
);

const JoinUsClientScreen = ({ navigation }) => {

    const [agreementcheck, setAgreementCheck] = useState(false);
    const [agecheck, setAgeCheck] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50, marginBottom: 0 }} >
            <StatusBarScreen />
            <TopNav title="Join Us" backbutton={1} navigation={navigation} />
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image
                    style={[styles.stretch, { width: 150, height: 150, marginVertical: 20 }]}
                    source={require('../assets/images/newlogo.png')}
                />
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <View style={{ width: "0%" }}>

                    </View>
                    <View style={{ width: "100%" }}>
                        <Text
                            style={{ fontWeight: "800", fontSize: 32, textAlign: "center", marginRight: 0, color: "black" }}
                        >
                            Let's Get Started
                        </Text>
                    </View>
                </View>

                <View style={{ width: "90%", padding: 10, backgroundColor: "rgba(237, 241, 240, 0.374)", borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Display Name</Text>}
                        placeholder='Display Name'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Company Name</Text>}
                        placeholder='Company Name'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Email</Text>}
                        placeholder='Email'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Phone Number</Text>}
                        placeholder='Phone Number'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <View style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}>
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Industry Type</Text>
                        <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                placeholder={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Male', value: 0 },
                                    { label: 'Female', value: 1 }
                                ]}
                            />
                        </View>
                    </View>
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Address</Text>}
                        placeholder='Address'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <View style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}>
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>State</Text>
                        <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                placeholder={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Johor', value: 1 },
                                    { label: 'kedah', value: 2 },
                                    { label: 'Kelantan', value: 3 },
                                    { label: 'Malacca', value: 4 },
                                    { label: 'Negeri Sembilan', value: 5 },
                                    { label: 'Pahang', value: 6 },
                                    { label: 'Penang', value: 7 },
                                    { label: 'Perak', value: 8 },
                                    { label: 'Perlis', value: 9 },
                                    { label: 'Sabah', value: 10 },
                                    { label: 'Sarawak', value: 11 },
                                    { label: 'Selangor', value: 12 },
                                    { label: 'Terengganu', value: 13 },
                                    { label: 'Kuala Lumpur', value: 14 },
                                    { label: 'Labuan', value: 15 },
                                    { label: 'Putrajaya', value: 16 },
                                ]}
                            />
                        </View>
                    </View>
                    <View style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}>
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Nationality</Text>
                        <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                placeholder={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: "Afghanistan", value: 1 },
                                    { label: "Malaysia", value: 2 },
                                ]}
                            />
                        </View>
                    </View>
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Password</Text>}
                        placeholder='Password'
                        secureTextEntry={true}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Confirm Password</Text>}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-start", marginBottom: 0 }}>
                        <Checkbox
                            style={{ margin: 8, width: 15, height: 15 }}
                            value={agreementcheck}
                            onValueChange={() => setAgreementCheck(!agreementcheck)}
                            color={agreementcheck ? theme['color-primary-500'] : undefined}
                        />
                        <Text style={{ fontSize: 13 }}>I agree to Terms and Condition</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-start", marginBottom: 5 }}>
                        <Checkbox
                            style={{ margin: 8, width: 15, height: 15 }}
                            value={agecheck}
                            onValueChange={() => setAgeCheck(!agecheck)}
                            color={agecheck ? theme['color-primary-500'] : undefined}
                        />
                        <Text style={{ fontSize: 13 }}>I am over 18 years old</Text>
                    </View>
                    <View style={{ marginVertical: 20, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("UploadProfile", { accounttype: 2 })}
                            style={{ marginTop: 10, backgroundColor: theme['color-primary-500'], width: 120, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default JoinUsClientScreen

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white"
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderWidth: 0,
        borderColor: 'gray',
        borderRadius: 4,
        margin: 2,
        color: 'black',
        backgroundColor: "white",
        paddingRight: 30, // to ensure the text is never behind the icon
        height: 40
    },

    inputAndroid: {
        fontSize: 10,
        padding: 0,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 50,
        color: 'black',
        // backgroundColor: "white",
        height: 40,
        marginTop: -5,
        marginBottom: 7,
    },

});