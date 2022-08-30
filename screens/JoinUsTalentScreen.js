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
                                    { label: "Afghanistan", value: 1 },
                                    { label: "Albania", value: 2 },
                                    { label: "Algeria", value: 3 },
                                    { label: "American Samoa", value: 4 },
                                    { label: "Andorra", value: 5 },
                                    { label: "Angola", value: 6 },
                                    { label: "Anguilla", value: 7 },
                                    { label: "Antarctica", value: 8 },
                                    { label: "Antigua and Barbuda", value: 9 },
                                    { label: "Argentina", value: 10 },
                                    { label: "Armenia", value: 11 },
                                    { label: "Aruba", value: 12 },
                                    { label: "Australia", value: 13 },
                                    { label: "Austria", value: 14 },
                                    { label: "Azerbaijan", value: 15 },
                                    { label: "Bahamas", value: 16 },
                                    { label: "Bahrain", value: 17 },
                                    { label: "Bangladesh", value: 18 },
                                    { label: "Barbados", value: 19 },
                                    { label: "Belarus", value: 20 },
                                    { label: "Belgium", value: 21 },
                                    { label: "Belize", value: 22 },
                                    { label: "Benin", value: 23 },
                                    { label: "Bermuda", value: 24 },
                                    { label: "Bhutan", value: 25 },
                                    { label: "Bolivia", value: 26 },
                                    { label: "Bosnia and Herzegovina", value: 27 },
                                    { label: "Botswana", value: 28 },
                                    { label: "Brazil", value: 29 },
                                    { label: "British Indian Ocean Territory", value: 30 },
                                    { label: "British Virgin Islands", value: 31 },
                                    { label: "Brunei", value: 32 },
                                    { label: "Bulgaria", value: 34 },
                                    { label: "Burkina Faso", value: 35 },
                                    { label: "Burundi", value: 36 },
                                    { label: "Cambodia", value: 37 },
                                    { label: "Cameroon", value: 38 },
                                    { label: "Canada", value: 39 },
                                    { label: "Cape Verde", value: 40 },
                                    { label: "Cayman Islands", value: 41 },
                                    { label: "Central African Republic", value: 42 },
                                    { label: "Chad", value: 43 },
                                    { label: "Chile", value: 44 },
                                    { label: "China", value: 45 },
                                    { label: "Christmas Island", value: 46 },
                                    { label: "Cocos Islands", value: 47 },
                                    { label: "Colombia", value: 48 },
                                    { label: "Comoros", value: 49 },
                                    { label: "Cook Islands", value: 50 },
                                    { label: "Costa Rica", value: 51 },
                                    { label: "Croatia", value: 52 },
                                    { label: "Cuba", value: 53 },
                                    { label: "Curacao", value: 54 },
                                    { label: "Cyprus", value: 55 },
                                    { label: "Czech Republic", value: 56 },
                                    { label: "Democratic Republic of the Congo", value: 57 },
                                    { label: "Denmark", value: 58 },
                                    { label: "Djibouti", value: 59 },
                                    { label: "Dominica", value: 60 },
                                    { label: "Dominican Republic", value: 61 },
                                    { label: "East Timor", value: 62 },
                                    { label: "Ecuador", value: 63 },
                                    { label: "Egypt", value: 63 },
                                    { label: "El Salvador", value: 64 },
                                    { label: "Equatorial Guinea", value: 65 },
                                    { label: "Eritrea", value: 66 },
                                    { label: "Estonia", value: 67 },
                                    { label: "Ethiopia", value: 68 },
                                    { label: "Falkland Islands", value: 69 },
                                    { label: "Faroe Islands", value: 70 },
                                    { label: "Fiji", value: 71 },
                                    { label: "Finland", value: 72 },
                                    { label: "France", value: 73 },
                                    { label: "French Polynesia", value: 74 },
                                    { label: "Gabon", value: 75 },
                                    { label: "Gambia", value: 76 },
                                    { label: "Georgia", value: 77 },
                                    { label: "Germany", value: 78 },
                                    { label: "Ghana", value: 79 },
                                    { label: "Gibraltar", value: 80 },
                                    { label: "Greece", value: 81 },
                                    { label: "Greenland", value: 82 },
                                    { label: "Grenada", value: 83 },
                                    { label: "Guam", value: 84 },
                                    { label: "Guatemala", value: 85 },
                                    { label: "Guernsey", value: 86 },
                                    { label: "Guinea", value: 87 },
                                    { label: "Guinea-Bissau", value: 88 },
                                    { label: "Guyana", value: 89 },
                                    { label: "Haiti", value: 90 },
                                    { label: "Honduras", value: 91 },
                                    { label: "Hong Kong", value: 92 },
                                    { label: "Hungary", value: 93 },
                                    { label: "Iceland", value: 94 },
                                    { label: "India", value: 95 },
                                    { label: "Indonesia", value: 96 },
                                    { label: "Iran", value: 97 },
                                    { label: "Iraq", value: 98 },
                                    { label: "Ireland", value: 99 },
                                    { label: "Isle of Man", value: 100 },
                                    { label: "Israel", value: 101 },
                                    { label: "Italy", value: 102 },
                                    { label: "Ivory Coast", value: 103 },
                                    { label: "Jamaica", value: 104 },
                                    { label: "Japan", value: 105 },
                                    { label: "Jersey", value: 106 },
                                    { label: "Jordan", value: 107 },
                                    { label: "Kazakhstan", value: 108 },
                                    { label: "Kenya", value: 109 },
                                    { label: "Kiribati", value: 110 },
                                    { label: "Kosovo", value: 111 },
                                    { label: "Kuwait", value: 112 },
                                    { label: "Kyrgyzstan", value: 113 },
                                    { label: "Laos", value: 114 },
                                    { label: "Latvia", value: 115 },
                                    { label: "Lebanon", value: 116 },
                                    { label: "Lesotho", value: 117 },
                                    { label: "Liberia", value: 118 },
                                    { label: "Libya", value: 119 },
                                    { label: "Liechtenstein", value: 120 },
                                    { label: "Lithuania", value: 121 },
                                    { label: "Luxembourg", value: 122 },
                                    { label: "Macao", value: 123 },
                                    { label: "Macedonia", value: 124 },
                                    { label: "Madagascar", value: 125 },
                                    { label: "Malawi", value: 126 },
                                    { label: "Malaysia", value: 127 },
                                    { label: "Maldives", value: 128 },
                                    { label: "Mali", value: 129 },
                                    { label: "Malta", value: 130 },
                                    { label: "Marshall Islands", value: 131 },
                                    { label: "Mauritania", value: 132 },
                                    { label: "Mauritius", value: 133 },
                                    { label: "Mayotte", value: 134 },
                                    { label: "Mexico", value: 135 },
                                    { label: "Micronesia", value: 136 },
                                    { label: "Moldova", value: 137 },
                                    { label: "Monaco", value: 138 },
                                    { label: "Mongolia", value: 139 },
                                    { label: "Montenegro", value: 140 },
                                    { label: "Montserrat", value: 141 },
                                    { label: "Morocco", value: 142 },
                                    { label: "Mozambique", value: 143 },
                                    { label: "Myanmar", value: 144 },
                                    { label: "Namibia", value: 145 },
                                    { label: "Nauru", value: 146 },
                                    { label: "Nepal", value: 147 },
                                    { label: "Netherlands", value: 148 },
                                    { label: "Netherlands Antilles", value: 149 },
                                    { label: "New Caledonia", value: 150 },
                                    { label: "New Zealand", value: 151 },
                                    { label: "Nicaragua", value: 152 },
                                    { label: "Niger", value: 153 },
                                    { label: "Nigeria", value: 154 },
                                    { label: "Niue", value: 155 },
                                    { label: "North Korea", value: 156 },
                                    { label: "Northern Mariana Islands", value: 157 },
                                    { label: "Norway", value: 158 },
                                    { label: "Oman", value: 159 },
                                    { label: "Pakistan", value: 160 },
                                    { label: "Palau", value: 161 },
                                    { label: "Palestine", value: 162 },
                                    { label: "Panama", value: 163 },
                                    { label: "Papua New Guinea", value: 164 },
                                    { label: "Paraguay", value: 165 },
                                    { label: "Peru", value: 166 },
                                    { label: "Philippines", value: 167 },
                                    { label: "Pitcairn", value: 168 },
                                    { label: "Poland", value: 169 },
                                    { label: "Portugal", value: 170 },
                                    { label: "Puerto Rico", value: 171 },
                                    { label: "Qatar", value: 172 },
                                    { label: "Republic of the Congo", value: 173 },
                                    { label: "Reunion", value: 174 },
                                    { label: "Romania", value: 175 },
                                    { label: "Russia", value: 176 },
                                    { label: "Rwanda", value: 177 },
                                    { label: "Saint Barthelemy", value: 178 },
                                    { label: "Saint Helena", value: 179 },
                                    { label: "Saint Kitts and Nevis", value: 180 },
                                    { label: "Saint Lucia", value: 181 },
                                    { label: "Saint Martin", value: 182 },
                                    { label: "Saint Pierre and Miquelon", value: 183 },
                                    { label: "Saint Vincent and the Grenadines", value: 184 },
                                    { label: "Samoa", value: 185 },
                                    { label: "San Marino", value: 186 },
                                    { label: "Sao Tome and Principe", value: 187 },
                                    { label: "Saudi Arabia", value: 188 },
                                    { label: "Senegal", value: 189 },
                                    { label: "Serbia", value: 190 },
                                    { label: "Seychelles", value: 191 },
                                    { label: "Sierra Leone", value: 192 },
                                    { label: "Singapore", value: 193 },
                                    { label: "Sint Maarten", value: 194 },
                                    { label: "Slovakia", value: 195 },
                                    { label: "Slovenia", value: 196 },
                                    { label: "Solomon Islands", value: 197 },
                                    { label: "Somalia", value: 198 },
                                    { label: "South Africa", value: 199 },
                                    { label: "South Korea", value: 200 },
                                    { label: "South Sudan", value: 201 },
                                    { label: "Spain", value: 202 },
                                    { label: "Sri Lanka", value: 203 },
                                    { label: "Sudan", value: 204 },
                                    { label: "Suriname", value: 205 },
                                    { label: "Svalbard and Jan Mayen", value: 206 },
                                    { label: "Swaziland", value: 207 },
                                    { label: "Sweden", value: 208 },
                                    { label: "Switzerland", value: 209 },
                                    { label: "Syria", value: 210 },
                                    { label: "Taiwan", value: 211 },
                                    { label: "Tajikistan", value: 212 },
                                    { label: "Tanzania", value: 213 },
                                    { label: "Thailand", value: 214 },
                                    { label: "Togo", value: 215 },
                                    { label: "Tokelau", value: 216 },
                                    { label: "Tonga", value: 217 },
                                    { label: "Trinidad and Tobago", value: 218 },
                                    { label: "Tunisia", value: 219 },
                                    { label: "Turkey", value: 220 },
                                    { label: "Turkmenistan", value: 221 },
                                    { label: "Turks and Caicos Islands", value: 222 },
                                    { label: "Tuvalu", value: 223 },
                                    { label: "U.S. Virgin Islands", value: 224 },
                                    { label: "Uganda", value: 225 },
                                    { label: "Ukraine", value: 226 },
                                    { label: "United Arab Emirates", value: 227 },
                                    { label: "United Kingdom", value: 228 },
                                    { label: "United States", value: 229 },
                                    { label: "Uruguay", value: 230 },
                                    { label: "Uzbekistan", value: 231 },
                                    { label: "Vanuatu", value: 232 },
                                    { label: "Vatican", value: 323 },
                                    { label: "Venezuela", value: 234 },
                                    { label: "Vietnam", value: 235 },
                                    { label: "Wallis and Futuna", value: 236 },
                                    { label: "Western Sahara", value: 237 },
                                    { label: "Yemen", value: 238 },
                                    { label: "Zambia", value: 239 },
                                    { label: "Zimbabwe", value: 240 }
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
                            onPress={() => navigation.navigate("UploadProfile", { accounttype: 1 })}
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