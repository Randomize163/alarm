import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';

export interface IAlarmListEntryProps { 
    name: string, 
    time: Date,
    enabled: boolean,
}

export default function AlarmListEntry(props: IAlarmListEntryProps) {
    const [isEnabled, setIsEnabled] = useState(props.enabled);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={{flexDirection: "row"}}>
            <Switch style={{ flex: 1 }}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={{ flex: 2 }}>{props.name}</Text>
            <Text style={{ flex: 1 }}>{`${props.time.getHours()}:${props.time.getMinutes()}`}</Text>
        </View>
    )
}
