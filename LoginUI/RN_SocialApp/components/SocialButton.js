import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowHeight } from "../utils/Dimension";
import { FontAwesome } from "@expo/vector-icons";

const SocialButton = ({
  buttonTitle,
  buttonType,
  color,
  backgroundColor,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      style={{ ...styles.buttonContainer, backgroundColor }}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={buttonType}
          size={22}
          color={color}
          style={styles.icon}
        />
      </View>
      <View style={styles.buttonTextWrapper}>
        <Text style={{ ...styles.buttonText, color }}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    padding: 10,
    flexDirection: "row",
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontWeight: "bold",
  },
  buttonTextWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    // fontFamily: "Lato-Regular",
  },
});
