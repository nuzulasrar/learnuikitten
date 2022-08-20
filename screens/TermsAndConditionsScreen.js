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
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import Checkbox from 'expo-checkbox';
import RNPickerSelect from 'react-native-picker-select';
import StatusBarScreen from '../component/StatusBarScreen';
import TopNav from '../component/TopNav';

const TermsAndConditionsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme['color-primary-100'], width: "100%", marginTop: -50 }} >
            <StatusBarScreen />
            <TopNav title="Terms and Coditions" backbutton={1} navigation={navigation} />
            <ScrollView contentContainerStyle={{ width: "100%", marginTop: 20, justifyContent: "flex-start", paddingHorizontal: 10, alignItems: "flex-start" }}>
                <Text style={styles.paragraph}>
                    This page states the "Terms & Conditions of Use" under which customers and users (collectively "Users") may use NewLook mobile application and other mobile applications under the Company's control (whether partial or otherwise). Access to this mobile application and the use of information on it is subject to these Terms & Conditions of Use. You should carefully read these Terms & Conditions of Use. By proceeding further, you will be deemed to have accepted them.
                </Text>
                <Text style={styles.title}>
                    Definitions
                </Text>
                <Text style={styles.paragraph}>
                    In these Terms & Conditions of Use, the following terms shall have the meanings indicated:- "Members" means individuals or entities who use this mobile application or the services of the Company or who undertake any other business with the Company; " NewLook mobile application" means NewLook; "Privacy Policy" means our statement of practice as regards the privacy and security of your information when accessing and/or using this mobile application and any of the features hereon; "Service(s)" means the services to be provided by NewLook mobile application"Terms & Conditions of Use" and "Agreement" means the terms and conditions of Company as referred to and/or contained herein; "you" means any and all persons accessing or using this mobile application and/or availing of any information and/or services available on or via this mobile application; "we" and "our" and "us" means NewLook mobile application.
                </Text>
                <Text style={styles.title}>
                    Links to Other Sites
                </Text>
                <Text style={styles.paragraph}>
                    This mobile application contains hypertext links to mobile applications not maintained by the Company or any member of the NewLook mobile application. Neither NewLook mobile application or any member of the NewLook mobile application endorses or represents the reliability, accuracy, or quality of any information, goods, services, or products displayed or advertised on such other mobile applications. No member of the NewLook mobile application is or shall be (or be deemed to be) a party to any contract that you may or do enter into with the providers of such goods, services or products. You are reminded that different terms and conditions of use will apply to you as a user of such mobile applications. NewLook mobile application hereby disclaims any and all liability for the content of such mobile applications and any loss or damage of any nature suffered by you as a result either: (a) of accessing or using such mobile applications; or (b) availing of or acquiring any or all of the goods, services or products advertised or available on or via such mobile applications. The use by you of such mobile applications is at your sole risk.

                </Text>

                <Text style={styles.title}>
                    General
                </Text>
                <Text style={styles.paragraph}>
                    NewLook mobile application makes no claims that the Materials may be lawfully viewed or downloaded. Access to the Materials may not be legal by certain persons or in certain countries. If Users access this site, it does so at its own risk and is solely responsible for compliance with the laws of, or applicable to, its jurisdiction. Jurisdiction for any claims arising under the Agreement, including but not limited to these Terms & Conditions of Use, shall lie exclusively with the Malaysian Courts and the Terms & Conditions of Use shall be construed in accordance with the laws of Malaysia. If any provision of these Terms & Conditions of Use is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms & Conditions of Use, which shall remain in full force and effect. No waiver of any term of these Terms & Conditions of Use shall be deemed a further or continuing waiver of such term or any other term.</Text>
                <Text style={styles.title}>
                    Disclaimer as to Accuracy of Information
                </Text>
                <Text style={styles.paragraph}>
                    Care has been taken in the preparation of the information contained on this mobile application. However, we do not make any representations or warranties as to the accuracy of the information contained on this mobile application, especially any quotation or prices generated by the computer via the quotation tools. You can always confirm with our sales staff on the price before confirming your order. In the event of any discrepancy for any placed order, NewLook reserves the right not to honour the the affected order.
                </Text>

                <Text style={styles.title}>
                    Indemnify
                </Text>
                <Text style={styles.paragraph}>
                    The Customer undertakes and agrees to indemnify, save and hold harmless NewLook at all times against all actions, claims, proceedings, costs, losses and damages whatsoever including but not limited to libel, slander or infringement of copyright or other intellectual property rights or death, bodily injury or property damage howsoever arising which NewLook may sustain, incur or pay, or as the case may be, which may be brought or established against NewLook by any person including a company or corporation whomsoever arising out of or in connection with or by reason of the operation, provision or use of the Service and/or equipment provided by NewLook.
                </Text>

                <Text style={styles.title}>
                    Not an Offer or Solicitation
                </Text>
                <Text style={styles.paragraph}>
                    The information contained on this mobile application is not intended to nor does it constitute an offer or solicitation of services. Privacy Policy NewLook mobile application will use your personal data in the manner set out in its Privacy Policy. However, in the event of a conflict between the Privacy Policy and these Terms & Conditions of Use, the Terms and Conditions of Use shall prevail.
                </Text>

                <Text style={styles.title}>
                    Copying
                </Text>
                <Text style={styles.paragraph}>
                    The information contained on this mobile application may not be copied, transmitted, amended or reproduced in any form whatsoever without the prior written consent of NewLook mobile application.
                </Text>

                <Text style={styles.title}>
                    Amendments
                </Text>
                <Text style={styles.paragraph}>
                    The contents of this mobile application, including these Terms & Conditions of Use, any information contained on this mobile application and the NewLook mobile application's Privacy Policy are subject to change and to being updated without notice from time to time.
                </Text>
                <View style={{ height: 150 }}>

                </View>
            </ScrollView>
        </View >
    )
}

export default TermsAndConditionsScreen

const styles = StyleSheet.create({

    title: {
        fontSize: 14, fontWeight: "bold", textDecorationLine: "underline"
    },
    paragraph: {
        fontSize: 14, textAlign: "justify", marginBottom: 20, lineHeight: 20
    }
})