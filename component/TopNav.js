import React, { useEffect } from 'react';
import { Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const EditIcon = (props) => (
    <Icon {...props} name='edit' />
);

const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' />
);

const InfoIcon = (props) => (
    <Icon {...props} name='info' />
);

const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const SettingIcon = (props) => (
    <Icon {...props} name='settings-2-outline' />
);

export const TopNav = (props) => {

    const {
        navigation,
        backbutton,
        rightaccessory,
    } = props;

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderRightActions1 = () => (
        <React.Fragment>
            <TopNavigationAction icon={EditIcon} />
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={InfoIcon} title='About' />
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' />
            </OverflowMenu>
        </React.Fragment>
    );

    const renderRightActions2 = () => (
        <React.Fragment>
            <TopNavigationAction icon={SettingIcon} onPress={() => navigation.navigate("Settings")} />
        </React.Fragment>
    );

    const renderBackAction = (props) => (
        <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    );

    return (
        <Layout style={styles.container} level='1'>
            <TopNavigation
                alignment='center'
                title={props.title}
                // subtitle='Subtitle'
                accessoryLeft={props.backbutton == 0 ? null : renderBackAction}
                accessoryRight={(props.rightaccessory == 0) ? null : (props.rightaccessory == 2) ? renderRightActions2 : null}
                style={{ marginTop: 40 }}
            />
        </Layout>
    );
};

export default TopNav

const styles = StyleSheet.create({
    container: {
        // minHeight: 128,
    },
});