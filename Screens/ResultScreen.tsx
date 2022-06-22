import React, {useContext, useState} from 'react';
import {ScrollView, View} from 'react-native';
import SwimmerData from "../SwimmerData";
import Swimmer from "../Swimmer";
import useStyle from "../Stylesheet";
import {Avatar, Button, Card, DataTable, Title} from 'react-native-paper';
import ChangeFormat from '../ChangeFormat';

const Result = (props: any) => {

    const [showComponent, updateShowComponent] = useState<boolean>(false)

    return (
        <Card
            style={{flex: 1, flexDirection: "column", marginVertical: 3}}
            onPress={() => {updateShowComponent(!showComponent)}}>
            <Card.Title
                left={() => <Title>{props.laneNumber}</Title>}
                title={`${props.swimmer.name}`}
                rightStyle={{ marginRight: 20 }}
                right={(props) => <Avatar.Icon {...props} icon='unfold-more-horizontal' size={30}/>} />
            {showComponent &&
            (<Card.Content style={{flex: 1, flexDirection: "column"}}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>#</DataTable.Title>
                        <DataTable.Title>Lap Time</DataTable.Title>
                        <DataTable.Title>Overall Time</DataTable.Title>
                    </DataTable.Header>
                    {props.swimmer.laps.map((lap: [number, number], index: number) => {
                        return (
                            <DataTable.Row>
                                <DataTable.Cell>{index+1}</DataTable.Cell>
                                <DataTable.Cell>{ChangeFormat(lap[0])}</DataTable.Cell>
                                <DataTable.Cell>{ChangeFormat(lap[1])}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })}
                </DataTable>
            </Card.Content>)}
        </Card>
    );
}

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
