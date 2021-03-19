import React, { useState } from 'react';
import { Text, StyleSheet, Modal, View, Button } from 'react-native';
import { IAlarm } from '../interfaces/alarm';

interface IAlarmCreateProps {
    visible: boolean;
    onCancel: () => void;
    onCreate: (alarm: IAlarm) => void;
}

const AlarmInput = (props: IAlarmCreateProps) => {
    const [show, setShow] = useState(true);

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.alarmCreateContainer}>
                <Text>Create an alarm screen</Text>

                <Button
                    title="Add"
                    onPress={() =>
                        props.onCreate({ name: 'a', time: new Date() })
                    }
                />
                <Button title="Cancel" onPress={props.onCancel} />

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    alarmCreateContainer: {},
});

export default AlarmInput;
