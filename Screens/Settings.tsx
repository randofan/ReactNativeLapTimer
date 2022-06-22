import React from 'react';
import {View} from "react-native";
import {Title} from "react-native-paper";
import useStyle from "../Stylesheet";

// @ts-ignore
const Settings = ({ navigation }) => {
    const {styles} = useStyle()
    return (
        <View style={[styles.hamburger]}>
            <Title>Settings</Title>
        </View>
    )
}

export default Settings
