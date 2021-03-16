import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    TextInput,
    Keyboard,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import AlarmListEntry from './components/AlarmListEntry';

interface IAlarm {
    name: string;
    time: Date;
}

/* should save all the info about each alarm (date is changing every time) */

// const deafultAlarms = ['first', 'second', 'third'];
const deafultAlarms: IAlarm[] = [
    { name: 'first', time: new Date() },
    { name: 'second', time: new Date() },
];

export default function App() {
    const [alarm, setAlarm] = useState<IAlarm | null>(null);
    const [alarms, setAlarms] = useState(deafultAlarms);

    const handleAddAlarm = () => {
        Keyboard.dismiss();
        if (alarm) {
            setAlarms([...alarms, alarm]);
            setAlarm(null);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* should be on top of screen */}
            <Text style={styles.sectionTitle}>My alarms:</Text>
            {alarms.map((item, index) => {
                return (
                    <AlarmListEntry
                        key={index}
                        name={item.name}
                        time={item.time}
                        enabled={false}
                    />
                );
            })}

            {/* behivor should be 'padding' for ios + keyboard stil hiding stuff */}
            <KeyboardAvoidingView
                behavior="height"
                style={styles.createAlarmWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="create a new alarm"
                    value={alarm?.name}
                    onChangeText={text =>
                        setAlarm({ name: text, time: new Date() })
                    }
                />

                <TouchableOpacity onPress={() => handleAddAlarm()}>
                    <View style={styles.createAlarmButtonWrapper}>
                        <Text style={styles.addAlarmButton}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height - 200,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        color: '#000000',
        marginBottom: 20,
    },
    createAlarmWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        width: 250,
        height: 50,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    createAlarmButtonWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addAlarmButton: {},
});
