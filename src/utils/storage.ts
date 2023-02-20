import { EncryptStorage } from 'encrypt-storage';

const {
  VITE_APP_ENCRYPT_STORAGE_PREFIX = '@bycoders',
  VITE_APP_ENCRYPT_STORAGE_SECRET_KEY = '@secret-key',
} = import.meta.env;

export const encryptStorage = new EncryptStorage(
  VITE_APP_ENCRYPT_STORAGE_SECRET_KEY,
  {
    prefix: VITE_APP_ENCRYPT_STORAGE_PREFIX,
  },
);
