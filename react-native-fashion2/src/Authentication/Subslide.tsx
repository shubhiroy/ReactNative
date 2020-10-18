import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text} from "../components";

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last , onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
      <Text variant="body">{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{onPress}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  subtitle: {
    // fontSize: 24,
    // lineHeight: 30,
    // fontFamily: "SFProText-SemiBold",
    // color: "#0C0D34",
    marginBottom: 12,
  },
  description: {
    // fontFamily: "SFProText-Regular",
    // fontSize: 16,
    // lineHeight: 24,
    // color: "#0c0d34",
    textAlign: "center",
    marginBottom: 40,
  },
});

export default Subslide;
