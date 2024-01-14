import { create } from "@storybook/theming/create";
import logo from "../assets/origamilogo.png";

export default create({
  base: "light",
  brandTitle: "Storybook of Ikigai design system library",
  brandUrl: "https://ikigailabs.io",
  brandImage: logo,
  brandTarget: "_self",

  colorPrimary: "#000",
  colorSecondary: "#7822FF",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase:
    '"Inter", system-ui, -apple-system, Helevetica Neue, Arial, sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#A2A2AD",
  barSelectedColor: "#7822FF",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,
});
