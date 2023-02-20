import { baseApi } from './base';
import { Pagination, VideoResource } from '../models';

export async function getVideos(): Promise<Pagination<VideoResource>> {
  const { data: result } = await baseApi.get<Pagination<VideoResource>>(
    '/videos',
    {
      params: {
        part: 'id,snippet,contentDetails,player',
        chart: 'mostPopular',
      },
    },
  );

  return result;
}

export async function searchVideos(
  query: string,
): Promise<Pagination<VideoResource>> {
  const { data: result } = await baseApi.get<Pagination<VideoResource>>(
    '/search',
    {
      params: {
        part: 'snippet',
        order: 'viewCount',
        q: query,
      },
    },
  );

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, 3000);
  });
}
