import React from 'react';
import ChangeFormat from '../ChangeFormat'
import {Button, Card, Title, TextInput} from "react-native-paper";

const Box = (props: any) => {

    return (
        <Card style={{ marginVertical: 3}}>
            {!props.startPressed &&
            <TextInput
                style={{ margin: 8, padding: 0 }}
                mode='outlined'
                label={`Participant ${props.laneNumber}`}
                placeholder='Participant Name'
                value={(props.swimmer.name.toString() == `Participant ${props.laneNumber}`) ? '' : props.swimmer.name}
                onChangeText={(newName: string) => props.onNameChange(newName)}/>
            }
            {props.startPressed &&
            <Card.Title
                title={props.swimmer.name}
                subtitle={(props.swimmer.laps.length !== 0) ? `Lap ${props.swimmer.laps.length}: ${ChangeFormat(props.swimmer.laps[props.swimmer.laps.length - 1][1])}` : ''}
                subtitleStyle={{fontSize: 15}}
                left={() => <Title>{props.laneNumber}</Title>}
                right={() => <Button
                    mode='contained'
                    uppercase={true}
                    onPress={() => props.onLapPress()}>LAP</Button>}
                rightStyle={{marginRight: 15}}/>
            }
        </Card>
    )
}

export default Box
