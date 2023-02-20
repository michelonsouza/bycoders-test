import {
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
  useCallback,
} from 'react';

import { dark, light } from '@/theme';

import {
  ThemeType,
  ThemesByType,
  UserSharedPreferencesContextData,
} from './types';

export const UserSharedPreferencesContext = createContext(
  {} as UserSharedPreferencesContextData,
);

const USER_LOCALSTORAGE_PREFIX = '@user-shared-preferences';

export * from './types';

export function UserSharedPreferencesProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [themeType, setThemeType] = useState<ThemeType>(() => {
    const localTheme = localStorage.getItem(
      `${USER_LOCALSTORAGE_PREFIX}:theme`,
    ) as ThemeType | null;

    if (localTheme) {
      return localTheme;
    }

    return 'light';
  });

  const theme = useMemo(() => {
    const themes: ThemesByType = {
      dark,
      light,
    };
    return themes[themeType];
  }, [themeType]);

  const toggleTheme = useCallback(
    () => setThemeType(oldState => (oldState === 'dark' ? 'light' : 'dark')),
    [],
  );

  const memoValues: UserSharedPreferencesContextData = useMemo(
    () => ({
      theme,
      themeType,
      toggleTheme,
    }),
    [theme, themeType, toggleTheme],
  );

  return (
    <UserSharedPreferencesContext.Provider value={memoValues}>
      {children}
    </UserSharedPreferencesContext.Provider>
  );
}
