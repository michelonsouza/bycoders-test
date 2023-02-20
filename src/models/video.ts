interface Regionrestriction {
  allowed: string[];
  blocked: string[];
}

interface ContentRating {
  mpaaRating: string;
  tvpgRating: string;
  bbfcRating: string;
  chvrsRating: string;
  eirinRating: string;
  cbfcRating: string;
  fmocRating: string;
  icaaRating: string;
  acbRating: string;
  oflcRating: string;
  fskRating: string;
  kmrbRating: string;
  djctqRating: string;
  russiaRating: string;
  rtcRating: string;
  ytRating: string;
}

interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: Regionrestriction;
  contentRating: ContentRating;
}

interface Status {
  uploadStatus: string;
  failureReason: string;
  rejectionReason: string;
  privacyStatus: string;
  license: string;
  embeddable: boolean;
  publicStatsViewable: boolean;
}

interface Statistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}

interface Thumbnails {
  [Key: string]: {
    url: string;
    width: number;
    height: number;
  }
}

interface Player {
  embedHtml: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
}

interface TopicDetails {
  topicIds: string[];
  relevantTopicIds: string;
}

interface GeoLocation {
  latitude: number;
  longitude: number;
  altitude: number;
}

interface RecordingDetails {
  locationDescription: string;
  location: GeoLocation;
  recordingDate: string;
}

interface VideoStream {
  widthPixels: number;
  heightPixels: number;
  frameRateFps: number;
  aspectRatio: number;
  codec: string;
  bitrateBps: number;
  rotation: string;
  vendor: string
}

interface AudioStream {
  channelCount: number;
  codec: string;
  bitrateBps: number;
  vendor: string
}

interface FileDetails {
  fileName: string;
  fileSize: number;
  fileType: string;
  container: string;
  videoStreams: VideoStream[];
  audioStreams: AudioStream[];
  durationMs: number;
  bitrateBps: number;
  recordingLocation: GeoLocation;
  creationTime: string
}

interface ProcessingProgress {
  partsTotal: number;
  partsProcessed: number;
  timeLeftMs: number;
}

interface ProcessingDetails {
  processingStatus: string;
  processingProgress: ProcessingProgress;
  processingFailureReason: string;
  fileDetailsAvailability: string;
  processingIssuesAvailability: string;
  tagSuggestionsAvailability: string;
  editorSuggestionsAvailability: string;
  thumbnailsAvailability: string;
}

interface TagSuggestions {
  tag: string;
  categoryRestricts:string[]
}

interface Sugestions {
  processingErrors: string[];
  processingWarnings: string[];
  processingHints: string[];
  tagSuggestions: TagSuggestions;
  editorSuggestions: string;
}

export interface VideoResource {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  status: Status;
  statistics: Statistics;
  player: Player;
  topicDetails: TopicDetails;
  recordingDetails: RecordingDetails;
  fileDetails: FileDetails;
  processingDetails: ProcessingDetails;
  suggestions: Sugestions;
}