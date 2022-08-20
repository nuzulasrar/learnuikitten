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

const JoinUsTalentScreen = ({ navigation }) => {

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
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>First Name</Text>}
                        placeholder='First Name'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Last Name</Text>}
                        placeholder='Last Name'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Display Name</Text>}
                        placeholder='Display Name'
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
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Gender</Text>
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
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Age</Text>}
                        placeholder='Age'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <Input
                        value={""}
                        label={() => <Text style={{ color: "black", fontSize: 14 }}>Nationality</Text>}
                        placeholder='Nationality'
                        secureTextEntry={false}
                        style={[styles.input, { marginBottom: 20 }]}
                    />
                    <View style={{ alignSelf: "flex-start", width: "100%", marginBottom: 20 }}>
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Race/Ethnicity</Text>
                        <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                placeholder={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Malay', value: 1 },
                                    { label: 'Indian', value: 2 },
                                    { label: 'Chinese', value: 3 },
                                    { label: 'Others', value: 4 },
                                ]}
                            />
                        </View>
                    </View>
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
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Country</Text>
                        <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                placeholder={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: "Afghanistan", value: 1 }, { label: "Albania", value: 1 }, { label: "Algeria", value: 1 }, { label: "American Samoa", value: 1 }, { label: "Andorra", value: 1 }, { label: "Angola", value: 1 }, { label: "Anguilla", value: 1 }, { label: "Antarctica", value: 1 }, { label: "Antigua and Barbuda", value: 1 }, { label: "Argentina", value: 1 }, { label: "Armenia", value: 1 }, { label: "Aruba", value: 1 }, { label: "Australia", value: 1 }, { label: "Austria", value: 1 }, { label: "Azerbaijan", value: 1 }, { label: "Bahamas", value: 1 }, { label: "Bahrain", value: 1 }, { label: "Bangladesh", value: 1 }, { label: "Barbados", value: 1 }, { label: "Belarus", value: 1 }, { label: "Belgium", value: 1 }, { label: "Belize", value: 1 }, { label: "Benin", value: 1 }, { label: "Bermuda", value: 1 }, { label: "Bhutan", value: 1 }, { label: "Bolivia", value: 1 }, { label: "Bosnia and Herzegovina", value: 1 }, { label: "Botswana", value: 1 }, { label: "Brazil", value: 1 }, { label: "British Indian Ocean Territory", value: 1 }, { label: "British Virgin Islands", value: 1 }, { label: "Brunei", value: 1 }, { label: "Bulgaria", value: 1 }, { label: "Burkina Faso", value: 1 }, { label: "Burundi", value: 1 }, { label: "Cambodia", value: 1 }, { label: "Cameroon", value: 1 }, { label: "Canada", value: 1 }, { label: "Cape Verde", value: 1 }, { label: "Cayman Islands", value: 1 }, { label: "Central African Republic", value: 1 }, { label: "Chad", value: 1 }, { label: "Chile", value: 1 }, { label: "China", value: 1 }, { label: "Christmas Island", value: 1 }, { label: "Cocos Islands", value: 1 }, { label: "Colombia", value: 1 }, { label: "Comoros", value: 1 }, { label: "Cook Islands", value: 1 }, { label: "Costa Rica", value: 1 }, { label: "Croatia", value: 1 }, { label: "Cuba", value: 1 }, { label: "Curacao", value: 1 }, { label: "Cyprus", value: 1 }, { label: "Czech Republic", value: 1 }, { label: "Democratic Republic of the Congo", value: 1 }, { label: "Denmark", value: 1 }, { label: "Djibouti", value: 1 }, { label: "Dominica", value: 1 }, { label: "Dominican Republic", value: 1 }, { label: "East Timor", value: 1 }, { label: "Ecuador", value: 1 }, { label: "Egypt", value: 1 }, { label: "El Salvador", value: 1 }, { label: "Equatorial Guinea", value: 1 }, { label: "Eritrea", value: 1 }, { label: "Estonia", value: 1 }, { label: "Ethiopia", value: 1 }, { label: "Falkland Islands", value: 1 }, { label: "Faroe Islands", value: 1 }, { label: "Fiji", value: 1 }, { label: "Finland", value: 1 }, { label: "France", value: 1 }, { label: "French Polynesia", value: 1 }, { label: "Gabon", value: 1 }, { label: "Gambia", value: 1 }, { label: "Georgia", value: 1 }, { label: "Germany", value: 1 }, { label: "Ghana", value: 1 }, { label: "Gibraltar", value: 1 }, { label: "Greece", value: 1 }, { label: "Greenland", value: 1 }, { label: "Grenada", value: 1 }, { label: "Guam", value: 1 }, { label: "Guatemala", value: 1 }, { label: "Guernsey", value: 1 }, { label: "Guinea", value: 1 }, { label: "Guinea-Bissau", value: 1 }, { label: "Guyana", value: 1 }, { label: "Haiti", value: 1 }, { label: "Honduras", value: 1 }, { label: "Hong Kong", value: 1 }, { label: "Hungary", value: 1 }, { label: "Iceland", value: 1 }, { label: "India", value: 1 }, { label: "Indonesia", value: 1 }, { label: "Iran", value: 1 }, { label: "Iraq", value: 1 }, { label: "Ireland", value: 1 }, { label: "Isle of Man", value: 1 }, { label: "Israel", value: 1 }, { label: "Italy", value: 1 }, { label: "Ivory Coast", value: 1 }, { label: "Jamaica", value: 1 }, { label: "Japan", value: 1 }, { label: "Jersey", value: 1 }, { label: "Jordan", value: 1 }, { label: "Kazakhstan", value: 1 }, { label: "Kenya", value: 1 }, { label: "Kiribati", value: 1 }, { label: "Kosovo", value: 1 }, { label: "Kuwait", value: 1 }, { label: "Kyrgyzstan", value: 1 }, { label: "Laos", value: 1 }, { label: "Latvia", value: 1 }, { label: "Lebanon", value: 1 }, { label: "Lesotho", value: 1 }, { label: "Liberia", value: 1 }, { label: "Libya", value: 1 }, { label: "Liechtenstein", value: 1 }, { label: "Lithuania", value: 1 }, { label: "Luxembourg", value: 1 }, { label: "Macao", value: 1 }, { label: "Macedonia", value: 1 }, { label: "Madagascar", value: 1 }, { label: "Malawi", value: 1 }, { label: "Malaysia", value: 1 }, { label: "Maldives", value: 1 }, { label: "Mali", value: 1 }, { label: "Malta", value: 1 }, { label: "Marshall Islands", value: 1 }, { label: "Mauritania", value: 1 }, { label: "Mauritius", value: 1 }, { label: "Mayotte", value: 1 }, { label: "Mexico", value: 1 }, { label: "Micronesia", value: 1 }, { label: "Moldova", value: 1 }, { label: "Monaco", value: 1 }, { label: "Mongolia", value: 1 }, { label: "Montenegro", value: 1 }, { label: "Montserrat", value: 1 }, { label: "Morocco", value: 1 }, { label: "Mozambique", value: 1 }, { label: "Myanmar", value: 1 }, { label: "Namibia", value: 1 }, { label: "Nauru", value: 1 }, { label: "Nepal", value: 1 }, { label: "Netherlands", value: 1 }, { label: "Netherlands Antilles", value: 1 }, { label: "New Caledonia", value: 1 }, { label: "New Zealand", value: 1 }, { label: "Nicaragua", value: 1 }, { label: "Niger", value: 1 }, { label: "Nigeria", value: 1 }, { label: "Niue", value: 1 }, { label: "North Korea", value: 1 }, { label: "Northern Mariana Islands", value: 1 }, { label: "Norway", value: 1 }, { label: "Oman", value: 1 }, { label: "Pakistan", value: 1 }, { label: "Palau", value: 1 }, { label: "Palestine", value: 1 }, { label: "Panama", value: 1 }, { label: "Papua New Guinea", value: 1 }, { label: "Paraguay", value: 1 }, { label: "Peru", value: 1 }, { label: "Philippines", value: 1 }, { label: "Pitcairn", value: 1 }, { label: "Poland", value: 1 }, { label: "Portugal", value: 1 }, { label: "Puerto Rico", value: 1 }, { label: "Qatar", value: 1 }, { label: "Republic of the Congo", value: 1 }, { label: "Reunion", value: 1 }, { label: "Romania", value: 1 }, { label: "Russia", value: 1 }, { label: "Rwanda", value: 1 }, { label: "Saint Barthelemy", value: 1 }, { label: "Saint Helena", value: 1 }, { label: "Saint Kitts and Nevis", value: 1 }, { label: "Saint Lucia", value: 1 }, { label: "Saint Martin", value: 1 }, { label: "Saint Pierre and Miquelon", value: 1 }, { label: "Saint Vincent and the Grenadines", value: 1 }, { label: "Samoa", value: 1 }, { label: "San Marino", value: 1 }, { label: "Sao Tome and Principe", value: 1 }, { label: "Saudi Arabia", value: 1 }, { label: "Senegal", value: 1 }, { label: "Serbia", value: 1 }, { label: "Seychelles", value: 1 }, { label: "Sierra Leone", value: 1 }, { label: "Singapore", value: 1 }, { label: "Sint Maarten", value: 1 }, { label: "Slovakia", value: 1 }, { label: "Slovenia", value: 1 }, { label: "Solomon Islands", value: 1 }, { label: "Somalia", value: 1 }, { label: "South Africa", value: 1 }, { label: "South Korea", value: 1 }, { label: "South Sudan", value: 1 }, { label: "Spain", value: 1 }, { label: "Sri Lanka", value: 1 }, { label: "Sudan", value: 1 }, { label: "Suriname", value: 1 }, { label: "Svalbard and Jan Mayen", value: 1 }, { label: "Swaziland", value: 1 }, { label: "Sweden", value: 1 }, { label: "Switzerland", value: 1 }, { label: "Syria", value: 1 }, { label: "Taiwan", value: 1 }, { label: "Tajikistan", value: 1 }, { label: "Tanzania", value: 1 }, { label: "Thailand", value: 1 }, { label: "Togo", value: 1 }, { label: "Tokelau", value: 1 }, { label: "Tonga", value: 1 }, { label: "Trinidad and Tobago", value: 1 }, { label: "Tunisia", value: 1 }, { label: "Turkey", value: 1 }, { label: "Turkmenistan", value: 1 }, { label: "Turks and Caicos Islands", value: 1 }, { label: "Tuvalu", value: 1 }, { label: "U.S. Virgin Islands", value: 1 }, { label: "Uganda", value: 1 }, { label: "Ukraine", value: 1 }, { label: "United Arab Emirates", value: 1 }, { label: "United Kingdom", value: 1 }, { label: "United States", value: 1 }, { label: "Uruguay", value: 1 }, { label: "Uzbekistan", value: 1 }, { label: "Vanuatu", value: 1 }, { label: "Vatican", value: 1 }, { label: "Venezuela", value: 1 }, { label: "Vietnam", value: 1 }, { label: "Wallis and Futuna", value: 1 }, { label: "Western Sahara", value: 1 }, { label: "Yemen", value: 1 }, { label: "Zambia", value: 1 }, { label: "Zimbabwe", value: 1 },
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
                            onValueChange={setAgreementCheck}
                            color={agreementcheck ? theme['color-primary-500'] : undefined}
                        />
                        <Text style={{ fontSize: 13 }}>I agree to Terms and Condition</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-start", marginBottom: 5 }}>
                        <Checkbox
                            style={{ margin: 8, width: 15, height: 15 }}
                            value={agreementcheck}
                            onValueChange={setAgreementCheck}
                            color={agreementcheck ? theme['color-primary-500'] : undefined}
                        />
                        <Text style={{ fontSize: 13 }}>I am over 18 years old</Text>
                    </View>
                    <View style={{ marginVertical: 20, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("UploadProfile")}
                            style={{ marginTop: 10, backgroundColor: theme['color-primary-500'], width: 120, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default JoinUsTalentScreen

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