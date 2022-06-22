import {Appbar, Menu} from "react-native-paper";
import * as React from "react";
import {Platform} from 'react-native';
import {useState} from "react";

// @ts-ignore
const NavBar = ({ navigation, back, route }: any) => {
    const [visible, setVisible] = useState<boolean>(false);
    const screens: string[] = ['Privacy', 'Settings']

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title='Lap Timer' />
            <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <Appbar.Action
                        icon={Platform.OS == 'ios' ? 'dots-horizontal' :  'dots-vertical'}
                        color='white'
                        onPress={() => setVisible(true)} />}>

                <Menu.Item
                    title="Settings"
                    icon='cog'
                    onPress={() => {
                        if (screens.includes(route.name)) {
                            navigation.goBack()
                        }
                        setVisible(false)
                        navigation.navigate('Settings')}
                    } />
                <Menu.Item
                    title="Privacy Policy"
                    icon='book-account'
                    onPress={() => {
                        if (screens.includes(route.name)) {
                            navigation.goBack()
                        }
                        setVisible(false)
                        navigation.navigate('Privacy')}
                    }  />
            </Menu>

        </Appbar.Header>
    )
}

export default NavBar
