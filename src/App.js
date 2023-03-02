import './App.css';
import React, {useEffect, useState, useRef} from 'react'
import { Searchbar } from './components/SearchBar';
import { Gallery } from './components/Gallery';
import { DataContext } from './context/DataContext.js'
import { SearchContext } from './context/SearchContext';

function App() {
  
  let [data, setData] = useState([]);
  let [message, setMessage] = useState('Search for music!');
  let searchInput = useRef('');
  
  

  const handleSubmit = (e, term) => {
    e.preventDefault()
    const fetchData = () => {
      document.title = `${term} Music`
      fetch(`https://itunes.apple.com/search?term=${term}`)
        .then(response => response.json())
        .then(result => {
          setData(result.results) 
        })
    }
      
      fetchData()
  }

  return (
    <>
      <SearchContext.Provider value={{ref: searchInput, handleSubmit}}>
        <Searchbar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery  />
      </DataContext.Provider>
      
      
    </>
  );
}

export default App;

// https://itunes.apple.com/search?term=the%20grateful%20dead
