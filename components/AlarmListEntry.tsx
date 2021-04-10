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
            <Text style={styles.alarmName}>{props.name}</Text>
            <Text style={styles.alarmSmallItem}>
                {`${props.time.getHours()}:${props.time.getMinutes()}`}
            </Text>
            <Switch
                style={styles.alarmSmallItem}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 80,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    alarmName: {
        flex: 4,
    },
    alarmSmallItem: {
        flex: 1,
    },
});

export default AlarmListEntry;
