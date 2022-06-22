import React, {useContext} from 'react';
import {ScrollView, View} from 'react-native';
import SwimmerData from "../SwimmerData";
import Swimmer from "../Swimmer";
import Result from "./Result";
import useStyle from "../Stylesheet";
import { Button } from 'react-native-paper';

// @ts-ignore
const ResultScreen = ({ navigation }) => {

    const myContext = useContext(SwimmerData)
    const swimmers: Swimmer[] = myContext.swimmers
    const {styles} = useStyle()

    return (
        <View style={[styles.main]}>
            <ScrollView style={{alignSelf: "stretch"}}>
                {swimmers.map((swimmer: Swimmer, index: number) => <Result key={`${swimmer.name} ${index}`} laneNumber={index+1} swimmer={swimmer} />)}
            </ScrollView>
            <Button
                mode='contained'
                uppercase={true}
                onPress={() => {
                    const empty: Swimmer[] = []
                    myContext.setSwimmers(empty)
                    navigation.popToTop()
            }}>Reset</Button>
        </View>
    )
}

export default ResultScreen;
