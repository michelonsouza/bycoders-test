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
