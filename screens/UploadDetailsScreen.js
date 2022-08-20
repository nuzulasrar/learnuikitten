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
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import Checkbox from 'expo-checkbox';
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

const UploadDetailsScreen = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);

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
                <View style={{ justifyContent: "space-between", flexDirection: "row", alignSelf: "flex-start", marginHorizontal: "2.5%" }}>
                    <View><Text style={{ marginTop: 16, textAlign: "left" }}>Skill</Text></View>
                </View >
                <View style={{ width: "80%", alignSelf: "center", justifyContent: "center", backgroundColor: "transparent" }}>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10, backgroundColor: "transparent" }}>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Singing</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Photograph</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10 }}>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Hand-Modeling</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Photogenic</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10 }}>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Piano</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Dancing</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10 }}>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Debate</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Flexible</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10 }}>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Communication</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Creative</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10 }}>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Modelling</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Martial Art</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "transparent", marginTop: 10 }}>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Drawing</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                style={{ margin: 8, width: 20, height: 20 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? theme['color-primary-500'] : undefined}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 2, marginBottom: 2, marginTop: 0 }}>Guitar</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ marginTop: 10, backgroundColor: theme['color-primary-500'], width: 120, justifyContent: "center", alignItems: "center", borderRadius: 0, paddingVertical: 7, paddingHorizontal: 15 }}>
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