import './App.css';
import { useState, Suspense, useEffect } from 'react'
import Gallery from './components/Gallery.js'
import SearchBar from './components/SearchBar.js'
import Spinner from './Spinner.js'
import { createResource as fetchData } from './helper'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { Fragment } from 'react'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
  }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  const renderGallery = () => {
    if(data){
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      <div className='App'>
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch={handleSearch} />
							{message}
							{renderGallery()}
						</Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
		</div>
    </div>
  );
}

export default App;
// import './App.css'
// import React, { Fragment, useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Searchbar from "./components/SearchBar";
// import Gallery from "./components/Gallery.js";
// import ArtistView from "./components/ArtistView";
// import AlbumView from "./components/AlbumView";

// function App() {
//   let [search, setSearch] = useState("");
//   let [data, setData] = useState([]);
//   let [message, setMessage] = useState("Search for music!");

//   const API_URL = "https://itunes.apple.com/search?term=";

//   useEffect(() => {
//     if (search) {
//       const fetchData = async () => {
//         document.title = `${search} Music`;
//         // const response = await fetch(API_URL + search);
//         const response = await fetch(`https://itunes.apple.com/search?term=${search}`);
//         const resData = await response.json();
//         if (resData.results.length > 0) {
//           setData(resData.results);
//         } else {
//           setMessage("Not found");
//         }
//       };
//       fetchData();
//     }
//   }, [search]);

//   const handleSearch = (e, term) => {
//     e.preventDefault();
//     setSearch(term);
//   };
//   return (
//     <div>
//     {message}
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={
//             <>
//               <Searchbar handleSearch={handleSearch} />
//               <Gallery data={data} />
//             </>
//           }/>
//           <Route path='/album/:id' element={<AlbumView />} />
//           <Route path='/artist/:id' element={<ArtistView />} />
//         </Routes>  
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
