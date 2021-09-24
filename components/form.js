import react, {UseState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function addEvent() {
    return(
        <TextInput
            style={styles.input}
            placeholder='Enter event Date'
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        fontSize: 500,
    },
});