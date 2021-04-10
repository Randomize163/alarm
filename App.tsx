import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from 'react-native';
import AlarmInput from './components/AlarmInput';
import AlarmListEntry from './components/AlarmListEntry';
import { IAlarm } from './interfaces/alarm';

const deafultAlarms: IAlarm[] = [
    { name: 'first', time: new Date() },
    { name: 'second', time: new Date() },
    { name: 'third', time: new Date() },
    { name: 'fourth', time: new Date() },
    { name: 'fifth', time: new Date() },
    { name: 'sixth', time: new Date() },
];

const App = () => {
    const [isAddingAlarm, setIsAddingAlarm] = useState(false);
    const [alarms, setAlarms] = useState(deafultAlarms);

    const handleAddAlarm = () => {
        setIsAddingAlarm(true);
    };

    const handleCancelAlarmCreation = () => {
        setIsAddingAlarm(false);
    };

    const handleAlarmCreate = (alarm: IAlarm) => {
        setAlarms(oldAlarms => [alarm, ...oldAlarms]);
        setIsAddingAlarm(false);
    };

    const renderItem = ({ item }: any) => {
        return (
            <AlarmListEntry name={item.name} time={item.time} enabled={false} />
        );
    };

    // TODO : look at this issue: https://github.com/facebook/react-native/issues/8655
    const renderSeparator = () => <View style={styles.itemSeperator} />;

    return (
        <SafeAreaView style={styles.container}>
            {/* should be on top of screen */}
            <View style={styles.alarmsContainer}>
                <Text style={styles.sectionTitle}>My alarms:</Text>

                <FlatList
                    data={alarms}
                    renderItem={renderItem}
                    keyExtractor={(_item, index) => index.toString()}
                    ListFooterComponent={<View style={styles.item} />}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>

            <View style={styles.addAlarmContainer}>
                <TouchableOpacity onPress={() => handleAddAlarm()}>
                    <View style={styles.createAlarmButtonWrapper}>
                        <Text style={styles.addAlarmButton}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <AlarmInput
                visible={isAddingAlarm}
                onCancel={handleCancelAlarmCreation}
                onCreate={handleAlarmCreate}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        height: Dimensions.get('window').height - 200,
        backgroundColor: 'white',
        // backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        height: 80,
        color: '#000000',
        backgroundColor: '#d81b60',
        padding: 20,
        fontSize: 18,
        alignContent: 'center',
    },
    alarmsContainer: {
        height: '100%',
    },
    addAlarmContainer: {
        position: 'absolute',
        bottom: 25,
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
        backgroundColor: 'seagreen',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addAlarmButton: {
        fontSize: 25,
        color: 'white',
    },
    item: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFFFFF',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemSeperator: {
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 1,
    },
});

export default App;
