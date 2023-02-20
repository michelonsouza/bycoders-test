import { useContext } from 'react';

import {
  UserSharedPreferencesContext,
  UserSharedPreferencesContextData,
} from '@/contexts';

export function useUserSharedPreferences(): UserSharedPreferencesContextData {
  const context = useContext(UserSharedPreferencesContext);

  if (!context) {
    throw new Error(
      'useUserSharedPreferences must be exists in de UserSharedPreferencesProvider',
    );
  }

  return context;
}
