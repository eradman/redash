import { values } from "lodash";

// Define color palettes
export const BaseColors = {
  Blue: "#356AFF",
  Red: "#E92828",
  Green: "#3BD973",
  Purple: "#604FE9",
  Cyan: "#50F5ED",
  Orange: "#FB8D3D",
  "Light Blue": "#799CFF",
  Lilac: "#B554FF",
  "Light Green": "#8CFFB4",
  Brown: "#A55F2A",
  Black: "#000000",
  Gray: "#494949",
  Pink: "#FF7DE3",
  "Dark Blue": "#002FB4",
};

// Additional colors for the user to choose from
export const AdditionalColors = {
  "Indian Red": "#981717",
  "Green 2": "#17BF51",
  "Green 3": "#049235",
  "Dark Turquoise": "#00B6EB",
  "Dark Violet": "#A58AFF",
  "Pink 2": "#C63FA9",
};

const Viridis = {
  1: '#440154',
  2: '#48186a',
  3: '#472d7b',
  4: '#424086',
  5: '#3b528b',
  6: '#33638d',
  7: '#2c728e',
  8: '#26828e',
  9: '#21918c',
  10: '#1fa088',
  11: '#28ae80',
  12: '#3fbc73',
  13: '#5ec962',
  14: '#84d44b',
  15: '#addc30',
  16: '#d8e219',
  17: '#fde725',
};

const Tableau = {
  1 : "#4e79a7",
  2 : "#f28e2c",
  3 : "#e15759",
  4 : "#76b7b2",
  5 : "#59a14f",
  6 : "#edc949",
  7 : "#af7aa1",
  8 : "#ff9da7",
  9 : "#9c755f",
  10 : "#bab0ab",
}

const D3Category10 = {
  1 : "#1f77b4",
  2 : "#ff7f0e",
  3 : "#2ca02c",
  4 : "#d62728",
  5 : "#9467bd",
  6 : "#8c564b",
  7 : "#e377c2",
  8 : "#7f7f7f",
  9 : "#bcbd22",
  10 : "#17becf",
}

const Redash20 = {
  1 : "#007F78",
  2 : "#008A7D",
  3 : "#009582",
  4 : "#14A18B",
  5 : "#35AD95",
  6 : "#59BA9F",
  7 : "#7BC5A7",
  8 : "#9CD0AF",
  9 : "#B9DBB8",
  10 : "#D1E5C1",
  11 : "#E3ECC9",
  12 : "#F1F3CE",
  13 : "#FDF8D0",
  14 : "#FCE8BE",
  15 : "#F6C297",
  16 : "#F1AE83",
  17 : "#EB996E",
  18 : "#E6845A",
  19 : "#E06F45",
  20 : "#D95A32",
  21 : "#CE4B2B",
  22 : "#C14026",
  23 : "#B43621",
  24 : "#A82C1D"
}

const Starfish = {
  1 : "#F18784",
  2 : "#FBBC71",
  3 : "#F7AA46",
  4 : "#AFC570",
  5 : "#4FC8A1",
  6 : "#6CD0FB",
  7 : "#8DA6D0",
  8 : "#5C76A6",
  9 : "#C27C9F",
  10 : "#F6A2CA",
  11 : "#D6A8BB",
  12 : "#CB5051"
}

let ColorPalette = {
  ...BaseColors,
  ...AdditionalColors,
};

export const ColorPaletteArray = values(ColorPalette);

export default ColorPalette;

export const AllColorPalettes = {
  "Redash" : ColorPalette,
  "Viridis" : Viridis,
  "Tableau 10" : Tableau,
  "D3 Category 10" : D3Category10,
  "Redash 2.0" : Redash20,
  "Starfish" : Starfish,
}

export const AllColorPaletteArrays = {
  "Redash" : ColorPaletteArray,
  "Viridis" : values(Viridis),
  "Tableau 10" : values(Tableau),
  "D3 Category 10" : values(D3Category10),
  "Redash 2.0" : values(Redash20),
  "Starfish" : values(Starfish),
};

export const ColorPaletteTypes = {
  "Redash" : 'discrete',
  "Viridis" : 'continuous',
  "Tableau 10" : 'discrete',
  "D3 Category 10" : 'discrete',
  "Redash 2.0" : 'continuous',
  "Starfish" : 'discrete',
}
