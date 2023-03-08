import './App.css';
import React, {useEffect, useState, useRef} from 'react'
import Searchbar from './components/SearchBar';
import Gallery from './components/Gallery.js';
// import { DataContext } from './context/DataContext.js'
// import { SearchContext } from './context/SearchContext';

function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([]);
  let [message, setMessage] = useState('Search for music!');
  // let searchInput = useRef('');
  
  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      if (resData.results.length > 0){
        setData(resData.results)
      } else{
        setMessage('Not found')
      }
    }
    fetchData()
  }, [search]) 

  // const handleSubmit = (e, term) => {
  //   e.preventDefault()
  //   const fetchData = () => {
  //     document.title = `${term} Music`
  //     fetch(`https://itunes.apple.com/search?term=${term}`)
  //       .then(response => response.json())
  //       .then(result => {
  //         setData(result.results) 
  //       })
  //   }
      
  //     fetchData()
  // }

  return (
    <>
      {/* <SearchContext.Provider value={{ref: searchInput, handleSubmit}}> */}
        <Searchbar  />
      {/* </SearchContext.Provider> */}
      {message}
      {/* <DataContext.Provider value={data}> */}
        <Gallery  />
      {/* </DataContext.Provider> */}
      
      
    </>
  );
}

export default App;

// https://itunes.apple.com/search?term=the%20grateful%20dead
