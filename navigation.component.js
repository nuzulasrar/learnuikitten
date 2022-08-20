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
import GalleryCategoryScreen from './screens/GalleryCategoryScreen';
import GalleryModelScreen from './screens/GalleryModelScreen';
import JobBoardScreen from './screens/JobBoardScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';
import NotificationScreen from './screens/NotificationScreen';
import NewScreen from './screens/NewScreen';
import HistoryScreen from './screens/HistoryScreen';
import SavedJobScreen from './screens/SavedJobScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewHistoryScreen from './screens/ReviewHistoryScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import MembershipScreen from './screens/MembershipScreen';
import PaymentScreen from './screens/PaymentScreen';
import UploadPhotoPremiumScreen from './screens/UploadPhotoPremiumScreen';
import UploadDetailsScreen from './screens/UploadDetailsScreen';
import AddPhotosScreen from './screens/AddPhotosScreen';
import AddVideoScreen from './screens/AddVideoScreen';
import AddAudioScreen from './screens/AddAudioScreen';
import AddCompCardScreen from './screens/AddCompCardScreen';
import TermsAndConditionsScreen from './screens/TermsAndConditionsScreen';
import JoinUsTalentScreen from './screens/JoinUsTalentScreen';
import UploadProfileScreen from './screens/UploadProfileScreen';
import { CommonContext, CommonContextProvider } from './context/CommonContext';
import ChatMessageScreen from './screens/ChatMessageScreen';
import SubscriptionPlan from './screens/SubscriptionPlan';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons/faFileLines'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPlus, faCircleCheck, faCircleArrowRight, faCheckCircle, faHome, faFileLines, faBookmark, faMessage, faUser)

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
    // <TouchableWithoutFeedback>
    <Icon {...props} name='home-outline' />
    //</TouchableWithoutFeedback>
);

const historyIcon = (props) => (
    //<TouchableWithoutFeedback>
    <Icon {...props} name='calendar-outline' />
    //</TouchableWithoutFeedback>
);

const savedIcon = (props) => (
    //<TouchableWithoutFeedback>
    <Icon {...props} name='bookmark-outline' />
    //</TouchableWithoutFeedback>
);

const chatIcon = (props) => (
    //<TouchableWithoutFeedback>
    <Icon {...props} name='message-circle-outline' />
    //</TouchableWithoutFeedback>
);

const profileIcon = (props) => (
    //<TouchableWithoutFeedback>
    <Icon {...props} name='person-outline' />
    //</TouchableWithoutFeedback>
);

const renderCaption = () => {
    return (
        <View style={styles.captionContainer}>
            {AlertIcon(styles.captionIcon)}
            <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
        </View>
    )
}

const LoginScreen = (paramss) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(CommonContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
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
                        onPress={() => setIsLoggedIn(true)}
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
        </View>
    )
};

const JoinScreen = ({ route, navigation }) => {
    const { jointype } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            {jointype == 1 ? <ImageBackground
                source={require('./assets/images/loginbg/2.jpg')}
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
                        onPress={() => navigation.navigate("JoinTalent")}
                    >
                        JOIN
                    </Button>
                </View>
            </ImageBackground> : <></>}
        </View>
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

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Screen name='GalleryCategory' component={GalleryCategoryScreen} />
            <Screen name='GalleryModel' component={GalleryModelScreen} />
            <Screen name='JobBoard' component={JobBoardScreen} />
            <Screen name='JobDetails' component={JobDetailsScreen} />
            <Screen name='Notification' component={NotificationScreen} />
        </Stack.Group>
    </Stack.Navigator>
);

