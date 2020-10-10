import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { interpolateColors, multiply } from "react-native-reanimated";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "TITLE 1",
    description: "Descriton 1",
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "TITLE 2",
    description: "Description 2",
  },
  {
    title: "Ecentric",
    color: "#FFE4D9",
    subtitle: "TITLE 3",
    description: "Description 3",
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subtitle: "TITLE 4",
    description: "Description 4",
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);

  const x = useValue(0);
  // TODO: scrollHandler useScrollHandler
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} label={title} right={index % 2 != 0} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            { transform: [{ translateX: multiply(x, -1) }] },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description, x }}
              onPress={() => {  
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index+1), animated: true });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
    width: width * slides.length,
  },
});

export default Onboarding;
