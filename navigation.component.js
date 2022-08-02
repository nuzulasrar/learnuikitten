import React, { useContext, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, BottomNavigation, BottomNavigationTab, Layout, Text, Button, TopNavigation, TopNavigationAction, Input } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { default as theme } from './custom-theme.json';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import SavedJobScreen from './screens/SavedJobScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import MembershipScreen from './screens/MembershipScreen';
import AddPhotosScreen from './screens/AddPhotosScreen';
import AddVideoScreen from './screens/AddVideoScreen';
import AddAudioScreen from './screens/AddAudioScreen';
import AddCompCardScreen from './screens/AddCompCardScreen';
import { CommonContext, CommonContextProvider } from './context/CommonContext';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const renderIcon1 = (props) => (
    <TouchableWithoutFeedback>
        <Icon {...props} name='email' />
    </TouchableWithoutFeedback>
);

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

const renderCaption = () => {
    return (
        <View style={styles.captionContainer}>
            {AlertIcon(styles.captionIcon)}
            <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
        </View>
    )
}

const LoginScreen = (paramss) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
        <ImageBackground
            source={require('./assets/images/background-image.jpg')}
            resizeMode="cover"
            style={[styles.bgimage, { justifyContent: 'center', alignItems: 'center' }]}
        >

            <View style={{ flexDirection: "row", marginBottom: 230 }}>
                <View style={{ width: "30%" }}>

                </View>
                <View style={{ width: "70%" }}>
                    <Text
                        style={{ fontWeight: "800", fontSize: 35, textAlign: "center", marginRight: 0, color: "white" }}
                    >
                        It's Your Time {"\n"} to SHINE
                    </Text>
                </View>
            </View>

            <View style={{ width: "90%", padding: 10, backgroundColor: "rgba(237, 241, 240, 0.374)", borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Input
                    value={""}
                    // label='Email'
                    placeholder='Email'
                    accessoryLeft={renderIcon1}
                    secureTextEntry={false}
                    style={styles.input}
                />
                <Input
                    value={""}
                    // label='Password'
                    placeholder='Password'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    status="primary"
                    onPress={() => navigation.navigate("Login")}
                    style={{ margin: 10, width: "95%" }}
                >
                    SIGN IN
                </Button>
                <Text style={{ color: "white" }}>
                    Not registered yet? <Text style={{ color: "maroon" }}>Create Account</Text>
                </Text>
                <Text style={{ color: "white" }}>
                    {"\n"}
                    Forgot Password
                </Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
);

const JoinScreen = ({ route, navigation }) => {
    const { jointype } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            {jointype == 1 ? <ImageBackground
                source={require('./assets/images/background-image.jpg')}
                resizeMode="cover"
                style={[styles.bgimage, { justifyContent: 'center', alignItems: 'center' }]}
            >

                <View style={{ flexDirection: "row", marginBottom: 50 }}>

                    <View style={{ width: "95%" }}>
                        <Text
                            style={{ fontWeight: "800", fontSize: 25, textAlign: "center", marginRight: 0, color: "white" }}
                        >
                            DIRECT COMMUNICATION
                        </Text>
                        <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
                            <Text
                                style={{ fontWeight: "800", fontSize: 20, textAlign: "center", color: "white", fontWeight: "300" }}
                            >
                                Can apply job directly without {"\n"}
                                middleman and get direct {"\n"} booking with client.
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: "5%" }}>

                    </View>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 100 }}>
                    <View style={{ width: "20%" }}>

                    </View>
                    <View style={{ width: "80%" }}>
                        <Text
                            style={{ fontWeight: "800", fontSize: 25, textAlign: "center", marginRight: 0, color: "white" }}
                        >
                            100% EXPOSURE
                        </Text>
                        <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
                            <Text
                                style={{ fontWeight: "800", fontSize: 20, textAlign: "center", color: "white", fontWeight: "300" }}
                            >
                                Get a complete set of profile {"\n"} and can be accessible by client.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 100 }}>

                    <View style={{ width: "80%" }}>
                        <Text
                            style={{ fontWeight: "800", fontSize: 25, textAlign: "center", marginRight: 0, color: "white" }}
                        >
                            LOW FEE
                        </Text>
                        <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
                            <Text
                                style={{ fontWeight: "800", fontSize: 20, textAlign: "center", color: "white", fontWeight: "300" }}
                            >
                                There will be no agency fees {"\n"} from us.
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>

                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Button
                        appearance="outline"
                        onPress={() => navigation.navigate("Register")}
                    >
                        JOIN
                    </Button>
                </View>
            </ImageBackground> : <></>}
        </SafeAreaView>
    )
};