const HistoryStack = () => (
    <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ApplicationHistory' component={HistoryScreen} />
            <Stack.Screen name='JobDetails' component={JobDetailsScreen} />
        </Stack.Group>
    </Stack.Navigator>
);
const SavedJobStack = () => (
    <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SavedJob' component={SavedJobScreen} />
            <Stack.Screen name='JobDetails' component={JobDetailsScreen} />
        </Stack.Group>
    </Stack.Navigator>
);

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Screen name='Photos' component={AddPhotosScreen} />
            <Screen name='Videos' component={AddVideoScreen} />
            <Screen name='Audios' component={AddAudioScreen} />
            <Screen name='Comp Card' component={AddCompCardScreen} />
            <Screen name='EditProfile' component={EditProfileScreen} />
            <Screen name='Settings' component={SettingsScreen} />
            <Screen name='ReviewHistory' component={ReviewHistoryScreen} />
            <Screen name='Membership' component={MembershipScreen} />
            <Screen name='ContactUs' component={ContactUsScreen} />
            <Screen name='Terms' component={TermsAndConditionsScreen} />
            <Screen name='Payment' component={PaymentScreen} />
            <Screen name='UploadPhotoPremium' component={UploadPhotoPremiumScreen} />
            <Screen name='UploadDetails' component={UploadDetailsScreen} />
        </Stack.Group>
    </Stack.Navigator>
);

const ChatStack = () => (
    <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ChatScreen' component={ChatScreen} />
            <Screen name='ChatMessage' component={ChatMessageScreen} />
        </Stack.Group>
    </Stack.Navigator>
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
    const { isLoggedIn, setIsLoggedIn, bottomNavPosition, setBottomNavPosition } = useContext(CommonContext);
    return (
        <>
            {isLoggedIn ? <BottomNavigation
                appearance="noIndicator"
                style={{
                    position: "absolute", bottom: bottomNavPosition,
                    backgroundColor: theme['color-primary-500']
                }}
                selectedIndex={state.index}
                onSelect={index => navigation.navigate(state.routeNames[index])}
                tabBarOptions={{
                    activeTintColor: "white",
                    inactiveTintColor: "white",
                    keyboardHidesTabBar: true,
                    style: {
                        paddingTop: 10,
                        //backgroundColor: theme["color-primary-500"],
                        // height: Platform.OS === "ios" ? 79 : 60 + inset.bottom,
                        // paddingBottom: Platform.OS === "ios" ? inset.bottom : 10,
                    },
                }}
            >
                <BottomNavigationTab title={evaProps => <Text style={{ color: "white", fontSize: 12 }}>Home</Text>}
                    icon={evaProps => <FontAwesomeIcon icon={faHome} color={"white"} size={20} style={{ marginBottom: 5 }} />}
                />
                <BottomNavigationTab title={evaProps => <Text style={{ color: "white", fontSize: 12 }}>History</Text>}
                    icon={evaProps => <FontAwesomeIcon icon={faFileLines} color={"white"} size={20} style={{ marginBottom: 5 }} />}
                />
                <BottomNavigationTab title={evaProps => <Text style={{ color: "white", fontSize: 12 }}>Saved</Text>}
                    icon={evaProps => <FontAwesomeIcon icon={faBookmark} color={"white"} size={20} style={{ marginBottom: 5 }} />}
                />
                <BottomNavigationTab title={evaProps => <Text style={{ color: "white", fontSize: 12 }}>Chat</Text>}
                    icon={evaProps => <FontAwesomeIcon icon={faMessage} color={"white"} size={20} style={{ marginBottom: 5 }} />}
                />
                <BottomNavigationTab title={evaProps => <Text style={{ color: "white", fontSize: 12 }}>Profile</Text>}
                    icon={evaProps => <FontAwesomeIcon icon={faUser} color={"white"} size={20} style={{ marginBottom: 5 }} />}
                />
            </BottomNavigation > : <></>}
        </>
    )
};

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{

        tabBarActiveBackgroundColor: "#000"
    }}>
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Screen name='HomeStack' options={{ headerShown: false }} component={HomeStack} />
            <Screen name='HistoryStack' component={HistoryStack} />
            <Screen name='SavedJobStack' component={SavedJobStack} />
            <Screen name='Chat' component={ChatStack} />
            <Screen name='ProfileStack' component={ProfileStack} />
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
                        <Stack.Screen name="JoinTalent" component={JoinUsTalentScreen} />
                        <Stack.Screen name="UploadProfile" component={UploadProfileScreen} />
                        <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan} />
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