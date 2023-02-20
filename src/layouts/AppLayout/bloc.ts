import { useRef, useCallback, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { searchVideos } from '@/services';

interface LinkOptions {
  id: string;
  to: string;
  label: string;
  filterType: string;
  action?(): void;
}

export const linkOptions: LinkOptions[] = [
  {
    id: uuid(),
    to: '/',
    label: 'Home',
    filterType: '',
  },
  {
    id: uuid(),
    to: '/videos',
    label: 'Videos',
    filterType: 'video',
  },
  {
    id: uuid(),
    to: '/channels',
    label: 'Channels',
    filterType: 'channel',
  },
];

export function useBloc() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchVideos = useCallback(async () => {
    if (inputRef?.current && inputRef?.current?.value) {
      try {
        setLoading(true);
        const result = await searchVideos(inputRef.current.value);

        console.log({ result });

        inputRef.current.value = '';
        inputRef.current.blur();
      } catch (error) {
        console.error({ error });
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return {
    loading,
    inputRef,
    handleSearchVideos,
  };
}
