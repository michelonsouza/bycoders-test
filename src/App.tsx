/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/material';

import youTubeIcon from './assets/you-tube-icon-dark.svg';
import { AppLayout } from './layouts';
import { Pagination, VideoResource } from './models';
import { getVideos } from './services';
import { light } from './theme';

function App(): JSX.Element {
  const [data, setData] = useState<Pagination<VideoResource> | null>(null);

  // useEffect(() => {
  //   getVideos().then(newData => setData(newData));
  // }, []);

  return (
    <ThemeProvider theme={light}>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
