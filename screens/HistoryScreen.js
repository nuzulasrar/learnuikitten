import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
      <StatusBarScreen />
      <TopNav title="Application History" backbutton={0} navigation={navigation} />
      <ScrollView style={{ flex: 1, flexDirection: "column", width: "100%", marginTop: 5, padding: 5, borderRadius: 10 }}>
        <View style={{ flex: 1, flexDirection: "column", width: "100%", marginTop: 0, padding: 5, borderRadius: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("JobDetails")}
            style={{ flex: 0, flexDirection: "row", backgroundColor: "white", width: "100%", padding: 5, borderRadius: 5, borderColor: theme['color-primary-300'], borderWidth: 0 }}>
            <View style={{ width: "70%" }}>
              <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
              <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "700" }}>Talent Book Casting</Text>
              <Text style={{ textAlign: "left", fontSize: 10 }}>{"\n"}Applied on 2 June 2022</Text>
            </View>
            <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ backgroundColor: theme['color-primary-500'], paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5 }} >
                <Text style={{ fontSize: 13, color: "white", fontWeight: "bold" }}>ACCEPTED</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("JobDetails")}
            style={{ flex: 0, flexDirection: "row", backgroundColor: "white", width: "100%", marginTop: 10, padding: 5, borderRadius: 5, borderColor: theme['color-primary-300'], borderWidth: 0 }}>
            <View style={{ width: "70%" }}>
              <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
              <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "700" }}>Talent Book Casting</Text>
              <Text style={{ textAlign: "left", fontSize: 12 }}>{"\n"}Applied on 2 June 2022</Text>
            </View>
            <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ backgroundColor: theme['color-primary-500'], paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5 }} >
                <Text style={{ fontSize: 13, color: "white", fontWeight: "bold" }}>COMPLETED</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("JobDetails")}
            style={{ flex: 0, flexDirection: "row", backgroundColor: "white", width: "100%", marginTop: 10, padding: 5, borderRadius: 5, borderColor: theme['color-primary-300'], borderWidth: 0 }}>
            <View style={{ width: "70%" }}>
              <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
              <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "700" }}>Talent Book Casting</Text>
              <Text style={{ textAlign: "left", fontSize: 10 }}>{"\n"}Applied on 2 June 2022</Text>
            </View>
            <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={{ backgroundColor: theme['color-primary-500'], paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5 }} >
                <Text style={{ fontSize: 13, color: "white", fontWeight: "bold" }}>COMPLETED</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})