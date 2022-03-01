import {atom} from 'recoil';

type ThemeState = 'light' | 'dark';

export const themeState = atom<ThemeState>({
  key: 'themeState',
  default: 'light',
});
