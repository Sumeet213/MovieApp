import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        height: '700px',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Breaking Bad is an American crime drama television series created and
          produced by Vince Gilligan. Set and filmed in Albuquerque, New Mexico,
          the series follows Walter White (Bryan Cranston), an underpaid,
          overqualified, and dispirited high-school chemistry teacher who is
          struggling with a recent diagnosis of stage-three lung cancer. White
          turns to a life of crime and partners with a former student, Jesse
          Pinkman (Aaron Paul), to produce and distribute crystal meth to secure`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
