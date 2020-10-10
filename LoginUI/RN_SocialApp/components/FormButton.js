import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimension";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: windowWidth - 0.1 * windowWidth,
    height: windowHeight / 15,
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#2e64e5",
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
    //   fontFamily: ' Lato-Regular',
  },
});
