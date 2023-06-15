import './SearchBar.css';
import { useState } from 'react';
import SearchOutput from '../Search Output/SearchOutput';




export const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const apiKey = 'a966bfd0991cf6614938f968e9c6db0a'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&page=1`

    const handleSearch = async () => {
      await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
        console.log('data', data);
      })
      .catch((err) => 
      console.log(err));
    }

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search){ 
        return;
      }
      else {
        handleSearch();
      }
    }

  return (
    <div className='search-container'>
    <form className="search-bar" onSubmit={handleSubmit}>
      <input className="search-bar__input" 
      type="text" 
      placeholder="Search for a movie..." 
      value={search} 
      onChange={handleInput}/>
      <button className="search-bar__button">Search</button>
    </form>
    <SearchOutput searchResults={searchResults} />
    </div>
    
  );
};

export default SearchBar;
