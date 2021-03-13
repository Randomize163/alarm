import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import AlarmListEntry from './components/AlarmListEntry';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>My alarms:</Text>
      <AlarmListEntry name='first' time={new Date()} enabled={true} />
      {/* <FlatList data={[
          { name: 'first', time: new Date(), enabled: false },
          { name: 'second', time: new Date(), enabled: true },
          { name: 'third', time: new Date(), enabled: true },
        ]}
        renderItem={({ item }) => (<AlarmListEntry name='first' time={new Date()} enabled={true} />)}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </SafeAreaView>
  );
}

//<AlarmListEntry name={item.name} time={item.time} enabled={item.enabled} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
