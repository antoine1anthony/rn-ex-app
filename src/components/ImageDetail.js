import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default ImageDetail = ({title, image, score}) => {
    whenTitle = () => title != "" ? title : "No Title";
    whenImage = () => image != "" ? image : require("../../assets/images/beach.jpg");
    whenScore = () => score != 0 ? score : "GOOSE EGG!"
    return(
        <View style={styles.container}>
        <Text style={styles.text}>{this.whenTitle()}</Text>
        <Text style={styles.text}>Image score - {this.whenScore()}</Text>
            <Image source={this.whenImage()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    text: {
        fontSize: 20
    }
})