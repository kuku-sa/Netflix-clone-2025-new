import React from "react";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../utils/requests";

const Home = () => {
  return (
    <div>
      
      <Banner />

      {/* Movie Rows */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
