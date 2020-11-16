import "./styles/app.scss";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import requests from "./utils/requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel
        categoryTitle="Popular movies"
        apiUrl={requests.fetchTrendingMovies}
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
