import { useEffect, useState } from "react";
import httpClient from "../utils/axios";
import Movie from "./Movie";
import ScrollContainter from "react-indiana-drag-scroll";

const Carousel = ({ categoryTitle, apiUrl, setShowDetail, setMovieDetail }) => {
  const [movies, setMovies] = useState([]);

  //Fetch data whenever the apiUrl changes
  //this useffect holds an asynchronous function to fetch the data from the API and store it in a movies state
  useEffect(() => {
    async function fetchData() {
      let request = await httpClient.get(apiUrl); //wait until you get data from the TMDB
      setMovies(request.data.results); //fill movies with the data
      return request;
    }
    fetchData(); //fetch the data
  }, [apiUrl]);

  //return a carousel container that holds every movie
  return (
    <div className="category">
      <h2 className="category-title">{categoryTitle}</h2>
      <ScrollContainter className="carousel">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            setShowDetail={setShowDetail}
            setMovieDetail={setMovieDetail}
          />
        ))}
      </ScrollContainter>
    </div>
  );
};

export default Carousel;
