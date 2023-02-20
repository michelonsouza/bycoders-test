import { Theme } from '@mui/material';

export type ThemeType = 'light' | 'dark';

export type ThemesByType = Record<ThemeType, Theme>;

export interface UserSharedPreferencesContextData {
  themeType: ThemeType;
  theme: Theme;
  toggleTheme(): void;
}
