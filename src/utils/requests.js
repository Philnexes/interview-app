const API_KEY = `${process.env.REACT_APP_API_KEY}`;

// API base url: https://api.themoviedb.org/3

//running the TMDB API genre gave me results to get specific genres, in this case family {id: 10751} and documentary {id: 99}

//Links to call API with specific data for the row components in the app
const requests = {
  fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}`,
  fetchTrendingSeries: `/trending/tv/day?api_key=${API_KEY}`,
  fetchDiscoverMoviesFamily: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  fetchDiscoverMoviesDocumentary: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default requests;
