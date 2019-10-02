import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default CounterScreen = () => {
        const [counter, setCounter] = useState(0);

        increase = () => setCounter(counter + 1);

        decrease = () => setCounter(counter - 1);
    
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title="Increase" style={styles.button} onPress={this.increase} />
                    <Button title="Decrease" style={styles.button} onPress={this.decrease} />
                </View>
                <Text style={styles.text}> Current Count: {counter} </Text>
            </View>        
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    buttonContainer:{
        flex: 1,
        justifyContent: "space-around"
    },
    text: {
      fontSize: 30,
      marginBottom: 50
    },
    button: {
      fontSize: 15,
      textAlign: "center"
    }
})