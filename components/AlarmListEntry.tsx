import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

export interface IAlarmListEntryProps {
    name: string;
    time: Date;
    enabled: boolean;
}

const AlarmListEntry = (props: IAlarmListEntryProps) => {
    const [isEnabled, setIsEnabled] = useState(props.enabled);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={styles.item}>
            <Text style={{ flex: 4, alignContent: 'center' }}>
                {props.name}
            </Text>
            <Text
                style={{
                    flex: 1,
                }}>
                {`${props.time.getHours()}:${props.time.getMinutes()}`}
            </Text>
            <Switch
                style={{ flex: 1 }}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default AlarmListEntry;