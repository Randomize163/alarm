import React from 'react';
import { Text, StyleSheet, Modal, View, Button } from 'react-native';
import { IAlarm } from '../interfaces/alarm';
interface IAlarmCreateProps {
    visible: boolean;
    onCancel: () => void;
    onCreate: (alarm: IAlarm) => void;
}

const itemsCount = 10;
const defaultValues = [] as any;
for (let i = 0; i < itemsCount; i++) {
    defaultValues.push({ value: i, label: `num${i}` });
}

const AlarmInput = (props: IAlarmCreateProps) => {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.alarmCreateContainer}>
                <View style={styles.topPart}>
                    <Text style={styles.title}>Create an alarm screen</Text>

                    <Button
                        title="Add"
                        onPress={() =>
                            props.onCreate({ name: 'a', time: new Date() })
                        }
                    />
                    <Button title="Cancel" onPress={props.onCancel} />
                </View>

                <View style={styles.bottomPart}>
                    <Text>asd</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    alarmCreateContainer: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    title: {
        color: '#fff',
    },
    topPart: {
        flex: 1,
    },
    bottomPart: {
        flex: 2,
    },
});

export default AlarmInput;
