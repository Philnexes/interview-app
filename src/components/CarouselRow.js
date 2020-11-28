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
        infinite
        clickToChange
        centered
        breakpoints={{
          1000: {
            // these props will be applied when screen width is less than 1000px
            slidesPerPage: 2,
            clickToChange: false,
            centered: false,
            arrows: true,
            infinite: true,
          },
          500: {
            slidesPerPage: 1,
            slidesPerScroll: 1,
            clickToChange: false,
            centered: false,
            animationSpeed: 2000,
            infinite: true,
          },
        }}
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
