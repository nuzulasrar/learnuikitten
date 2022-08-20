import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback } from 'react-native';
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
import Checkbox from 'expo-checkbox';
import RNPickerSelect from 'react-native-picker-select';
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

const EditProfileScreen = ({ navigation }) => {

    const [thissection, setThisSection] = useState(1);

    const [isChecked, setChecked] = useState(false);

    const posts = [
        { id: 1, title: 'Commercial Shooting' },
        { id: 2, title: 'Drama Acting' },
        { id: 3, title: 'Performing Art' },
        { id: 4, title: 'Cat Walk' },
        { id: 5, title: 'Singing' },
        { id: 6, title: 'Dancing' },
        { id: 7, title: 'Piano' },
        { id: 8, title: 'Presentation' },
        { id: 9, title: 'Yoga' },
        { id: 10, title: 'Martial Art' },
        { id: 11, title: 'Live Streaming' },
        { id: 12, title: 'Voice Over' },
    ];

    const [pickedSkills, setPickedSkills] = useState([])

    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Edit Profile" backbutton={1} navigation={navigation} />
            <View style={{ width: "100%", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "70%", flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity
                        onPress={() => setThisSection(1)}
                        style={{
                            backgroundColor: thissection == 1 ? theme['color-primary-500'] : "transparent",
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            borderRadius: 5,
                            borderColor: theme['color-primary-500'],
                            borderWidth: 1
                        }}
                    >
                        <Text style={{ color: thissection == 1 ? "white" : theme['color-primary-500'], fontSize: 16, fontWeight: "bold" }}>DETAILS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
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
                    </TouchableOpacity>
                </View>
                {thissection == 1 ?
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 0, marginTop: 16, width: "90%" }}
                    >
                        {posts.map((post) =>
                            <View key={post.id}>
                                <Text>{post.title}</Text>
                                <Text>{post.content}</Text>
                            </View>
                        )}
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 10 }}>Name</Text>
                        <Input
                            placeholder='Name'
                            width="70%"
                            style={styles.input}
                        />

                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 16 }}>Gender</Text>
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

                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 16 }}>Age</Text>
                        <Input
                            placeholder='Age'
                            width="70%"
                            style={styles.input}
                        />

                        <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 16 }}>
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Race</Text>
                                <View style={{ backgroundColor: "white", borderRadius: 5, marginRight: 10 }}>
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
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Nationality</Text>
                                <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                                    <RNPickerSelect
                                        style={pickerSelectStyles}
                                        placeholder={{}}
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: 'Malaysia', value: 1 },
                                            { label: 'Sri Lanka', value: 2 },
                                            { label: 'Japan', value: 3 },
                                            { label: 'Ecuador', value: 4 },
                                        ]}
                                    />
                                </View>
                            </View>
                        </View>

                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 16 }}>State</Text>
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
                        <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 16 }}>
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Height (cm)</Text>
                                <Input
                                    placeholder='Height'
                                    width="100%"
                                    style={[styles.input, { marginRight: 10 }]}
                                />
                            </View>
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Weight (kg)</Text>
                                <Input
                                    placeholder='Weight'
                                    width="100%"
                                    style={styles.input}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 16 }}>
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Shoulder (cm)</Text>
                                <Input
                                    placeholder='Shoulder'
                                    width="100%"
                                    style={[styles.input, { marginRight: 10 }]}
                                />
                            </View>
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Pant Length (cm)</Text>
                                <Input
                                    placeholder='Pant Length'
                                    width="100%"
                                    style={styles.input}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 16 }}>
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Clothing Size</Text>
                                <Input
                                    placeholder='Clothing Size'
                                    width="100%"
                                    style={[styles.input, { marginRight: 10 }]}
                                />
                            </View>
                            <View style={{ width: "50%" }}>
                                <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Shoe Size (Euro)</Text>
                                <Input
                                    placeholder='Shoe Size'
                                    width="100%"
                                    style={styles.input}
                                />
                            </View>
                        </View>

                        <Text style={{ marginTop: 16 }}>Skill</Text>
                        <View style={{ width: "80%", alignSelf: "center", justifyContent: "center", backgroundColor: "transparent" }}>
                            <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10, flex: 1 }}>
                                {posts.map((post) =>
                                    <View style={{ width: "50%", flexDirection: "row" }}>
                                        <Checkbox
                                            style={{ margin: 8, width: 20, height: 20 }}
                                            value={isChecked}
                                            onValueChange={setChecked}
                                            color={isChecked ? theme['color-primary-500'] : undefined}
                                        />
                                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 5 }}>{post.title}</Text>
                                    </View>
                                )}

                            </View>
                            <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10, flex: 1 }}>
                                <View style={{ width: "50%", flexDirection: "row" }}>
                                    <Checkbox
                                        style={{ margin: 8, width: 20, height: 20 }}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? theme['color-primary-500'] : undefined}
                                    />
                                    <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 5 }}>abc</Text>
                                </View>
                                <View style={{ width: "50%", flexDirection: "row" }}>
                                    <Checkbox
                                        style={{ margin: 8, width: 20, height: 20 }}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? theme['color-primary-500'] : undefined}
                                    />
                                    <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 5 }}>def</Text>
                                </View>
                                <View style={{ width: "50%", flexDirection: "row" }}>
                                    <Checkbox
                                        style={{ margin: 8, width: 20, height: 20 }}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? theme['color-primary-500'] : undefined}
                                    />
                                    <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 5 }}>def</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={{ marginTop: 10, backgroundColor: theme['color-primary-500'], width: 120, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>UPDATE</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 450 }}>

                        </View>
                    </ScrollView>
                    :
                    <View style={{ flex: 0, marginTop: 20, width: "90%" }}>
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2 }}>Phone Number</Text>
                        <Input
                            placeholder='Phone Number'
                            width="70%"
                            style={[styles.input, { marginRight: 10 }]}
                        />
                        <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 16 }}>Email</Text>
                        <Input
                            placeholder='Email'
                            width="70%"
                            style={[styles.input, { marginRight: 10 }]}
                        />
                        <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={{ marginTop: 10, backgroundColor: theme['color-primary-500'], width: 120, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>UPDATE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        </View >
    )
}

export default EditProfileScreen

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
        backgroundColor: "white"
    }
});

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