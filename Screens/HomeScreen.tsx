import React, {useContext, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import SwimmerData from "../SwimmerData";
import Swimmer from "../Swimmer";
import { Button } from 'react-native-paper';
import useStyle from '../Stylesheet';

// @ts-ignore
const HomeScreen = ({ navigation }) => {

    const [numberOfSwimmers, setNumberOfSwimmers] = useState('Number of Participants')
    const myContext: any = useContext(SwimmerData)
    const {styles} = useStyle()

    const participants: number[] = [...Array(8)]

    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: 50}}>
            <Text style={{...styles.title, color: 'black'}}>Lap Timer</Text>
            <Picker
                style={{alignSelf: 'stretch', color:'black'}}
                dropdownIconColor='black'
                selectedValue={numberOfSwimmers}
                onValueChange={(itemValue: string, itemIndex: number) => {
                    if (itemIndex !== 0) setNumberOfSwimmers(itemValue)
                }}>
                <Picker.Item label='Number of Participants' />
                {participants.map((number, index) => <Picker.Item key={index} label={`${index+1}`} value={index+1} />)}
            </Picker>
            <Button
                mode='contained'
                uppercase={true}
                onPress={() => {
                    if (numberOfSwimmers !== 'Number of Participants') {
                        const swimmers: Swimmer[] = []
                        for (let i = 0; i < parseInt(numberOfSwimmers); i++) {
                            swimmers.push({name: `Participant ${i+1}`, laps: []})
                        }
                        myContext.setSwimmers(swimmers)
                        navigation.navigate('Stopwatch')
                    }
                    else Alert.alert('','Please enter the number of participants')
                }}>
                Next
            </Button>
        </View>
    )
}

export default HomeScreen;
