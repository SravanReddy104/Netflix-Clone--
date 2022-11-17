import Row from "../Components/Row";
import requests from "../request";
import Banner from "../Components/Banner";

import Nav from "../Components/Nav";
import "./HomeScreen.css";


function HomeScreen() {

  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORGINALS"
          fetchUrl={requests.fetchNetflixOrginals}
          isLarge={true}
        />
        <Row title="Top Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        {/* <button onClick={setcounter(prev=>prev+1)}>Increment</button> */}
      </div>
    </>
    // navbar
    // header
    // build rows
  );
}

export default HomeScreen;
