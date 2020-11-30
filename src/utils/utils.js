//image base URL from API
export const getImgBaseUrl = () => "https://image.tmdb.org/t/p/original/";

//I've seen the API return movie names inconsistently based on these 3 properties, that's why I do a nullcheck and try next parameter if the previous failed
export const getMovieTitle = (movie) =>
  movie?.title || movie?.name || movie?.originalName;

//should the poster path be null or undefined, return a placeholder that will indicate the preview being unavailable
export const getPosterPath = (posterPath) => {
  return posterPath
    ? `${getImgBaseUrl()}${posterPath}`
    : "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";
};

//hardcoded mp4 video stream link
export const getVideoPathMp4 = () =>
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

//hardcoded hls video stream link
export const getVideoPathHls = () =>
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
