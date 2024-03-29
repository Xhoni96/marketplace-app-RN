import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import { AppText } from "./AppText";

export const Card = ({ title, subTitle, image, onPress }) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            {/* {console.log(image[0].split("file://")[1], "image")} */}
            <Image
                style={styles.image}
                source={{ uri: "http://localhost:3000/public/87864584_240816576943803_3498201023791497216_n.jpeg" }}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20,
        // paddingHorizontal: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
});
