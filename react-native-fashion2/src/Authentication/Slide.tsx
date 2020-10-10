import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

interface SlideProps {
  label: string;
  right?: boolean;
}

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={{ width }}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 70, // why fixed size is given to this? Doesn't it change according to the device dimensions
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    height: 100, // why fixed height is given to this? Doesn't it change according to the device dimensions
    justifyContent: "center",
  },
});

export default Slide;