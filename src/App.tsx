import { useEffect, useState } from 'react'
import './App.css'

import {Pagination, VideoResource} from './models';
import {getVideos} from './services';

function App() {
  const [data, setData] = useState<Pagination<VideoResource> | null>(null);

  useEffect(() => {
    getVideos().then(newData => setData(newData));
  }, [])

  return (
    <div className="App">
      <div className="video-container">
        {data?.items?.map(video => (
          <div key={video.id} dangerouslySetInnerHTML={{__html: video.player.embedHtml}} />
        ))}
      </div>
    </div>
  )
}

export default App
