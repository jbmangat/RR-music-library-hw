import { useContext, useState } from "react";
// import { SearchContext } from "../context/SearchContext";

export function Searchbar(props) {
  
  // let { ref, handleSubmit } = useContext(SearchContext);
  let [searchTerm, setSearchTerm] = useState('')
  return (
    <form >
      <input 
        type="text"
        placeholder="Enter a search term here"
        
        // ref={ref}
      />
      <input type='submit' />
      {/* <button type="submit" onClick={(e) => handleSubmit(e, ref.current.value)} >Submit</button> */}
    </form>
  );
}

export default Searchbar 

// value={search} onChange={(e) => setSearch(e.target.value)}
