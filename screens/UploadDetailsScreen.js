import React, { useState, useEffect, useContext } from 'react';
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
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import Checkbox from 'expo-checkbox';
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';
import { CheckBox } from '@ui-kitten/components';
import { CommonContext } from '../context/CommonContext';

const UploadDetailsScreen = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);

    const { isLoggedIn, setIsLoggedIn } = useContext(CommonContext);

    const posts = [
        { id: 1, title: 'Commercial Shooting', isChecked: false },
        { id: 2, title: 'Drama Acting', isChecked: false },
        { id: 3, title: 'Performing Art', isChecked: false },
        { id: 4, title: 'Cat Walk', isChecked: false },
        { id: 5, title: 'Singing', isChecked: false },
        { id: 6, title: 'Dancing', isChecked: false },
        { id: 7, title: 'Piano', isChecked: false },
        { id: 8, title: 'Presentation', isChecked: true },
        { id: 9, title: 'Yoga', isChecked: false },
        { id: 10, title: 'Martial Art', isChecked: false },
        { id: 11, title: 'Live Streaming', isChecked: false },
        { id: 12, title: 'Voice Over', isChecked: false },
    ];

    const [products, setProducts] = useState(posts);

    const handleChange = (id) => {
        let temp = products.map((product) => {
            if (id === product.id) {
                return { ...product, isChecked: !product.isChecked };
            }
            return product;
        });
        setProducts(temp);
    };

    let selected = products.filter((product) => product.isChecked);

    const handleSubmit = () => {
        if (isLoggedIn)
            navigation.navigate("Profile")
        else
            setIsLoggedIn(true)
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Upload Details" backbutton={1} navigation={navigation} />
            <ScrollView contentContainerStyle={{ flex: 0, flexDirection: "column", width: "100%", padding: 5, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <View style={{ justifyContent: "flex-start", alignItems: "flex-start", width: "100%", marginTop: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 14, marginLeft: "2.5%" }}>Please fill in your information</Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "95%", backgroundColor: "transparent", marginBottom: 16 }}>
                    <View style={{ width: "50%" }}>
                        <View style={{ marginBottom: 5, marginLeft: 5 }}>
                            <Text style={{ fontSize: 14 }}>Height (cm)</Text>
                        </View>
                        <View>
                            <Input
                                placeholder='Height'
                                width="70%"
                                style={[styles.input, { marginRight: 10 }]}
                            />
                        </View>
                    </View>
                    <View style={{ width: "50%" }}>
                        <View style={{ marginBottom: 5, marginLeft: 5 }}>
                            <Text style={{ fontSize: 14 }}>Weight (kg)</Text>
                        </View>
                        <View>
                            <Input
                                placeholder='Weight'
                                width="70%"
                                style={styles.input}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "95%", backgroundColor: "transparent", marginBottom: 16 }}>
                    <View style={{ width: "50%" }}>
                        <View style={{ marginBottom: 5, marginLeft: 5 }}>
                            <Text style={{ fontSize: 14 }}>Shoulder (cm)</Text>
                        </View>
                        <View>
                            <Input
                                placeholder='Shoulder'
                                width="70%"
                                style={[styles.input, { marginRight: 10 }]}
                            />
                        </View>
                    </View>
                    <View style={{ width: "50%" }}>
                        <View style={{ marginBottom: 5, marginLeft: 5 }}>
                            <Text style={{ fontSize: 14 }}>Pant Length (cm)</Text>
                        </View>
                        <View>
                            <Input
                                placeholder='Pant Length'
                                width="70%"
                                style={styles.input}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "95%", backgroundColor: "transparent", marginBottom: 16 }}>
                    <View style={{ width: "50%" }}>
                        <View style={{ marginBottom: 5, marginLeft: 5 }}>
                            <Text style={{ fontSize: 14 }}>Clothing Size</Text>
                        </View>
                        <View>
                            <Input
                                placeholder='Clothing Size'
                                width="70%"
                                style={[styles.input, { marginRight: 10 }]}
                            />
                        </View>
                    </View>
                    <View style={{ width: "50%" }}>
                        <View style={{ marginBottom: 5, marginLeft: 5 }}>
                            <Text style={{ fontSize: 14 }}>Shoe Size (Euro)</Text>
                        </View>
                        <View>
                            <Input
                                placeholder='Shoe Size'
                                width="70%"
                                style={styles.input}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: "95%" }}>
                    <Text style={{ marginVertical: 16, alignSelf: "flex-start" }}>Skill</Text>
                </View>
                <View style={{ width: "80%", alignSelf: "center", justifyContent: "center", backgroundColor: "transparent" }}>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10, flexWrap: "wrap" }}>
                        {products.map((post) =>
                            <View key={post.id} style={{ width: "50%", maxWidth: "50%", height: 70, flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center" }}>
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
                                    <Text style={{ fontSize: 14, marginLeft: 5, flexShrink: 1 }}>{post.title}</Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>

                <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={{ marginTop: 10, backgroundColor: theme['color-primary-500'], width: 120, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }}>

                </View>
            </ScrollView >
        </View >
    )
}

export default UploadDetailsScreen

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white"
    }
})