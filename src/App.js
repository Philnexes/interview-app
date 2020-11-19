import "./styles/app.scss";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import DetailDialog from "./components/DetailDialog";
import requests from "./utils/requests";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    console.log("Nova hodnota " + showDetail);
    console.log(movieDetail);
  }, [showDetail, movieDetail]);

  return (
    <div className="App">
      <Nav />
      <Modal open={showDetail} onClose={() => setShowDetail(false)} center>
        <DetailDialog movieDetail={movieDetail} />
      </Modal>
      <Carousel
        categoryTitle="Popular movies"
        apiUrl={requests.fetchTrendingMovies}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
      {/* <Carousel
        categoryTitle="Popular series"
        apiUrl={requests.fetchTrendingSeries}
        setShowDetail={setShowDetail}
      />
      <Carousel
        categoryTitle="Family"
        apiUrl={requests.fetchDiscoverMoviesFamily}
        setShowDetail={setShowDetail}
      />
      <Carousel
        categoryTitle="Documentary"
        apiUrl={requests.fetchDiscoverMoviesDocumentary}
        setShowDetail={setShowDetail}
      /> */}
    </div>
  );
}

export default App;
