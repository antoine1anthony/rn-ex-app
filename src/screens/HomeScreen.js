import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const HomeScreen = props => {
  console.log(props.navigation.navigate);

  toCompDemo = () => {
    props.navigation.navigate("CompScreen")
  };

  toListDemo = () => {
    props.navigation.navigate("List")
  };

  toImageDemo = () => {
    props.navigation.navigate("Image")
  };

  toCounterDemo = () => {
    props.navigation.navigate("Counter")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi there!</Text>
      <View style={styles.buttonContainer}>
        <Button 
          onPress={this.toCompDemo}
          style={styles.button}
          title="Go to Components Demo" 
        />
        <Button 
          onPress={this.toListDemo}
          style={styles.button}
          title="Go to List Demo" 
        />
        <Button 
          onPress={this.toImageDemo}
          style={styles.button}
          title="Go to Image Demo" 
        />
        <Button 
          onPress={this.toCounterDemo}
          style={styles.button}
          title="Go to Counter Demo" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center"
  },
  buttonContainer:{
    flex: 1,
    justifyContent: "space-evenly"
  },
  text: {
    fontSize: 30
  },
  button: {
    fontSize: 15,
    textAlign: "center"
  }
});

export default HomeScreen;
