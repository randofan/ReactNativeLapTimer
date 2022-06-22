import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Box from './Box'
import { useStopwatch } from "react-use-precision-timer";
import SwimmerData from "../SwimmerData";
import Swimmer from "../Swimmer";
import ChangeFormat from "../ChangeFormat"
import useStyle from "../Stylesheet";
import { Button } from 'react-native-paper';

// @ts-ignore
const SwimmerScreen = ({ navigation }) => {

    const stopwatch = useStopwatch();
    const [renderTime, setRenderTime] = useState(new Date().getTime())

    const refreshRate: number = 10

    useEffect(() => {
        const timeout = setInterval(() => setRenderTime(renderTime + refreshRate), refreshRate)
        return () => {
            clearInterval(timeout)
        }
    })

    const myContext = useContext(SwimmerData)
    const [swimmers, setSwimmers] = useState<Swimmer[]>(myContext.swimmers)
    const [button, setButton] = useState('start')
    const {styles} = useStyle()

    return (
        <View style={[styles.main]}>
            <Text style={{fontSize: 45, color: 'black'}}>{ChangeFormat(stopwatch.getElapsedRunningTime())}</Text>
            <ScrollView style={{alignSelf: 'stretch', flex: 1}}>
                {swimmers.map((swimmer: Swimmer, index: number) => {
                    return <Box
                        key={`Swimmer${index}`}
                        startPressed={button !== 'start'}
                        swimmer={swimmer}
                        laneNumber={index+1}
                        onLapPress={() => {
                            if (button === 'stop') {
                                const newSwimmers: Swimmer[] = [...swimmers]
                                const newSwimmerLaps: [number, number][] = newSwimmers[index].laps
                                if (newSwimmerLaps.length === 0) {
                                    newSwimmerLaps.push([stopwatch.getElapsedRunningTime(), stopwatch.getElapsedRunningTime()])
                                }
                                else {
                                    newSwimmerLaps.push([stopwatch.getElapsedRunningTime() - newSwimmerLaps[newSwimmerLaps.length - 1][1], stopwatch.getElapsedRunningTime()])
                                }
                                setSwimmers(newSwimmers)
                            }
                        }}
                        onNameChange={(newName: string) => {
                            const newSwimmers: Swimmer[] = [...swimmers]
                            newSwimmers[index].name = newName
                            setSwimmers(newSwimmers)
                        }}/>
                })}
            </ScrollView>
            <Button
                mode='contained'
                uppercase={true}
                onPress={() => {
                    switch (button) {
                        case 'start': {
                            stopwatch.start()
                            setButton('stop')
                            break
                        }
                        case 'stop': {
                            stopwatch.pause()
                            setButton('next')
                            break
                        }
                        case 'next': {
                            myContext.setSwimmers(swimmers)
                            navigation.navigate('Results')
                        }
                    }
                }
            }>{button}</Button>
        </View>
    )
}

export default SwimmerScreen;
