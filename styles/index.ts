export const breakpoints = {
  tablet: '768px',
  desktop: '1200px',
};

const heights = {
  header: '80px',
  footer: '80px',
};

const spaces = {
  'x-small': '4px',
  small: '8px',
  medium: '16px',
  large: '24px',
  'x-large': '32px',
  '2x-large': '64px',
};

const radiuses = {
  small: '4px',
  medium: '8px',
  large: '16px',
  'x-large': '20px',
  '2x-large': '24px',
};

const lineHeights = {
  'x-small': 1.25,
  small: 1.4,
  medium: 1.5,
  large: 1.6,
  'x-large': 1.7,
};

const fontWeights = {
  bold: 'bold',
  'semi-bold': 600,
  medium: 500,
  regular: 'normal',
};

const fontSizes = {
  '2x-small': '12px',
  'x-small': '13px',
  small: '14px',
  medium: '16px',
  large: '18px',
  'x-large': '24px',
};

const lightThemeColors = {
  primary: '#23272F', // gray-90
  secondary: '#404756', // gray-70
  link: '#087EA4', // blue-50
  syntax: '#EBECF0', // gray-10
  wash: '#FFFFFF',
  card: '#F6F7F9', // gray-05
  highlight: '#E6F7FF', // blue-10
  border: '#EBECF0', // gray-10
  'secondary-button': '#EBECF0', // gray-10
  'code-background': '#f5f5f7',
};

const darkThemeColors = {
  primary: '#F6F7F9', // gray-5
  secondary: '#EBECF0', // gray-10
  link: '#149ECA', // blue-40
  syntax: '#EBECF0', // gray-10
  wash: '#23272F', // gray-90
  card: '#343A46', // gray-80
  highlight: 'rgba(88,175,223,.1)',
  border: '#343A46', // gray-80
  'secondary-button': '#404756', // gray-70
  'code-background': '#2f333c',
};

const colors = {
  // Gray
  'gray-95': '#16181D',
  'gray-90': '#23272F',
  'gray-80': '#343A46',
  'gray-70': '#404756',
  'gray-60': '#4E5769',
  'gray-50': '#5E687E',
  'gray-40': '#78839B',
  'gray-30': '#99A1B3',
  'gray-20': '#BCC1CD',
  'gray-10': '#EBECF0',
  'gray-5': '#F6F7F9',

  // Blue
  'blue-60': '#045975',
  'blue-50': '#087EA4',
  'blue-40': '#149ECA', // Brand Blue
  'blue-30': '#58C4DC',
  'blue-20': '#ABE2ED',
  'blue-10': '#E6F7FF',
  'blue-5': '#E6F6FA',

  // Yellow
  'yellow-60': '#B65700',
  'yellow-50': '#C76A15',
  'yellow-40': '#DB7D27',
  'yellow-30': '#FABD62',
  'yellow-20': '#FCDEB0',
  'yellow-10': '#FDE7C7',
  'yellow-5': '#FEF5E7',

  // Purple
  'purple-60': '#2B3491',
  'purple-50': '#575FB7',
  'purple-40': '#6B75DB',
  'purple-30': '#8891EC',
  'purple-20': '#C3C8F5',
  'purple-10': '#E7E9FB',
  'purple-5': '#F3F4FD',

  // Green
  'green-60': '#2B6E62',
  'green-50': '#388F7F',
  'green-40': '#44AC99',
  'green-30': '#7FCCBF',
  'green-20': '#ABDED5',
  'green-10': '#E5F5F2',
  'green-5': '#F4FBF9',

  // RED
  'red-60': '#712D28',
  'red-50': '#A6423A',
  'red-40': '#C1554D',
  'red-30': '#D07D77',
  'red-20': '#E5B7B3',
  'red-10': '#F2DBD9',
  'red-5': '#FAF1F0',
};

const commonTheme = {
  breakpoints,
  heights,
  spaces,
  radiuses,
  lineHeights,
  fontWeights,
  fontSizes,
  colors,
};

export const theme = {
  ...commonTheme,
  colors: {...commonTheme.colors, ...lightThemeColors, ...darkThemeColors},
};

export const lightTheme = {
  ...commonTheme,
  colors: {...commonTheme.colors, ...lightThemeColors},
};

export const darkTheme = {
  ...commonTheme,
  colors: {...commonTheme.colors, ...darkThemeColors},
};
