import React, {useState} from "react";
import ChangeFormat from '../ChangeFormat'
import {Avatar, Card, DataTable, Title} from "react-native-paper";

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

export default Result
