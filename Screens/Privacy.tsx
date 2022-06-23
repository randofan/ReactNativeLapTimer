import React from 'react';
import {View} from "react-native";
import {Paragraph, Title} from "react-native-paper";
import useStyle from "../Stylesheet";

// @ts-ignore
const Privacy = ({ navigation }) => {
    const {styles} = useStyle()
    return (
        <View style={[styles.hamburger]}>
            <Title style={[styles.subtitle]}>Privacy Policy</Title>
            <Paragraph>Your privacy is very important to us. No information is collected via this app whatsoever. All data is lost after each use of the stopwatch. </Paragraph>
        </View>
    )
}

export default Privacy
