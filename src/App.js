import "./styles/app.scss";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import DetailDialog from "./components/DetailDialog";
import requests from "./utils/requests";
import { useEffect, useState } from "react";

function App() {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    console.log("Nova hodnota " + showDetail);
  }, [showDetail]);

  return (
    <div className="App">
      <Nav />
      <DetailDialog showDetail={showDetail} setShowDetail={setShowDetail} />
      <Carousel
        categoryTitle="Popular movies"
        apiUrl={requests.fetchTrendingMovies}
        setShowDetail={setShowDetail}
      />
      {/* <Carousel
        categoryTitle="Popular series"
        apiUrl={requests.fetchTrendingSeries}
      />
      <Carousel
        categoryTitle="Family"
        apiUrl={requests.fetchDiscoverMoviesFamily}
      />
      <Carousel
        categoryTitle="Documentary"
        apiUrl={requests.fetchDiscoverMoviesDocumentary}
      /> */}
    </div>
  );
}

export default App;
