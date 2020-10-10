import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail";
import Header from "../shared/Header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Game Zone'/>,
        // headerStyle: {
        //     backgroundColor: '#ccc'
        // },
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetail,
    navigationOptions: {
      title: "Review Details",
      // headerStyle: {
      //     backgroundColor: '#ccc'
      // },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#999",
      height: 60,
    },
  },
});

export default HomeStack;
