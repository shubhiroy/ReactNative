import { createText, createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    body: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "rgba(12, 13, 52, 0.05)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },

  breakpoints: {
    // phone: 0,
    // tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 70, // why fixed size is given to this? Doesn't it change according to the device dimensions
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "title",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "body",
    },
    button: {
      fontFamily: "SFProText-Regular",
      fontSize: 15,
      textAlign: "center",
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
