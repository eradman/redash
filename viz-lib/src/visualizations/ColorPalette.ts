import { values } from "lodash";

// The following colors will be used if you pick "Automatic" color
export const BaseColors = {
  Blue: "#4e79a7",
  Red: "#e15759",
  Green: "#59a14f",
  Purple: "#b07aa1",
  Cyan: "#76b7b2",
  Orange: "#f28e2b",
  Brown: "#9c755f",
  Pink: "#ff9da7",
  Gray: "#bab0ac",

  "Light Blue": "#648ebd", // based on Blue (+1)
  Lilac: "#c991b9", // based on Purple (+1)
  "Light Green": "#6bb35f", // based on Green (+1)
  "Dark Blue": "#396592", // based on Blue (-1)

  Black: "#000000",
};

// Additional colors for the user to choose from
export const AdditionalColors = {
  "Indian Red": "#b8303a", // based on Red (-1)
  "Green 2": "#3a8233", // based on Green (-1)
  "Green 3": "#257021", // based on Green (-2)
  "Dark Turquoise": "#5c9d98", // based on Cyan (-1)
  "Dark Violet": "#87547a", // based on Purple (-1)
  "Pink 2": "#cc6f7a", // based on Pink (-1)
};

export const ColorPaletteArray = values(BaseColors);

const ColorPalette = {
  ...BaseColors,
  ...AdditionalColors,
};

export default ColorPalette;
