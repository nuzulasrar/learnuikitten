import React, { useState } from 'react';
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
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

const UploadPhotoPremiumScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Upload Photo" backbutton={1} navigation={navigation} />
            <ScrollView contentContainerStyle={{ flex: 0, flexDirection: "column", width: "100%", padding: 5, borderRadius: 10, justifyContent: "flex-start", alignItems: "center" }}>

                <View style={{ alignSelf: "flex-start", marginLeft: "2.5%", marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, textAlign: "left", alignSelf: "flex-start" }}>Please upload 5 photos (you can upload more later).</Text>
                </View>

                <View style={{ width: "95%", backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <Text style={{ fontSize: 10, color: "#DA291C" }}>* </Text>
                        <Text style={{ fontSize: 10, color: "#666161" }}>Supported file types (.jpg, .jpeg, .png)</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 10, color: "#DA291C" }}>* </Text>
                        <Text style={{ fontSize: 10, color: "#666161" }}>Max file size is 3mb</Text>
                    </View>
                    <TouchableOpacity
                        style={{ color: theme['color-primary-500'], backgroundColor: theme['color-primary-500'], justifyContent: "center", alignItems: "center", paddingHorizontal: 15, paddingVertical: 10, maxWidth: 125 }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>UPLOAD</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: "flex-start", marginLeft: "2.5%", marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, textAlign: "left", alignSelf: "flex-start" }}>Please upload 5 video (you can upload more later).</Text>
                </View>

                <View style={{ width: "95%", backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <Text style={{ fontSize: 10, color: "#DA291C" }}>* </Text>
                        <Text style={{ fontSize: 10, color: "#666161" }}>Supported file types (.jpg, .jpeg, .png)</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 10, color: "#DA291C" }}>* </Text>
                        <Text style={{ fontSize: 10, color: "#666161" }}>Max file size is 3mb</Text>
                    </View>
                    <TouchableOpacity
                        style={{ color: theme['color-primary-500'], backgroundColor: theme['color-primary-500'], justifyContent: "center", alignItems: "center", paddingHorizontal: 15, paddingVertical: 10, maxWidth: 125 }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>UPLOAD</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: "flex-start", marginLeft: "2.5%", marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, textAlign: "left", alignSelf: "flex-start" }}>Please upload 5 audio (you can upload more later).</Text>
                </View>

                <View style={{ width: "95%", backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#F0F0F0", width: 200, height: 21, justifyContent: "center" }}>
                            <Text style={{ fontSize: 13, color: "#ABABAB", marginLeft: 10 }}>No File Choosen</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#F0F0F0", paddingHorizontal: 15, paddingVertical: 5, borderColor: "#ABABAB", borderWidth: 1 }}>
                            <Text style={{ fontSize: 13 }}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <Text style={{ fontSize: 10, color: "#DA291C" }}>* </Text>
                        <Text style={{ fontSize: 10, color: "#666161" }}>Supported file types (.jpg, .jpeg, .png)</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 10, color: "#DA291C" }}>* </Text>
                        <Text style={{ fontSize: 10, color: "#666161" }}>Max file size is 3mb</Text>
                    </View>
                    <TouchableOpacity
                        style={{ color: theme['color-primary-500'], backgroundColor: theme['color-primary-500'], justifyContent: "center", alignItems: "center", paddingHorizontal: 15, paddingVertical: 10, maxWidth: 125 }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>UPLOAD</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("UploadDetails")}
                        style={{ color: theme['color-primary-500'], backgroundColor: theme['color-primary-500'], justifyContent: "center", alignItems: "center", paddingHorizontal: 15, paddingVertical: 10, width: 128 }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>NEXT</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }}>

                </View>
            </ScrollView>
        </View>
    )
}

export default UploadPhotoPremiumScreen

const styles = StyleSheet.create({

})
