import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

export interface IAlarmListEntryProps {
    name: string;
    time: Date;
    enabled: boolean;
}

export default function AlarmListEntry(props: IAlarmListEntryProps) {
    const [isEnabled, setIsEnabled] = useState(props.enabled);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={styles.item}>
            <Switch
                style={{ flex: 1 }}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={{ flex: 3, alignContent: 'center' }}>
                {props.name}
            </Text>
            <Text
                style={{
                    flex: 1,
                }}>{`${props.time.getHours()}:${props.time.getMinutes()}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        borderColor: '#000000',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
});
