import { useEffect, useState } from "react";
import axios from "axios";

const CastInfo = props => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${
          props.mediaType === "movie" ? "movie" : "tv"
        }/${
          props.mediaId
        }/credits?api_key=35f10c27bb90f7965aa413322662125f&language=en-US`
      )
      .then(function(response) {
        setCredits(response.data);
        setLoadingData(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map(item => {
        return (
          <ul className="cast-info__crew">
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast</div>;
    }
  };

  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.map(item => {
        return (
          <ul className="cast-info__crew">
            <li>{item.job}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Crew</div>;
    }
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title-1">Cast</div>
      <div className="cast-info__list">{showCast()}</div>
      <div className="cast-info__group-title-2">Crew</div>
      <div className="cast-info__list">{showCrew()}</div>
    </div>
  );
};

export default CastInfo;
