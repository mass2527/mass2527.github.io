export const breakpoints = {
  small: '480px',
  medium: '768px',
  large: '976px',
  'x-large': '1440px',
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
  'x-small': '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  'x-large': '24px',
};

const lightThemeColors = {
  primary: '#000000',
  secondary: '#444444',
  link: '#0070F3',
  background: '#f9fafb',
  border: '#eaeaea',
};

const darkThemeColors = {
  primary: '#ffffff',
  secondary: '#888888',
  link: '#3291FF',
  background: '#111111',
  border: '#222222',
};

const colors = {
  gray: {
    0: '#fff',
    100: '#fafafa',
    200: '#eaeaea',
    300: '#999999',
    400: '#888888',
    500: '#666666',
    600: '#444444',
    700: '#333333',
    800: '#222222',
    900: '#111111',
  },
  red: {
    lighter: '#F7D4D6',
    light: '#FF1A1A',
    default: '#E00',
    dark: '#C50000',
  },
  blue: {
    lighter: '#D3E5FF',
    light: '#3291FF',
    default: '#0070F3',
    dark: '#0761D1',
  },
  brown: {
    lighter: '#FFEFCF',
    light: '#F7B955',
    default: '#F5A623',
    dark: '#AB570A',
  },
  violet: {
    lighter: '#D8CCF1',
    light: '#8A63D2',
    default: '#7928CA',
    dark: '#4C2889',
  },
  cyan: {
    lighter: '#AAFFEC',
    light: '#79FFE1',
    default: '#50E3C2',
    dark: '#29BC9B',
  },
  highlight: {
    purple: '#F81CE5',
    magenta: '#EB367F',
    pink: '#FF0080',
    yellow: '#FFF500',
  },
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
