import "./styles/app.scss";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import DetailDialog from "./components/DetailDialog";
import requests from "./utils/requests";
import { useState } from "react";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  const closeDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="App">
      <Nav />
      <DetailDialog
        showDetail={showDetail}
        closeDetail={closeDetail}
        movieDetail={movieDetail}
      />
      <Carousel
        categoryTitle="Popular movies"
        apiUrl={requests.fetchTrendingMovies}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
      <Carousel
        categoryTitle="Popular series"
        apiUrl={requests.fetchTrendingSeries}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
      <Carousel
        categoryTitle="Family"
        apiUrl={requests.fetchDiscoverMoviesFamily}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
      <Carousel
        categoryTitle="Documentary"
        apiUrl={requests.fetchDiscoverMoviesDocumentary}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
    </div>
  );
}

export default App;
