import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name = "Antoine";

    return(
        <View>
            <Text style={styles.firstText}>
                Getting started with React Native!
            </Text>
            <Text style={styles.secondText}>My name is {name}</Text>
        </View>    
    );
};

const styles = StyleSheet.create({
    firstText: {
        fontSize: 45
    },
    secondText: {
        fontSize: 20
    }
});

export default ComponentScreen;
