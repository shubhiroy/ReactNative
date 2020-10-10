import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../shared/Header";
import React from "react";

const screens = {
  About: {
    screen: About,
    // navigationOptions: {
    //     headerTitle: () => <Header />,
    // },
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Abour Game Zone'/>,
        // headerStyle: {
        //     backgroundColor: '#ccc'
        // },
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#999",
      height: 60,
    },
  },
});

export default AboutStack;
