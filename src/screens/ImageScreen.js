import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default ImageScreen = () => {
    return(
        <View style={styles.container}>
            <ImageDetail title={"Forest"} image={require("../../assets/images/forest.jpg")} score={250}/>
            <ImageDetail title={"Beach"} image={require("../../assets/images/beach.jpg")} score={65}/>
            <ImageDetail title={"Mountain"} image={require("../../assets/images/mountain.jpg")} score={22}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})