const RegisterScreen = (paramss) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#E8F2F6" }}>
        <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', }}>
            <Image
                style={[styles.stretch, { borderRadius: 500, width: 200, height: 200, marginBottom: 0 }]}
                source={require('./assets/images/newlogo.png')}
            />
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <View style={{ width: "0%" }}>

                </View>
                <View style={{ width: "100%" }}>
                    <Text
                        style={{ fontWeight: "800", fontSize: 35, textAlign: "center", marginRight: 0, color: "black" }}
                    >
                        Let's Get Started
                    </Text>
                </View>
            </View>

            <View style={{ width: "90%", padding: 10, backgroundColor: "rgba(237, 241, 240, 0.374)", borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Input
                    value={""}
                    label='First Name'
                    placeholder='First Name'
                    accessoryLeft={renderIcon1}
                    secureTextEntry={false}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Input
                    value={""}
                    label='Last Name'
                    placeholder='Last Name'
                    accessoryLeft={renderIcon2}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    status="primary"
                    onPress={() => navigation.navigate("Login")}
                    style={{ margin: 10, width: "95%" }}
                >
                    SUBMIT
                </Button>
            </View>
        </ScrollView>
    </SafeAreaView>
);

const UsersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>USERS</Text>
    </Layout>
);

const OrdersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>ORDERS</Text>
    </Layout>
);

const BottomTabBar = ({ navigation, state }) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(CommonContext);
    return (
        <>
            {isLoggedIn ? <BottomNavigation
                appearance="noIndicator"
                style={{}}
                selectedIndex={state.index}
                onSelect={index => navigation.navigate(state.routeNames[index])}
            >
                <BottomNavigationTab title='HOME' icon={homeIcon} />
                <BottomNavigationTab title='HISTORY' icon={historyIcon} />
                <BottomNavigationTab title='SAVED' icon={savedIcon} />
                <BottomNavigationTab title='CHAT' icon={chatIcon} />
                <BottomNavigationTab title='PROFILE' icon={profileIcon} />
            </BottomNavigation > : <></>}
        </>
    )
};

function ProfileStack() {
    return (
        <Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Screen name='ProfileScreen' component={ProfileScreen} />
            </Stack.Group>
        </Navigator>
    );
}

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{

        tabBarActiveBackgroundColor: "#000"
    }}>
        <Stack.Group screenOptions={{ headerShown: true }}>
            <Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
            <Screen name='Application History' component={HistoryScreen} />
            <Screen name='Saved Job' component={SavedJobScreen} />
            <Screen name='Chat' component={ChatScreen} />
            <Screen name='Profile' component={ProfileScreen} />
            <Screen name='Membership' component={MembershipScreen} />
            <Screen name='Photos' component={AddPhotosScreen} />
            <Screen name='Videos' component={AddVideoScreen} />
            <Screen name='Audios' component={AddAudioScreen} />
            <Screen name='Comp Card' component={AddCompCardScreen} />
        </Stack.Group>
    </Navigator>
);

export const AppNavigator = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(CommonContext);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <NavigationContainer>

            {isLoggedIn ? (
                // Screens for logged in users
                <TabNavigator />
            ) : (
                // Auth screens
                <Stack.Navigator>
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Landing" component={LandingScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Join" component={JoinScreen} />
                        <Stack.Screen name="Register" options={{ headerShown: true, title: "Join Us" }} component={RegisterScreen} />
                    </Stack.Group>
                </Stack.Navigator>
            )}
            {/* Common modal screens */}
            {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Help" component={UsersScreen} />
                    <Stack.Screen name="Invite" component={OrdersScreen} />
                </Stack.Group> */}
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        margin: 5,
    },
    bgimage: {
        flex: 1,
        width: "100%",
        justifyContent: "center"
    },
});