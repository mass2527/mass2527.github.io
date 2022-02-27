import {theme as commonTheme, lightThemeColors, darkThemeColors} from 'styles';

const theme = {
  ...commonTheme,
  colors: {...commonTheme.colors, ...lightThemeColors, ...darkThemeColors},
};

type Theme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
