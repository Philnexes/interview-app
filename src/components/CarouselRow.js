import { useEffect, useState } from "react";
import httpClient from "../utils/axios";
import Movie from "./Movie";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const CarouselRow = ({
  categoryTitle,
  apiUrl,
  setShowDetail,
  setMovieDetail,
}) => {
  const [movies, setMovies] = useState([]);

  //Fetch data whenever the apiUrl changes
  useEffect(() => {
    async function fetchData() {
      let request = await httpClient.get(apiUrl); //wait until you get data from the TMDB
      setMovies(request.data.results); //fill movies with the data
      return request;
    }
    fetchData();
  }, [apiUrl]);

  return (
    <div className="category">
      <h2>{categoryTitle}</h2>
      <Carousel
        autoplay
        arrows
        slidesPerPage={8}
        slidesPerScroll={2}
        offset={20}
        infinite
        draggable
        clickToChange
        centered
      >
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            setShowDetail={setShowDetail}
            setMovieDetail={setMovieDetail}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselRow;
