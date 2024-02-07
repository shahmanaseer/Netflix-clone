import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    try {
      console.log(id);
      axios
        .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0 || response.data.success) {
            // alert(response.data.results.length);
            setUrlId(response.data.results[0].key);
          } else {
            alert("Array empty");
          }
        });
    } catch (error) {
      alert("Error fetching movie videos:", error);
    }
  };

  const handleMouseLeave = () => {
    setUrlId("");
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div
            key={obj.id}
            onMouseEnter={() => handleMovie(obj.id)}
            onMouseLeave={handleMouseLeave}
            className="poster-container"
          >
            <img
              className={props.isSmall ? "smallPoster com" : "poster com"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
            <p>{obj.title || obj.original_name}</p>
          </div>
        ))}
      </div>
      {urlId ? <YouTube opts={opts} videoId={urlId} /> : ""}
    </div>
  );
}

export default RowPost;
