interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Pagination<DataType> {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfo;
  items: DataType[];
}
