import "./SearchOutput.css";
import PropTypes from "prop-types";

export const SearchOutput = (props) => {
  const { searchResults, theme } = props;
  return (
    <div className={`search-output ${theme}`}>
      {searchResults.map((result) => (
        <div key={result.id} className="search-result">
          <img
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
          ></img>
          <h3>{result.title}</h3>
          <br />
          <p>
            Rating: <b>{result.vote_average}</b>/10
          </p>
          <br />
          <p>{result.overview}</p>
        </div>
      ))}
    </div>
  );
};

SearchOutput.propTypes = {
  searchResults: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired
};

export default SearchOutput;
