import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { default as theme } from '../custom-theme.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", paddingHorizontal: 10 }} >
      <View style={{ flex: 0, flexDirection: "column", width: "100%", marginTop: -20, padding: 5, borderRadius: 10 }}>
        <View style={{ flex: 0, flexDirection: "row", backgroundColor: "white", width: "100%", marginVertical: 2.5, padding: 5, borderRadius: 5, borderColor: theme['color-primary-300'], borderWidth: 1 }}>
          <View style={{ width: "70%" }}>
            <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
            <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "700" }}>Talent Book Casting</Text>
            <Text style={{ textAlign: "left", fontSize: 10 }}>{"\n"}Applied on 2 June 2022</Text>
          </View>
          <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>
            <Button size="tiny">
              ACCEPTED
            </Button>
          </View>
        </View>
        <View style={{ flex: 0, flexDirection: "row", backgroundColor: "white", width: "100%", marginVertical: 2.5, padding: 5, borderRadius: 5, borderColor: theme['color-primary-300'], borderWidth: 1 }}>
          <View style={{ width: "70%" }}>
            <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
            <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "700" }}>Talent Book Casting</Text>
            <Text style={{ textAlign: "left", fontSize: 12 }}>{"\n"}Applied on 2 June 2022</Text>
          </View>
          <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>
            <Button size="tiny">
              COMPLETED
            </Button>
          </View>
        </View>
        <View style={{ flex: 0, flexDirection: "row", backgroundColor: "white", width: "100%", marginVertical: 2.5, padding: 5, borderRadius: 5, borderColor: theme['color-primary-300'], borderWidth: 1 }}>
          <View style={{ width: "70%" }}>
            <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "800" }}>Hand Model</Text>
            <Text style={{ textAlign: "left", fontSize: 14, fontWeight: "700" }}>Talent Book Casting</Text>
            <Text style={{ textAlign: "left", fontSize: 10 }}>{"\n"}Applied on 2 June 2022</Text>
          </View>
          <View style={{ width: "30%", justifyContent: "center", alignItems: "center" }}>
            <Button size="tiny">
              COMPLETED
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView >
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})